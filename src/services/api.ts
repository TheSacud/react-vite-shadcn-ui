import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  //withCredentials: true,
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('jwtToken');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const setJwtToken = (token: string) => {
  localStorage.setItem('jwtToken', token);
};

export default api;