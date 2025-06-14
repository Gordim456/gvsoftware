
import React from 'react';

const AboutImage = () => {
  return (
    <div className="relative animate-fade-in">
      <div className="absolute -top-10 -left-10 w-full h-full bg-gradient-to-br from-indigo-500/30 to-purple-600/30 rounded-2xl blur-2xl"></div>
      
      <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl shadow-indigo-500/20 hover:scale-105 transition-transform duration-300">
        <img 
          src="/about-image.svg" 
          alt="GV Software Team" 
          className="w-full h-auto max-h-96 object-cover rounded-2xl" 
        />
        <div className="absolute inset-0 bg-gradient-to-tl from-indigo-900/30 to-transparent"></div>
      </div>
    </div>
  );
};

export default AboutImage;
