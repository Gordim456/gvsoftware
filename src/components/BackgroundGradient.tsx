
import { ReactNode } from 'react';

interface BackgroundGradientProps {
  children: ReactNode;
}

export const BackgroundGradient = ({ children }: BackgroundGradientProps) => {
  return (
    <div className="relative w-full">
      <div className="absolute inset-0 bg-gv-darker z-0">
        <div 
          className="absolute inset-0 w-full h-full opacity-10"
          style={{
            background: "radial-gradient(circle at center, rgba(99,102,241,0.3) 0%, rgba(139,92,246,0.2) 25%, rgba(0,0,0,0) 50%)",
          }}
        />
      </div>
      <div className="relative z-10 w-full">
        {children}
      </div>
    </div>
  );
};
