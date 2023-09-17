import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './variables.css';
import { GlobalStyle } from './globalStyles.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
)
