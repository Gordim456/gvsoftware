
import * as React from 'react';
import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';
import TikTokIcon from './icons/TikTokIcon';

const SocialIcons = () => {
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
        href="https://www.instagram.com/gv_software/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="relative group"
        variants={iconVariants}
        whileHover={{ 
          scale: 1.1,
          rotate: [0, -10, 10, -10, 0],
          transition: { duration: 0.5 }
        }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
      >
        <motion.div 
          className="absolute inset-0 rounded-full bg-gradient-to-tr from-rose-500 via-purple-500 to-yellow-500 opacity-0 group-hover:opacity-100 blur-sm -z-10"
          whileHover={{ 
            scale: 1.2,
            rotate: 180,
            transition: { duration: 0.6 }
          }}
        />
        
        <div className="bg-gradient-to-tr from-rose-500 via-purple-500 to-yellow-500 p-3 rounded-full shadow-lg hover:shadow-purple-500/30 transition-all duration-200 relative overflow-hidden">
          <motion.div 
            className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-full"
            animate={{ 
              background: [
                "linear-gradient(45deg, rgba(255,255,255,0.1) 0%, transparent 100%)",
                "linear-gradient(225deg, rgba(255,255,255,0.2) 0%, transparent 100%)",
                "linear-gradient(45deg, rgba(255,255,255,0.1) 0%, transparent 100%)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <Instagram className="w-5 h-5 text-white relative z-10" strokeWidth={2.2} />
        </div>
      </motion.a>
      
      {/* TikTok Icon - Sem link, apenas tooltip */}
      <motion.div
        className="relative group cursor-not-allowed"
        variants={iconVariants}
        whileHover={{ 
          scale: 1.1,
          transition: { duration: 0.3 }
        }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
      >
        {/* Tooltip */}
        <div className="absolute -left-20 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap z-50">
          Em breve!
          <div className="absolute top-1/2 right-0 transform translate-x-1 -translate-y-1/2 w-0 h-0 border-l-4 border-l-gray-900 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
        </div>
        
        <div className="bg-gradient-to-r from-gray-700 to-gray-800 p-3 rounded-full shadow-lg opacity-50 relative overflow-hidden">
          <TikTokIcon className="w-5 h-5 text-gray-400 relative z-10" strokeWidth={2.2} />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default React.memo(SocialIcons);
