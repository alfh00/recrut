// import axios from 'axios';
// import useAuthStore from '../stores/useAuthStore';

// const BASE_URL = import.meta.env.VITE_API_URL;

// const api = axios.create({
//   baseURL: BASE_URL,
//   withCredentials: true,
// });

// let isRefreshing = false;
// let failedQueue: any[] = [];

// const processQueue = (error: any, token: string | null = null) => {
//   failedQueue.forEach((prom) => {
//     if (token) {
//       prom.resolve(token);
//     } else {
//       prom.reject(error);
//     }
//   });
//   failedQueue = [];
// };

// api.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem('ACCESS_TOKEN');
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// api.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const originalRequest = error.config;
//     if (error.response?.status === 401 && !originalRequest._retry) {
//       if (isRefreshing) {
//         return new Promise((resolve, reject) => {
//           failedQueue.push({ resolve, reject });
//         }).then((token) => {
//           originalRequest.headers.Authorization = `Bearer ${token}`;
//           return axios(originalRequest);
//         });
//       }

//       originalRequest._retry = true;
//       isRefreshing = true;

//       const authStore = useAuthStore.getState();
//       try {
//         await authStore.refreshToken();
//         const token = localStorage.getItem('ACCESS_TOKEN');
//         processQueue(null, token);
//         originalRequest.headers.Authorization = `Bearer ${token}`;
//         return axios(originalRequest);
//       } catch (err) {
//         processQueue(err);
//         return Promise.reject(err);
//       } finally {
//         isRefreshing = false;
//       }
//     }

//     return Promise.reject(error);
//   }
// );

// export default api;
