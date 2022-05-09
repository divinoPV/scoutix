import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { loadUserState } from '../BrowserStorage/BrowserStorage';
import userSlice from './Slice/User';

export const store = configureStore({
  reducer: {
    user: userSlice,
  },
  devTools: true,
  preloadedState: loadUserState(),
});

export type Store = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<Store> = useSelector;
