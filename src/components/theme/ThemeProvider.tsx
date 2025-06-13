
import React from 'react';

// ThemeProvider completamente estático - sem hooks
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Aplicando tema dark direto no document sem useEffect
  if (typeof window !== 'undefined') {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add('dark');
  }

  return <>{children}</>;
}

// Hook que retorna valores fixos sem usar contexto
export const useTheme = () => {
  return {
    theme: 'dark' as const,
    setTheme: () => {},
    toggleTheme: () => {},
  };
};
