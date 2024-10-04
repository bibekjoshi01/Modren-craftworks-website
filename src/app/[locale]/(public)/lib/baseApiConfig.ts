import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosInstance, baseURL } from './axios';

export const BASE_API_SLICE = 'baseApi';

const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: '' }) =>
  async (args: any, api: any, extraOptions: any) => {
    const { url, method, data, params, headers, signal } = args;
    try {
      const result = await axiosInstance({
        url: baseUrl + url,
        method,
        data,
        params,
        headers,
        cancelToken: signal,
      });
      return { data: result.data };
    } catch (axiosError: any) {
      if (axiosError?.response?.status === 400) {
        let trial = 5;
      } else if (axiosError?.isRefreshError) {
        api.dispatch(baseApiSlice.util.resetApiState());
      }

      return {
        error: {
          status: axiosError?.response?.status,
          data: axiosError?.response?.data || axiosError?.message,
        },
      };
    }
  };

export const baseApiSlice = createApi({
  reducerPath: 'baseApi',
  baseQuery: axiosBaseQuery({
    baseUrl: baseURL,
  }),
  endpoints: () => ({}),
  tagTypes: ['CurrentAuthUser', 'Magazine', 'Profile'],
});
