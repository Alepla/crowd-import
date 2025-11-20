import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
  id: string;
  email: string;
  name: string;
}

interface AuthStore {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  register: (email: string, password: string, name: string) => Promise<boolean>;
}

const mockUsers = [
  { id: '1', email: 'demo@nufold.com', password: 'demo123', name: 'Usuario Demo' },
  { id: '2', email: 'test@nufold.com', password: 'test123', name: 'Usuario Test' }
];

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,

      login: async (email: string, password: string) => {
        await new Promise(resolve => setTimeout(resolve, 500));
        
        const user = mockUsers.find(u => u.email === email && u.password === password);
        
        if (user) {
          const { password: _, ...userWithoutPassword } = user;
          set({ 
            user: userWithoutPassword, 
            isAuthenticated: true 
          });
          return true;
        }
        
        return false;
      },

      register: async (email: string, password: string, name: string) => {
        await new Promise(resolve => setTimeout(resolve, 500));
        
        const existingUser = mockUsers.find(u => u.email === email);
        if (existingUser) {
          return false;
        }
        
        const newUser = {
          id: String(mockUsers.length + 1),
          email,
          name
        };
        
        mockUsers.push({ ...newUser, password });
        
        set({ 
          user: newUser, 
          isAuthenticated: true 
        });
        
        return true;
      },

      logout: () => {
        set({ 
          user: null, 
          isAuthenticated: false 
        });
      },
    }),
    {
      name: 'auth-store',
    }
  )
);

