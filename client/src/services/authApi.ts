import api from './api';
import { AuthResponse, LoginCredentials, RegisterCredentials } from '../types';
import { BASE_URL } from './api';

const AUTH_ENDPOINTS = {
    login: BASE_URL + '/token/',
    signup: BASE_URL + '/register/',
    refresh: BASE_URL + '/token/refresh/',
    logout: BASE_URL + '/logout/'
  };



export const login = async (credentials: LoginCredentials): Promise<AuthResponse> => {
  const response = await api.post<AuthResponse>(AUTH_ENDPOINTS.login, credentials);
  return response.data;
};

export const register = async (credentials: RegisterCredentials): Promise<AuthResponse> => {
  const response = await api.post<AuthResponse>(AUTH_ENDPOINTS.signup, credentials);
  return response.data;
};


export const logout = (): void => {
  localStorage.clear();
};

