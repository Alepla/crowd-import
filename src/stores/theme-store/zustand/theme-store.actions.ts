import { useThemeStore } from './theme-store.store';
import { ThemeStoreActions } from '../theme-store.model';

export const useThemeStoreActions: () => ThemeStoreActions = () =>
  useThemeStore(state => ({
    toggleTheme: state.toggleTheme
  }));

