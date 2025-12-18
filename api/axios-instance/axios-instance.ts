
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';
import { baseUrl } from '../environment/environments';

const instance = axios.create({
  baseURL: baseUrl,
});

instance.interceptors.request.use(
  async (config) => {
    const token = await SecureStore.getItemAsync('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken = await SecureStore.getItemAsync('refreshToken');
      if (refreshToken) {
        try {
          const { data } = await axios.post(`${baseUrl}/auth/refresh-token`, {
            refreshToken,
          });
          await SecureStore.setItemAsync('token', data.token);
          await SecureStore.setItemAsync('refreshToken', data.refreshToken);
          instance.defaults.headers.common.Authorization = `Bearer ${data.token}`;
          return instance(originalRequest);
        } catch (e) {
          return Promise.reject(e);
        }
      }
    }
    return Promise.reject(error);
  }
);

export default instance;

