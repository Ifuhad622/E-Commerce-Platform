import { fetchFromApi } from './api';

export const getProducts = async () => {
  return await fetchFromApi('products');
};
