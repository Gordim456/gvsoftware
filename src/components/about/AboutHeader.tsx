
import React from 'react';
import { Sparkles } from 'lucide-react';

const AboutHeader = () => {
  return (
    <div className="text-center mb-16 animate-fade-in">
      <div className="flex justify-center mb-4">
        <div className="bg-gradient-to-br from-indigo-500/20 to-purple-500/20 p-3 rounded-full">
          <Sparkles className="w-6 h-6 text-indigo-400" />
        </div>
      </div>
      <h2 className="text-3xl md:text-5xl font-bold mb-4">
        Sobre a <span className="gradient-text">GV Software</span>
      </h2>
      <p className="text-gv-gray max-w-2xl mx-auto text-lg">
        Somos uma empresa de desenvolvimento de software focada em criar soluções personalizadas que transformam ideias em realidade digital.
      </p>
    </div>
  );
};

export default AboutHeader;
