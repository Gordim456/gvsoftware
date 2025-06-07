
import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Shield, Zap } from 'lucide-react';

const AboutFeatureGrid = () => {
  const features = [
    {
      icon: Globe,
      title: 'Soluções Globais',
      description: 'Desenvolvemos aplicações que atendem padrões internacionais de qualidade e performance.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Shield,
      title: 'Segurança Avançada',
      description: 'Implementamos as melhores práticas de segurança para proteger seus dados e sistemas.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Zap,
      title: 'Performance Otimizada',
      description: 'Criamos soluções rápidas e eficientes que garantem a melhor experiência do usuário.',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section className="py-16 bg-slate-950">
      <div className="container mx-auto px-4">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div 
                key={index}
                className="bg-gradient-to-br from-slate-900/80 to-slate-800/50 backdrop-blur-sm p-8 rounded-3xl border border-slate-700/50 shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300"
                whileHover={{ y: -5, scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1.4 + index * 0.1 }}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutFeatureGrid;
