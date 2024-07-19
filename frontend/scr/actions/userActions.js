import { login, register } from '../services/authService';
import { LOGIN_SUCCESS, REGISTER_SUCCESS } from '../constants/userConstants';

export const loginUser = (credentials) => async (dispatch) => {
  try {
    const user = await login(credentials);
    dispatch({ type: LOGIN_SUCCESS, payload: user });
  } catch (error) {
    console.error(error);
  }
};

export const registerUser = (data) => async (dispatch) => {
  try {
    const newUser = await register(data);
    dispatch({ type: REGISTER_SUCCESS, payload: newUser });
  } catch (error) {
    console.error(error);
  }
};

