import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SocialIcons from '../components/SocialIcons';
import { motion } from 'framer-motion';
import { Users, Target, Award, TrendingUp, Code, Globe, Shield, Zap } from 'lucide-react';

const About: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    document.title = 'Sobre | GV Software - Nossa História e Missão';
    setIsLoaded(true);
    
    const existingMeta = document.querySelector('meta[name="description"]');
    if (!existingMeta) {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Conheça a GV Software - Empresa especializada em desenvolvimento de software com mais de 5 anos de experiência criando soluções digitais inovadoras.';
      document.head.appendChild(meta);
    }
  }, []);

  const stats = [
    { icon: Code, label: 'Projetos Finalizados', value: '+3', description: 'Soluções desenvolvidas' },
    { icon: Users, label: 'Clientes Satisfeitos', value: '+3', description: 'Empresas atendidas' },
    { icon: Award, label: 'Experiência', value: 'Primeiro Ano', description: 'De Experiência' },
    { icon: TrendingUp, label: 'Taxa de Sucesso', value: '100%', description: 'Projetos bem-sucedidos' }
  ];

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

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center h-screen bg-gv-darker">
        <div className="w-8 h-8 border-2 border-indigo-400 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950"></div>
        
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-cyan-600/10 to-blue-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="w-20 h-20 mx-auto bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mb-8 shadow-2xl"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            >
              <Users className="w-10 h-10 text-white" />
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent">
              Sobre a <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">GV Software</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Somos uma empresa especializada em desenvolvimento de software, criando soluções digitais inovadoras para transformar negócios.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
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
                  animate={{ opacity: 1, y: 0 }}
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

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <motion.div 
              className="bg-gradient-to-br from-slate-900/80 to-slate-800/50 backdrop-blur-sm p-8 rounded-3xl border border-slate-700/50 shadow-2xl"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
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
              animate={{ opacity: 1, x: 0 }}
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

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
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
                  animate={{ opacity: 1, y: 0 }}
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
      
      <SocialIcons />
      <Footer />
    </div>
  );
};

export default About;
