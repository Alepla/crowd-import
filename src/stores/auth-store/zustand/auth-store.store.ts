import { createWithEqualityFn } from 'zustand/traditional';
import isEqual from 'lodash/isEqual';
import { createAuthStoreSlice } from './auth-store.slices';
import { AuthStoreState } from '../auth-store.model';

export const useAuthStore = createWithEqualityFn<AuthStoreState, []>(
  createAuthStoreSlice,
  isEqual,
);
