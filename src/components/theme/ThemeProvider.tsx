
import React, { createContext, useContext } from 'react';

// Criando o contexto do tema
const ThemeContext = createContext({
  theme: 'dark' as const,
  setTheme: () => {},
  toggleTheme: () => {},
});

// Provider que fornece valores fixos para o tema
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Aplicando tema dark direto no document
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const root = window.document.documentElement;
      root.classList.remove('light', 'dark');
      root.classList.add('dark');
    }
  }, []);

  const themeValue = {
    theme: 'dark' as const,
    setTheme: () => {},
    toggleTheme: () => {},
  };

  return (
    <ThemeContext.Provider value={themeValue}>
      {children}
    </ThemeContext.Provider>
  );
}

// Hook que usa o contexto
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    // Retorna valores padrão se o contexto não estiver disponível
    return {
      theme: 'dark' as const,
      setTheme: () => {},
      toggleTheme: () => {},
    };
  }
  return context;
};
