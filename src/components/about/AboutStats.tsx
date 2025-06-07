
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Users, Award, TrendingUp } from 'lucide-react';

const AboutStats = () => {
  const stats = [
    { icon: Code, label: 'Projetos Finalizados', value: '+3', description: 'Soluções desenvolvidas' },
    { icon: Users, label: 'Clientes Satisfeitos', value: '+3', description: 'Empresas atendidas' },
    { icon: Award, label: 'Experiência', value: 'Primeiro Ano', description: 'De Experiência' },
    { icon: TrendingUp, label: 'Taxa de Sucesso', value: '100%', description: 'Projetos bem-sucedidos' }
  ];

  return (
    <section className="py-16 bg-slate-950">
      <div className="container mx-auto px-4">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div 
                key={index}
                className="text-center p-6 bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-300"
                whileHover={{ y: -5, scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white">
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </h3>
                <p className="text-white font-semibold mb-1">{stat.label}</p>
                <p className="text-gray-400 text-sm">{stat.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutStats;
