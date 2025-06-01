
import React from 'react';
import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';
import TikTokIcon from './icons/TikTokIcon';

const SocialIcons = () => {
  // Otimizadas variantes de animação para melhor performance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    }
  };
  
  const iconVariants = {
    hidden: { opacity: 0, x: 20, scale: 0.9 },
    visible: { opacity: 1, x: 0, scale: 1 }
  };
  
  return (
    <motion.div 
      className="fixed right-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-3 z-50"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Instagram Icon */}
      <motion.a 
        href="https://instagram.com/gvsoftware" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="relative group"
        variants={iconVariants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
      >
        <motion.div 
          className="absolute inset-0 rounded-full bg-gradient-to-tr from-rose-500 via-purple-500 to-yellow-500 opacity-0 group-hover:opacity-100 blur-sm -z-10"
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.2 }}
        />
        
        <div className="bg-gradient-to-tr from-rose-500 via-purple-500 to-yellow-500 p-3 rounded-full shadow-lg hover:shadow-purple-500/30 transition-all duration-200">
          <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
          <Instagram className="w-5 h-5 text-white relative z-10" strokeWidth={2.2} />
        </div>
      </motion.a>
      
      {/* TikTok Icon */}
      <motion.a 
        href="https://tiktok.com/@gvsoftware" 
        target="_blank" 
        rel="noopener noreferrer"
        className="relative group"
        variants={iconVariants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
      >
        <motion.div 
          className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 opacity-0 group-hover:opacity-100 blur-sm -z-10"
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.2 }}
        />
        
        <div className="bg-gradient-to-r from-gray-900 via-black to-gray-900 p-3 rounded-full shadow-lg hover:shadow-cyan-500/30 transition-all duration-200">
          <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
          <TikTokIcon className="w-5 h-5 text-white relative z-10" strokeWidth={2.2} />
        </div>
      </motion.a>
    </motion.div>
  );
};

export default React.memo(SocialIcons);
