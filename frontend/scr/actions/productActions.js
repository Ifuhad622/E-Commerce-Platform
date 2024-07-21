import { get } from '../services/api'; // Import the 'get' function from api service
import { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL } from '../constants/productConstants';

// Action creator to fetch products
export const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });

    // Make an API call to fetch products
    const response = await get('/products');
    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: response.data, // Payload will be the list of products
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

