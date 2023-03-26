import axios from 'axios';

export const BASE_API_URL = 'https://strapi.cleverland.by/api/';

export enum ApiPath {
  registration = 'auth/local/register',
  auth = 'auth/local',
  me = 'users/me',
  forgotPass = 'auth/forgot-password',
  resetPass = 'auth/reset-password',
  categories = 'categories',
  books = 'books',
  comments = 'comments',
  bookings = 'bookings',
  upload = 'upload',
}
export const axiosInstance = axios.create({
  withCredentials: true,
  baseURL: BASE_API_URL,
});

axiosInstance.interceptors.request.use((config: any) => {
  const token = localStorage.getItem('token');

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});
