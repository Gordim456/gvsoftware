
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';

const OptimizedAboutImage = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(true);
  };

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
        <div className="w-full h-96 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 rounded-2xl flex items-center justify-center relative overflow-hidden">
          {!imageError ? (
            <>
              {!imageLoaded && (
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 animate-pulse" />
              )}
              <img 
                src="/about-image.svg" 
                alt="Equipe GV Software - Desenvolvimento de Software" 
                className={`w-full h-full object-cover transition-opacity duration-300 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                onLoad={handleImageLoad}
                onError={handleImageError}
                loading="lazy"
                decoding="async"
              />
            </>
          ) : (
            <Users className="w-24 h-24 text-indigo-400" />
          )}
        </div>
        <div className="absolute inset-0 bg-gradient-to-tl from-indigo-900/30 to-transparent"></div>
      </motion.div>
    </motion.div>
  );
};

export default OptimizedAboutImage;
