export const THEME = {
  LIGHT: 'light',
  DARK: 'dark'
} as const;

export type Theme = typeof THEME[keyof typeof THEME];

export interface ThemeStoreData {
  theme: Theme;
}

export interface ThemeStoreActions {
  toggleTheme: () => void;
}

export type ThemeStoreState = ThemeStoreData & ThemeStoreActions;

