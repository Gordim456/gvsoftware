
import { ReactNode } from 'react';

interface BackgroundGradientProps {
  children: ReactNode;
}

export const BackgroundGradient = ({ children }: BackgroundGradientProps) => {
  console.log('BackgroundGradient: Component renderizado');
  console.log('BackgroundGradient: Usando animações CSS puras ao invés de framer-motion');
  
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 -z-10 h-full w-full">
        <div className="absolute h-full w-full bg-gv-darker">
          {/* Substituindo framer-motion por CSS puro */}
          <div
            className="absolute inset-0 animate-pulse"
            style={{
              background: "radial-gradient(circle at center, rgba(99,102,241,0.15) 0%, rgba(139,92,246,0.15) 25%, rgba(0,0,0,0) 50%)",
              animationDuration: "4s",
              animationTimingFunction: "ease-in-out",
              animationIterationCount: "infinite"
            }}
          />
          {/* Gradiente adicional para melhorar o efeito visual */}
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background: "linear-gradient(45deg, rgba(99,102,241,0.1) 0%, rgba(139,92,246,0.1) 50%, rgba(0,0,0,0) 100%)",
              animation: "gentle-float 6s ease-in-out infinite"
            }}
          />
        </div>
      </div>
      {children}
    </div>
  );
};
