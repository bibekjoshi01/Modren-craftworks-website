import { combineReducers } from '@reduxjs/toolkit';
import { baseApiSlice } from './baseApiConfig';

export const rootReducer = combineReducers({
  [baseApiSlice.reducerPath]: baseApiSlice.reducer,
});
