// src/services/authService.js

import api from './api';

// Function to log in a user
export const login = async (email, password) => {
  try {
    const response = await api.post('/auth/login', { email, password });
    // Save the token or user information as needed
    localStorage.setItem('token', response.data.token); // Example for saving JWT
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data.message || 'Login failed');
  }
};

// Function to register a new user
export const register = async (userData) => {
  try {
    const response = await api.post('/auth/register', userData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data.message || 'Registration failed');
  }
};

// Function to get the current user
export const getCurrentUser = async () => {
  try {
    const response = await api.get('/auth/me', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data.message || 'Unable to fetch user');
  }
};

// Function to log out the user
export const logout = () => {
  localStorage.removeItem('token');
};


