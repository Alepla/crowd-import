import { StateCreator } from 'zustand';
import { ThemeStoreState, ThemeStoreData, Theme, THEME } from '../theme-store.model';

const getSystemTheme = (): Theme => {
  if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return THEME.DARK;
  }
  return THEME.LIGHT;
};

const getInitialTheme = (): Theme => {
  if (typeof window === 'undefined') {
    return THEME.LIGHT;
  }
  
  try {
    const savedTheme = localStorage.getItem('theme-store');
    if (savedTheme) {
      const parsed = JSON.parse(savedTheme);
      if (parsed.state?.theme === THEME.LIGHT || parsed.state?.theme === THEME.DARK) {
        return parsed.state.theme;
      }
    }
  } catch (_e) {
    // Si hay error al parsear, usar tema del sistema
  }
  
  return getSystemTheme();
};

const initialState: ThemeStoreData = {
  theme: getInitialTheme()
};

export const createThemeStoreSlice: StateCreator<ThemeStoreState> = (set) => ({
  ...initialState,

  toggleTheme: () => {
    set((state) => {
      const newTheme = state.theme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT;
      if (typeof document !== 'undefined') {
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme-store', JSON.stringify({ state: { theme: newTheme } }));
      }
      return { theme: newTheme };
    });
  }
});

