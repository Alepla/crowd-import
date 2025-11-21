export interface User {
  id: string;
  email: string;
  name: string;
}

export interface AuthStoreData {
  user: User | null;
  isAuthenticated: boolean;
}

export interface AuthStoreActions {
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  register: (email: string, password: string, name: string) => Promise<boolean>;
}

export type AuthStoreState = AuthStoreData & AuthStoreActions;

