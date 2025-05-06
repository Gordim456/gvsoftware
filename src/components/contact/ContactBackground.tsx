
import React, { ReactNode } from 'react';

type ContactBackgroundProps = {
  children: ReactNode;
};

const ContactBackground = ({ children }: ContactBackgroundProps) => {
  return (
    <section id="contact" className="py-20 bg-gv-darker relative overflow-hidden">
      {/* Animated background gradients */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-600 rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {children}
      </div>
    </section>
  );
};

export default ContactBackground;
