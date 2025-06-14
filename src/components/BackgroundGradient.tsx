
import { ReactNode } from 'react';

interface BackgroundGradientProps {
  children: ReactNode;
}

export const BackgroundGradient = ({ children }: BackgroundGradientProps) => {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 -z-10 h-full w-full">
        <div className="absolute h-full w-full bg-gv-darker">
          <div
            className="absolute inset-0"
            style={{
              background: "radial-gradient(circle at center, rgba(99,102,241,0.15) 0%, rgba(139,92,246,0.15) 25%, rgba(0,0,0,0) 50%)",
              animation: "pulse 4s ease-in-out infinite"
            }}
          />
        </div>
      </div>
      {children}
    </div>
  );
};
