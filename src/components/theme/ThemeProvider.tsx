
import React, { createContext, useContext, useState, useEffect } from 'react';

// Definindo o tipo do contexto de tema
type ThemeContextType = {
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
  toggleTheme: () => void;
};

// Criando o contexto do tema com um tipo para melhor segurança de tipos
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Provider que fornece valores para o tema
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Estado para controlar o tema (light ou dark)
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  // Efeito para aplicar o tema ao documento
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
  }, [theme]);

  // Função para alternar entre light e dark
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  const themeValue = {
    theme,
    setTheme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={themeValue}>
      {children}
    </ThemeContext.Provider>
  );
}

// Hook que usa o contexto de tema
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
