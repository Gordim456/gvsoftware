
import React, { createContext, useContext } from 'react';

type ThemeContextType = {
  theme: 'dark';
  setTheme: (theme: 'dark') => void;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType>({
  theme: 'dark',
  setTheme: () => {},
  toggleTheme: () => {},
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const value = {
    theme: 'dark' as const,
    setTheme: () => {},
    toggleTheme: () => {},
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
