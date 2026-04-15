import { configureStore } from '@reduxjs/toolkit';
import { apiService } from './apiService';

export const makeStore = () => {
  return configureStore({
    reducer: {
      [apiService.reducerPath]: apiService.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(apiService.middleware),
  });
};

// Type definitions for use throughout the app
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
