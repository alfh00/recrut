import axios, { AxiosError, InternalAxiosRequestConfig, AxiosResponse } from 'axios';
import { AuthResponse } from '../types';

export const BASE_URL = import.meta.env.VITE_API_URL;

const api = axios.create({
  baseURL: BASE_URL,  // Replace with your backend URL
  withCredentials: true,  // Ensures cookies are sent with requests
});

// Interceptor to include the Authorization header with the token
api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem('ACCESS_TOKEN');
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError) => Promise.reject(error)
);

// Interceptor to handle token refresh
let isRefreshing = false;
let failedQueue: Array<{ resolve: Function; reject: Function }> = [];

const processQueue = (error: unknown | null, token: string | null = null) => {
  failedQueue.forEach((prom) => {
    if (token) {
      prom.resolve(token);
    } else {
      prom.reject(error);
    }
  });
  failedQueue = [];
};

// Response interceptor to refresh the token when it expires
api.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as InternalAxiosRequestConfig & { _retry?: boolean };

    if (error.response?.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        })
          .then((token) => {
            originalRequest.headers.Authorization = `Bearer ${token}`;
            return axios(originalRequest);
          })
          .catch((err) => Promise.reject(err));
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        await refreshToken();  // Refresh the token
        const token = localStorage.getItem('ACCESS_TOKEN');
        processQueue(null, token);
        originalRequest.headers.Authorization = `Bearer ${token}`;
        return axios(originalRequest);
      } catch (err) {
        processQueue(err as AxiosError);
        return Promise.reject(err);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  }
);

export default api;

// Refresh token request function
export const refreshToken = async (): Promise<AuthResponse> => {
  try {
    const response = await api.post(BASE_URL + '/token/refresh/', {
      refresh: localStorage.getItem('REFRESH_TOKEN'),
    });  // Replace with your refresh endpoint
    const { access } = response.data;
    localStorage.setItem('access_token', access);
    return response.data;
  } catch (error) {
    console.error('Token refresh failed', error);
    throw error;
  }
};
