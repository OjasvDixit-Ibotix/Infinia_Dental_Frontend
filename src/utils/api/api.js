import axios from 'axios';

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
});

const publicRoutes = ['/users', '/login'];

apiClient.interceptors.request.use(
  (config) => {

    if (publicRoutes.includes(config.url)) {
      return config;
    }

    const token = localStorage.getItem('access_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiClient;