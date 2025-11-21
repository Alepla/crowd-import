import { createWithEqualityFn } from 'zustand/traditional';
import isEqual from 'lodash/isEqual';
import { createThemeStoreSlice } from './theme-store.slices';
import { ThemeStoreState } from '../theme-store.model';

export const useThemeStore = createWithEqualityFn<ThemeStoreState, []>(
  createThemeStoreSlice,
  isEqual,
);

