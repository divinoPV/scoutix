import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { preloader } from '../Storage/storage';
import userlice from './Slice/user';
import scopelice from './Slice/scope';

export const store = configureStore({
  reducer: {
    user: userlice,
    scope: scopelice,
  },
  devTools: true,
  preloadedState: preloader(),
});

export type Store = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;

export const useDispatchook = () => useDispatch<Dispatch>();
export const useSelectorook: TypedUseSelectorHook<Store> = useSelector;
