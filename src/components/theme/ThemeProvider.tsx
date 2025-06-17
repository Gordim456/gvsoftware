
import React from 'react';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Aplica tema escuro por padrão sem gerenciamento de estado
  React.useEffect(() => {
    document.documentElement.classList.add('dark');
    document.documentElement.style.colorScheme = 'dark';
  }, []);

  return <div className="min-h-screen bg-slate-950">{children}</div>;
}

export const useTheme = () => {
  return {
    theme: 'dark' as const,
    setTheme: () => {},
    toggleTheme: () => {}
  };
};
