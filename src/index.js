import React from 'react';
import ReactDOM from 'react-dom/client';
import ThemeProvider from './Style/ThemeProvider';
import { GlobalStyle } from './Style/GlobalStyle';
import './Style/GlobalFonts.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
