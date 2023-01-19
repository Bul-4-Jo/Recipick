import { useCallback, useLayoutEffect, useState } from 'react';

const useTheme = () => {
  const [theme, setTheme] = useState('light');

  const themeHandler = useCallback(() => {
    const updateTheme = theme === 'light' ? 'dark' : 'light';

    setTheme(prev => updateTheme);
    localStorage.setItem('theme', updateTheme);
  }, [theme]);

  useLayoutEffect(() => {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme && ['dark', 'light'].includes(savedTheme)) {
      setTheme(prev => savedTheme);
    }
  });

  return {
    theme,
    themeHandler,
  };
};

export default useTheme;
