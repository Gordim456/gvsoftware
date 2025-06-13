
import React from 'react';
import { Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutHeader = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <motion.div 
      className="text-center mb-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.2
          }
        }
      }}
    >
      <motion.div variants={fadeInUp} className="flex justify-center mb-4">
        <div className="bg-gradient-to-br from-indigo-500/20 to-purple-500/20 p-3 rounded-full">
          <Sparkles className="w-6 h-6 text-indigo-400" />
        </div>
      </motion.div>
      <motion.h2 
        variants={fadeInUp}
        className="text-3xl md:text-5xl font-bold mb-4"
      >
        Sobre a <span className="gradient-text">GV Software</span>
      </motion.h2>
      <motion.p 
        variants={fadeInUp}
        className="text-gv-gray max-w-2xl mx-auto text-lg"
      >
        Somos uma empresa de desenvolvimento de software focada em criar soluções personalizadas que transformam ideias em realidade digital.
      </motion.p>
    </motion.div>
  );
};

export default AboutHeader;
