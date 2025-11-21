import { useThemeStore } from './theme-store.store';

export const useThemeConsumer = () => {
  return useThemeStore(state => state.theme);
};

export const useThemeStoreDataConsumer = () => {
  return useThemeStore(state => ({
    theme: state.theme
  }));
};
