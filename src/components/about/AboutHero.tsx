
import React from 'react';

const AboutHero = () => {
  return (
    <div className="relative h-[500px] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-indigo-900/70 z-10"></div>
      <img
        src="https://images.unsplash.com/photo-1483058712412-4245e9b90334"
        alt="Sobre a GV Software - Nossa História"
        className="w-full h-full object-cover"
        loading="eager"
        fetchPriority="high"
      />
      
      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <div className="text-center max-w-4xl px-4">
          <div className="w-16 h-16 mx-auto bg-indigo-500 bg-opacity-20 rounded-full flex items-center justify-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-rocket w-8 h-8 text-indigo-400">
              <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
              <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
              <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
              <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
            </svg>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">
            Nossa <span className="gradient-text">História</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            A GV Software nasceu com a missão de democratizar o acesso à tecnologia, criando soluções digitais inovadoras que transformam negócios e impulsionam o crescimento empresarial.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
