
import React from 'react';

interface CleanThemeProviderProps {
  children: React.ReactNode;
}

const CleanThemeProvider: React.FC<CleanThemeProviderProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {children}
    </div>
  );
};

export default CleanThemeProvider;
