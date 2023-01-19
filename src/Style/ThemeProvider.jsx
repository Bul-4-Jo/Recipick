import React, { createContext } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import useTheme from '../Hooks/useTheme';
import { darkModeColors, lightModeColors } from './GlobalTheme';

const defaultMode = { theme: 'light', themeHandler: () => {} };

export const ThemeContext = createContext(defaultMode);

const ThemeProvider = ({ children }) => {
  const themeProps = useTheme();

  return (
    <ThemeContext.Provider value={themeProps}>
      <StyledThemeProvider theme={themeProps.theme === 'light' ? lightModeColors : darkModeColors}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
