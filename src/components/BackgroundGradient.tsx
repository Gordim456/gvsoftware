
import { ReactNode } from 'react';

interface BackgroundGradientProps {
  children: ReactNode;
}

export const BackgroundGradient = ({ children }: BackgroundGradientProps) => {
  return (
    <div className="relative w-full bg-gv-darker">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950 opacity-80"></div>
      <div className="relative z-10 w-full">
        {children}
      </div>
    </div>
  );
};
