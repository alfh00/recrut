import {create} from 'zustand';
import { login, register } from '../services/authApi';
import { LoginCredentials, RegisterCredentials, User } from '../types';
import { refreshToken } from '../services/api';

interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  login: (credentials: LoginCredentials) => Promise<void>;
  register: (credentials: RegisterCredentials) => Promise<void>;
  logout: () => void;
  refreshToken: () => Promise<void>;
}

const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: localStorage.getItem('ACCESS_TOKEN'),
  isAuthenticated: false,

  login: async (credentials) => {
    try {
      const response = await login(credentials);
      const { access, refresh, user } = response;
      console.log(response);

      localStorage.setItem('ACCESS_TOKEN', access);
      document.cookie = `refresh_token=${refresh}; HttpOnly; Path=/; SameSite=Strict;`;

      set({
        token: access,
        isAuthenticated: true,
        user: user as User,  // Store the decoded user data
      });
    } catch (error) {
      console.error('Login failed', error);
    }
  },

  register: async (formData) => {
    try {
      const response = await register(formData);
      const { access, refresh, user } = response;
      
      localStorage.setItem('ACCESS_TOKEN', access);
      document.cookie = `refresh_token=${refresh}; HttpOnly; Path=/; SameSite=Strict;`;

      set({
        token: access,
        isAuthenticated: true,
        user: user as User,  // Store the decoded user data
      });
    } catch (error) {
      console.error('Registration failed', error);
    }
  },

  logout: () => {
    localStorage.clear();
    document.cookie = 'refresh_token=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    set({ user: null, token: null, isAuthenticated: false });
  },

  refreshToken: async () => {
    try {
      const response = await refreshToken();
      const { access, user } = response;

      localStorage.setItem('ACCESS_TOKEN', access);
      set({ token: access, isAuthenticated: true, user: user as User });
    } catch (error) {
      console.error('Token refresh failed', error);
      set({ token: null, isAuthenticated: false });
    }
  },
}));

export default useAuthStore;
