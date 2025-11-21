import { useAuthStore } from './auth-store.store';

export const useAuthUserConsumer = () => {
  return useAuthStore(state => state.user);
};

export const useAuthIsAuthenticatedConsumer = () => {
  return useAuthStore(state => state.isAuthenticated);
};

export const useAuthStoreDataConsumer = () => {
  return useAuthStore(state => ({
    user: state.user,
    isAuthenticated: state.isAuthenticated
  }));
};
