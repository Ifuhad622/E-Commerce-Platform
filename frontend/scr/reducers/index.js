import { combineReducers } from 'redux';
import productListReducer from './productListReducer'; // Ensure this path is correct

const rootReducer = combineReducers({
  productList: productListReducer,
  // Add other reducers here
});

export default rootReducer;

