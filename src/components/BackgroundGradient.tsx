
import React from 'react';

interface BackgroundGradientProps {
  children: React.ReactNode;
}

console.log('BackgroundGradient: Component loaded');

export const BackgroundGradient: React.FC<BackgroundGradientProps> = ({ children }) => {
  console.log('BackgroundGradient: Rendering component');
  
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background with GV icon pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
        {/* Animated GV icons */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 animate-float">
            <img src="/lovable-uploads/9f7f23c2-a7d8-4c06-91f5-99f80576127f.png" 
                 alt="GV Icon" 
                 className="w-16 h-16 opacity-30" />
          </div>
          <div className="absolute top-32 right-20 animate-float" style={{animationDelay: '1s'}}>
            <img src="/lovable-uploads/9f7f23c2-a7d8-4c06-91f5-99f80576127f.png" 
                 alt="GV Icon" 
                 className="w-12 h-12 opacity-20" />
          </div>
          <div className="absolute bottom-20 left-1/4 animate-float" style={{animationDelay: '2s'}}>
            <img src="/lovable-uploads/9f7f23c2-a7d8-4c06-91f5-99f80576127f.png" 
                 alt="GV Icon" 
                 className="w-20 h-20 opacity-25" />
          </div>
          <div className="absolute top-1/2 right-10 animate-float" style={{animationDelay: '3s'}}>
            <img src="/lovable-uploads/9f7f23c2-a7d8-4c06-91f5-99f80576127f.png" 
                 alt="GV Icon" 
                 className="w-14 h-14 opacity-15" />
          </div>
        </div>
        
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-transparent to-purple-500/10" />
      </div>
      
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-gradient-to-r from-blue-400/10 to-purple-600/10 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-r from-purple-400/10 to-pink-600/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-64 h-64 bg-gradient-to-r from-indigo-400/10 to-blue-600/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};
