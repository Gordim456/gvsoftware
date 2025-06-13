
import React from 'react';
import { motion } from 'framer-motion';

const AboutImage = () => {
  return (
    <motion.div 
      className="relative"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <div className="absolute -top-10 -left-10 w-full h-full bg-gradient-to-br from-indigo-500/30 to-purple-600/30 rounded-2xl blur-2xl"></div>
      
      <motion.div 
        className="relative z-10 rounded-2xl overflow-hidden shadow-2xl shadow-indigo-500/20"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <img 
          src="/about-image.svg" 
          alt="GV Software Team" 
          className="w-full h-auto max-h-96 object-cover rounded-2xl" 
        />
        <div className="absolute inset-0 bg-gradient-to-tl from-indigo-900/30 to-transparent"></div>
      </motion.div>
    </motion.div>
  );
};

export default AboutImage;
