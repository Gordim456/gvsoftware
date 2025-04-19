
import { motion } from 'framer-motion';

const AboutHero = () => {
  return (
    <div className="absolute inset-0 z-0">
      <div className="relative h-[500px] w-full">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-black/90 to-indigo-900/70 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.img
          src="https://images.unsplash.com/photo-1483058712412-4245e9b90334"
          alt="About Hero"
          className="w-full h-full object-cover"
          initial={{ scale: 1 }}
          animate={{ scale: 1.1 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
        />
      </div>
    </div>
  );
};

export default AboutHero;
