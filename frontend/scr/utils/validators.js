// src/utils/validators.js

// Function to validate email
export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

// Function to validate password (minimum 8 characters, 1 uppercase, 1 lowercase, 1 number)
export const validatePassword = (password) => {
  const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  return re.test(password);
};

// Function to validate phone number (simple validation for numbers only)
export const validatePhoneNumber = (phone) => {
  const re = /^[0-9]{10,15}$/; // Adjust length as needed
  return re.test(phone);
};

// Function to validate required fields
export const validateRequired = (value) => {
  return value.trim() !== '';
};

// Function to validate postal code (simple validation for numbers and letters)
export const validatePostalCode = (postalCode) => {
  const re = /^[A-Za-z0-9]{5,10}$/; // Adjust length and pattern as needed
  return re.test(postalCode);
};

// Function to validate URL
export const validateURL = (url) => {
  const re = /^(https?:\/\/)?([\w\d-]+\.)+[\w\d]{2,}(\/[\w\d#-]*)?$/;
  return re.test(url);
};

// Function to validate number within a range
export const validateNumberInRange = (number, min, max) => {
  return number >= min && number <= max;
};

// Function to validate that a field is a number
export const validateNumber = (value) => {
  const re = /^[0-9]+$/;
  return re.test(value);
};
