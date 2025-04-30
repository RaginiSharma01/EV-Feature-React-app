// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; // Make sure you're importing the right component

const root = ReactDOM.createRoot(document.getElementById('root')); // React 18
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
