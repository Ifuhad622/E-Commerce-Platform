// src/services/api.js

import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL, // Use environment variable
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const get = (url, params = {}) => {
  return api.get(url, { params });
};

export const post = (url, data) => {
  return api.post(url, data);
};

export const put = (url, data) => {
  return api.put(url, data);
};

export const deleteRequest = (url) => {
  return api.delete(url);
};

export default api;

