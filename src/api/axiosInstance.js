import axios from 'axios';
import i18next from 'i18next';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BURL,
  withCredentials: true,
});

axiosInstance.interceptors.request.use((config) => {
  config.headers = config.headers || {};

  config.headers['Accept-Language'] =
    i18next.resolvedLanguage || i18next.language || 'en';

  return config;
});

export default axiosInstance;
