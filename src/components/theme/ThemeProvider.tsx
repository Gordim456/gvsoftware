
import React from 'react';

// Simplified theme provider without hooks to avoid useState errors
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Apply dark theme by default without state management
  React.useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return <>{children}</>;
}

export const useTheme = () => {
  return {
    theme: 'dark' as const,
    setTheme: () => {},
    toggleTheme: () => {}
  };
};
