
// This is a fallback file to prevent import errors
// The real theme provider is CleanThemeProvider
import React from 'react';

console.log('🔥 FALLBACK: Old ThemeProvider file accessed - redirecting to CleanThemeProvider');

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  console.error('🔥 FALLBACK: Old ThemeProvider was called! This should not happen.');
  return <>{children}</>;
};

export { ThemeProvider };
export default ThemeProvider;
