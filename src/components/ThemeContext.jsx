import React from 'react';
import { useState, useEffect } from 'react';

const themes = {
  dark: {
    backgroundColor: 'var(--primary-color-3)',
    backgroundColor3: '#ddd',
    color: '#ddd',
    color2: '#000',
    color3: '#000',

    color10: 'var(--primary-color-4)',
  },
  light: {
    backgroundColor: '#eee',
    // backgroundColor2: '#ddd',
    backgroundColor3: 'var(--primary-color-3)',
    backgroundColor4: 'var(--primary-color-5)',
    color: 'var(--primary-color-3)',
    color2: 'var(--primary-color-5)',
    color3: '#fff',
    borderColor: 'var(--primary-color-5)',

    color10: 'var(--primary-color-5)',
  },
};

const initialState = {
  dark: true,
  theme: themes.dark,
  toggle: () => {},
};

const ThemeContext = React.createContext(initialState);

function ThemeProvider({ children }) {
  const [dark, setDark] = useState(true);
  useEffect(() => {
    const isDark = localStorage.getItem('dark') === null || localStorage.getItem('dark') === 'true';
    setDark(isDark);
  }, [dark]);

  const toggle = () => {
    const isDark = !dark;
    localStorage.setItem('dark', JSON.stringify(isDark));
    setDark(isDark);
  };
  const theme = dark ? themes.dark : themes.light;
  return <ThemeContext.Provider value={{ theme, dark, toggle }}>{children}</ThemeContext.Provider>;
}

export { ThemeProvider, ThemeContext };
