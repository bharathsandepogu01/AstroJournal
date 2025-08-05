import axios from 'axios';
import { API_URL } from '@utils/constants';

export const astroOpenApiInstance = axios.create({
  baseURL: API_URL,
});

astroOpenApiInstance.interceptors.request.use(
  async config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

astroOpenApiInstance.interceptors.response.use(
  response => response,
  error => {
    return Promise.reject(error);
  },
);
