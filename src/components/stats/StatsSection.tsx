
import React from 'react';
import { motion } from 'framer-motion';
import { useStats } from '@/hooks/useStats';
import StatCard from './StatCard';

const StatsSection = () => {
  const { stats, isLoading } = useStats();

  if (isLoading) {
    return (
      <section className="py-16 bg-gv-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gray-700 rounded-full mx-auto mb-4 animate-pulse"></div>
                <div className="w-20 h-8 bg-gray-700 rounded mx-auto mb-2 animate-pulse"></div>
                <div className="w-24 h-4 bg-gray-700 rounded mx-auto animate-pulse"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gv-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Nossos Números
          </h2>
          <p className="text-gv-gray max-w-2xl mx-auto">
            Resultados que demonstram nossa experiência e compromisso com a excelência
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard 
              key={stat.id} 
              stat={stat} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
