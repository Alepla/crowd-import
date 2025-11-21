import { useAuthStore } from './auth-store.store';
import { AuthStoreActions } from '../auth-store.model';

export const useAuthStoreActions: () => AuthStoreActions = () =>
  useAuthStore(state => ({
    login: state.login,
    logout: state.logout,
    register: state.register
  }));

