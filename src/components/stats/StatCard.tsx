
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { StatItem } from '@/hooks/useStats';
import AnimatedCounter from './AnimatedCounter';

interface StatCardProps {
  stat: StatItem;
  index: number;
}

const StatCard = ({ stat, index }: StatCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="text-center group"
    >
      <div className="bg-gradient-to-br from-indigo-600/20 to-purple-600/20 backdrop-blur-sm border border-indigo-500/20 rounded-xl p-6 hover:border-indigo-400/40 transition-all duration-300 hover:transform hover:scale-105">
        <div className="text-4xl md:text-5xl font-bold text-white mb-2 flex items-center justify-center">
          {stat.prefix && (
            <span className="text-indigo-400 mr-1">{stat.prefix}</span>
          )}
          
          <AnimatedCounter 
            value={stat.value} 
            isVisible={isInView}
            animated={stat.animated}
          />
          
          {stat.suffix && (
            <span className="text-indigo-400 ml-1">{stat.suffix}</span>
          )}
        </div>
        
        <p className="text-gv-gray font-medium group-hover:text-white transition-colors duration-300">
          {stat.label}
        </p>
      </div>
    </motion.div>
  );
};

export default StatCard;
