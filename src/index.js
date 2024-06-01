import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import App from './App';
import { ThemeContextProvider } from './component/contexts/ThemeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeContextProvider>
    <App />
  </ThemeContextProvider>
  
);

/*
<React.StrictMode>
    <App />
  </React.StrictMode>
 
  */