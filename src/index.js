import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css'
import App from './App.js';



import { BrowserRouter as Router } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
    <Router>
      <App />
    </Router>
    </AuthContextProvider>
  </React.StrictMode>
);



