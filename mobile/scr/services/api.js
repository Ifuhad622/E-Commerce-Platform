const API_URL = 'https://your-backend-url/api';

export const fetchFromApi = async (endpoint) => {
  try {
    const response = await fetch(`${API_URL}/${endpoint}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};
