
import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Coffee } from 'lucide-react';

const SocialIcons = () => {
  return (
    <motion.div 
      className="fixed right-6 top-1/2 transform -translate-y-1/2 flex flex-col gap-4 z-50"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
    >
      <motion.a 
        href="https://instagram.com" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="bg-indigo-600 p-3 rounded-full hover:scale-110 hover:bg-indigo-700 transition-all"
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
      >
        <Instagram className="w-6 h-6 text-white" />
      </motion.a>
      <motion.a 
        href="https://tiktok.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-indigo-600 p-3 rounded-full hover:scale-110 hover:bg-indigo-700 transition-all"
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
      >
        <Coffee className="w-6 h-6 text-white" />
      </motion.a>
    </motion.div>
  );
};

export default SocialIcons;
