
import React from 'react';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';

const AboutHero = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950"></div>
      
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-cyan-600/10 to-blue-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="w-20 h-20 mx-auto bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mb-8 shadow-2xl"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
          >
            <Users className="w-10 h-10 text-white" />
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent">
            Sobre a <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">GV Software</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Somos uma empresa especializada em desenvolvimento de software, criando soluções digitais inovadoras para transformar negócios.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero;
