import axios from 'axios';
import i18next from 'i18next';
import useAuthStore from '../store/authStore';

const authAxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BURL,
  withCredentials: true,
});

authAxiosInstance.interceptors.request.use((config) => {
  config.headers = config.headers || {};

  config.headers['Accept-Language'] =
    i18next.resolvedLanguage || i18next.language || 'en';
  const token = useAuthStore.getState().token;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});
