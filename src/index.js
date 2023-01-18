import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './Style/GlobalStyle';
import './Style/GlobalFonts.css';
import App from './App';
import theme from './Style/GlobalTheme';

const isDarkMode = false;

const colors = isDarkMode ? theme.darkModeColors : theme.lightModeColors;

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ThemeProvider theme={{ ...theme, colors }}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
