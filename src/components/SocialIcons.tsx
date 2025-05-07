
import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, TikTok } from 'lucide-react';

const SocialIcons = () => {
  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.8,
      }
    }
  };
  
  // Icon animation variants with improved effects
  const iconVariants = {
    hidden: { opacity: 0, x: 30, scale: 0.8 },
    visible: { opacity: 1, x: 0, scale: 1 }
  };
  
  return (
    <motion.div 
      className="fixed right-6 top-1/2 transform -translate-y-1/2 flex flex-col gap-5 z-50"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Instagram Icon */}
      <motion.a 
        href="https://instagram.com" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="relative group"
        variants={iconVariants}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        {/* Animated glow effect */}
        <motion.div 
          className="absolute inset-0 rounded-full bg-gradient-to-tr from-rose-500 via-purple-500 to-yellow-500 opacity-0 group-hover:opacity-100 blur-md -z-10"
          initial={{ scale: 0.85 }}
          whileHover={{ scale: 1.35 }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Icon container with gradient */}
        <div className="bg-gradient-to-tr from-rose-500 via-purple-500 to-yellow-500 p-3.5 rounded-full overflow-hidden relative shadow-lg hover:shadow-purple-500/30 transition-all duration-300">
          {/* Shine effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <Instagram className="w-6 h-6 text-white relative z-10" strokeWidth={2.2} />
        </div>
      </motion.a>
      
      {/* TikTok Icon */}
      <motion.a 
        href="https://tiktok.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="relative group"
        variants={iconVariants}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        {/* Animated glow effect */}
        <motion.div 
          className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 opacity-0 group-hover:opacity-100 blur-md -z-10"
          initial={{ scale: 0.85 }}
          whileHover={{ scale: 1.35 }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Icon container with gradient */}
        <div className="bg-gradient-to-r from-black via-gray-900 to-black p-3.5 rounded-full overflow-hidden relative shadow-lg hover:shadow-cyan-500/30 transition-all duration-300">
          {/* Shine effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <TikTok className="w-6 h-6 text-white relative z-10" strokeWidth={2.2} />
        </div>
      </motion.a>
    </motion.div>
  );
};

export default React.memo(SocialIcons);
