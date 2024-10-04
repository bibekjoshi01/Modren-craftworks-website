import { configureStore } from '@reduxjs/toolkit';
// @ts-ignore
import { CurriedGetDefaultMiddleware } from '@reduxjs/toolkit/dist/getDefaultMiddleware';

import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { baseApiSlice } from './baseApiConfig';
import { rootReducer } from './reducer';

const combinedMiddleware = (
  getDefaultMiddleware: CurriedGetDefaultMiddleware
) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }).concat([baseApiSlice.middleware]);

// const combinedReducer = combineReducers({
//   blog: blogReducer,
//   cart: cartReducer,
//   login: loginReducer,
//   commonApp: commonAppSlice,

//   [baseApiSlice.reducerPath]: baseApiSlice.reducer,
// });

const persistConfig = {
  key: 'root',
  // blacklist: ['commonApp'],
  whitelist: ['blog', 'cart', 'login'],
  storage,
};
const persistedReducers = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducers,
  // devTools: config.env !== APP_ENVIRONMENT_PRODUCTION,
  middleware: combinedMiddleware,
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     serializableCheck: {
  //       ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
  //     },
  //   }),
});
export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
