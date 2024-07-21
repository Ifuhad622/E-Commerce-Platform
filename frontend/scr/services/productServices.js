// src/services/productService.js

import api from './api';

// Function to fetch all products
export const fetchProducts = async () => {
  try {
    const response = await api.get('/products');
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data.message || 'Failed to fetch products');
  }
};

// Function to fetch a single product by ID
export const fetchProductById = async (productId) => {
  try {
    const response = await api.get(`/products/${productId}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data.message || 'Failed to fetch product');
  }
};

// Function to create a new product
export const createProduct = async (productData) => {
  try {
    const response = await api.post('/products', productData, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`, // Use token if needed
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data.message || 'Failed to create product');
  }
};

// Function to update an existing product
export const updateProduct = async (productId, productData) => {
  try {
    const response = await api.put(`/products/${productId}`, productData, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`, // Use token if needed
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data.message || 'Failed to update product');
  }
};

// Function to delete a product by ID
export const deleteProduct = async (productId) => {
  try {
    const response = await api.delete(`/products/${productId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`, // Use token if needed
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data.message || 'Failed to delete product');
  }
};


