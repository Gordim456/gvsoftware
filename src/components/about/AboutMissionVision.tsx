
import React from 'react';
import { motion } from 'framer-motion';
import { Target, TrendingUp } from 'lucide-react';

const AboutMissionVision = () => {
  return (
    <section className="py-16 bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div 
            className="bg-gradient-to-br from-slate-900/80 to-slate-800/50 backdrop-blur-sm p-8 rounded-3xl border border-slate-700/50 shadow-2xl"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Nossa Missão
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Transformar ideias em soluções digitais inovadoras, oferecendo tecnologia de ponta que impulsiona o crescimento e sucesso dos nossos clientes através de software de alta qualidade.
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-gradient-to-br from-slate-900/80 to-slate-800/50 backdrop-blur-sm p-8 rounded-3xl border border-slate-700/50 shadow-2xl"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.0, duration: 0.6 }}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Nossa Visão
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Ser referência no desenvolvimento de software, reconhecida pela excelência técnica, inovação constante e capacidade de criar soluções que realmente fazem a diferença no mercado digital.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMissionVision;
