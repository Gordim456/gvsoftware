
import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, TrendingUp } from 'lucide-react';

const SocialIcons = () => {
  // Use lazy loading for animation to reduce initial load time
  const iconVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 }
  };
  
  return (
    <motion.div 
      className="fixed right-6 top-1/2 transform -translate-y-1/2 flex flex-col gap-4 z-50"
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.15, delayChildren: 0.5 }}
    >
      <motion.a 
        href="https://instagram.com" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="bg-indigo-600 p-3 rounded-full hover:bg-indigo-700 transition-all"
        variants={iconVariants}
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
      >
        <Instagram className="w-6 h-6 text-white" />
      </motion.a>
      <motion.a 
        href="https://tiktok.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-indigo-600 p-3 rounded-full hover:bg-indigo-700 transition-all"
        variants={iconVariants}
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
      >
        <TrendingUp className="w-6 h-6 text-white" />
      </motion.a>
    </motion.div>
  );
};

export default React.memo(SocialIcons); // Use memo to prevent unnecessary re-renders
