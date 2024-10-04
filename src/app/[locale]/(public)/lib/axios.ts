import axios, { AxiosResponse } from 'axios';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';
import { publicAPI } from '../constants/routes';
import { PUBLIC_ACCESS_TOKEN, PUBLIC_REFRESH_TOKEN } from '../constants/tokens';

export const baseURL = `${process.env.NEXT_PUBLIC_APP_HTTP_SCHEME}${process.env.NEXT_PUBLIC_APP_BASE_URL}${process.env.NEXT_PUBLIC_APP_API_VERSION}${process.env.NEXT_PUBLIC_APP_IDENTIFIER}/`;

export const axiosInstance = axios.create({
  baseURL: baseURL,
});

const refreshInstance = axios.create({
  baseURL: baseURL,
});

let isRefreshing = false;
let refreshSubscribers: ((newToken: string) => void)[] = [];

const subscribeTokenRefresh = (callback: (newToken: string) => void) => {
  refreshSubscribers.push(callback);
};
const onRefreshed = (newToken: string) => {
  refreshSubscribers.forEach((callback) => callback(newToken));
  refreshSubscribers = [];
};

axiosInstance.interceptors.request.use(
  (config: any) => {
    if (!window.navigator.onLine) {
      toast.error('No internet connection available.', {
        toastId: 'no-internet-toast',
      });
    }

    if (!config.headers) {
      config.headers = {};
    }
    const accessToken = Cookies.get(PUBLIC_ACCESS_TOKEN);
    const isPublicRoute = publicAPI.some((path) => {
      return config?.url?.endsWith(path);
    });
    // #ToDo only attach Bearer tokens in case of private routes
    config.headers['Authorization'] =
      accessToken && !isPublicRoute ? `Bearer ${accessToken}` : '';
    console.log(config.headers, config.data, 'config');

    if (config.data instanceof FormData) {
      config.headers['Content-Type'] = 'multipart/form-data';
    } else {
      config.headers['Content-Type'] = 'application/json';
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response?.data?.message) {
      toast.success(response?.data?.message);
    }

    return response;
  },
  async (error) => {
    const errorConfig = error?.config;

    if (axios.isCancel(error)) {
      toast.error(`Request canceled ${error?.message}.`);
    } else if (error.message === 'No Internet') {
      toast.error('No internet connection available.');
    } else if (error.toJSON().message === 'Network Error') {
      toast.error('Network Error.', {
        toastId: 'network-error-toast',
      });
    }

    // 400 errors
    else if (error?.response?.status === 401) {
      // token invalid or expired
      if (
        error?.response?.data?.code === 'token_not_valid' &&
        !errorConfig._retry
      ) {
        errorConfig._retry = true;

        if (!isRefreshing) {
          isRefreshing = true;
          const refreshToken = Cookies.get(PUBLIC_REFRESH_TOKEN);
          Cookies.remove(PUBLIC_ACCESS_TOKEN);

          try {
            const response = await refreshInstance.post(
              'user-app/users/token/refresh',
              { refresh: refreshToken }
            );
            if (response?.status === 200) {
              const newToken = response?.data?.access;
              Cookies.set(PUBLIC_ACCESS_TOKEN, newToken, {
                secure: true,
              });
              onRefreshed(newToken);
              isRefreshing = false;
              return axiosInstance(errorConfig);
            }
          } catch (refreshError) {
            toast.error(
              'Your session has expired, Please Login again to continue using the app.'
            );
            isRefreshing = false;
            (refreshError as any).isRefreshError = true;
            throw refreshError;
          }
        }

        return new Promise<AxiosResponse>((resolve) => {
          subscribeTokenRefresh((newToken: string) => {
            errorConfig.headers['Authorization'] = `Bearer ${newToken}`;
            resolve(axiosInstance(errorConfig));
          });
        });
      }
    } else if (error.response?.status === 403) {
      toast.error('Permission denied.');
    } else if (error.response?.status === 404) {
      toast.error('Resource not found.');
    } else if (error?.response?.status === 405) {
      toast.error('Method not allowed.');
    }
    // 500 errors
    else if (error.response?.status === 500 || error.response?.status > 500) {
      // Handle internal server error
      toast.error('Server error, try again later.');
    }

    throw error;
  }
);
