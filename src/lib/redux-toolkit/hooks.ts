import { useDispatch, useSelector, useStore } from "react-redux";
import type { TypedUseSelectorHook } from 'react-redux';
import type { RouterState, AppStore, AppDispatch } from './store'


//Gunakan di seluruh aplikasi Anda, bukan `useDispatch` dan `useSelector` biasa
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RouterState> = useSelector;
export const useAppStore: () => AppStore = useStore;