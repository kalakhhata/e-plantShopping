import React from 'react';  // Import React
import ReactDOM from 'react-dom/client';  // Import ReactDOM to render the application
import App from './App.jsx';  // Import your main App component
import './index.css';  // Import global styles
import { Provider } from 'react-redux';  // Import Provider from react-redux
import store from './store.js';  // Import the configured Redux store

// Render the application
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Wrap your App component with the Provider and pass the store as a prop */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
