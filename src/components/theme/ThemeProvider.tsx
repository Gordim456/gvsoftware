
import React from 'react';

// Simplificando o ThemeProvider para evitar erros de hook
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Removendo useState problemático e usando tema fixo
  React.useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add('dark');
  }, []);

  return <>{children}</>;
}

// Hook simplificado que sempre retorna dark theme
export const useTheme = () => {
  return {
    theme: 'dark' as const,
    setTheme: () => {},
    toggleTheme: () => {},
  };
};
