import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated import for React 18
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { thunk } from 'redux-thunk'; // Correctly importing `thunk` as a named export
import rootReducer from './reducers'; // Ensure this path is correct
import './index.css'; // Import global CSS styles

// Setup Redux DevTools Extension for development
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create Redux store with middleware
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk)) // Apply middleware and enhancers
);

// Use React 18's createRoot for rendering
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
