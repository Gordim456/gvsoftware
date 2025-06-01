
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import SocialIcons from '@/components/SocialIcons';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Sparkles, Award, BarChart, Users, Heart, Clock, CheckCircle, Star, Zap, Code, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    document.title = 'Sobre Nós | GV Software - Inovação e Excelência';
    
    // Immediate loading for better UX
    setIsLoaded(true);
    
    // SEO optimization
    const meta = document.createElement('meta');
    meta.name = 'description';
    meta.content = 'Conheça a GV Software - Empresa líder em desenvolvimento de software com mais de 10 anos de experiência e 250+ projetos entregues.';
    if (!document.querySelector('meta[name="description"]')) {
      document.head.appendChild(meta);
    }
  }, []);

  // Optimized statistics with modern styling
  const stats = useMemo(() => [
    { value: '250+', label: 'Projetos Entregues', icon: <CheckCircle className="w-5 h-5" />, color: 'from-green-400 to-emerald-600' },
    { value: '98%', label: 'Satisfação', icon: <Heart className="w-5 h-5" />, color: 'from-rose-400 to-pink-600' },
    { value: '10+', label: 'Anos de Experiência', icon: <Clock className="w-5 h-5" />, color: 'from-blue-400 to-cyan-600' },
    { value: '15+', label: 'Países Atendidos', icon: <Star className="w-5 h-5" />, color: 'from-yellow-400 to-orange-600' }
  ], []);

  // Modern feature grid with enhanced design
  const features = useMemo(() => [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Excelência",
      description: "Comprometidos com a qualidade em cada linha de código.",
      color: "from-indigo-500 to-purple-600"
    },
    {
      icon: <BarChart className="w-6 h-6" />,
      title: "Resultados",
      description: "Focados em gerar valor mensurável para seu negócio.",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Colaboração",
      description: "Trabalhamos juntos para alcançar objetivos comuns.",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Inovação",
      description: "Constantemente explorando novas tecnologias.",
      color: "from-pink-500 to-rose-600"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Performance",
      description: "Soluções rápidas e otimizadas para máxima eficiência.",
      color: "from-yellow-500 to-orange-600"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Tecnologia",
      description: "Utilizamos as tecnologias mais modernas do mercado.",
      color: "from-green-500 to-emerald-600"
    }
  ], []);

  // Optimized hero section
  const HeroSection = useCallback(() => (
    <section className="relative h-[70vh] overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-indigo-900/70 to-purple-900/80 z-10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80)',
          transform: 'translateZ(0)'
        }}
      />
      
      <motion.div 
        className="relative z-20 text-center max-w-4xl px-4"
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
          <Lightbulb className="w-10 h-10 text-white" />
        </motion.div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent">
          Sobre a <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">GV Software</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
          Transformando ideias em realidade digital há mais de uma década
        </p>
      </motion.div>
    </section>
  ), []);

  return (
    <div 
      className={`min-h-screen bg-slate-950 transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
      style={{ transform: 'translateZ(0)' }}
    >
      <SocialIcons />
      <Navbar />

      <HeroSection />

      {/* Modern About Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Nossa <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">Missão</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Somos mais que uma empresa de software - somos parceiros na transformação digital dos nossos clientes.
            </p>
          </motion.div>
          
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="group p-8 bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl hover:border-indigo-500/50 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern Stats Section */}
      <section className="py-16 bg-gradient-to-r from-slate-900/50 to-slate-800/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-gradient-to-br from-slate-800/50 to-slate-700/30 rounded-2xl border border-slate-600/30 hover:border-indigo-500/50 transition-all duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className={`w-12 h-12 mx-auto mb-4 bg-gradient-to-br ${stat.color} rounded-full flex items-center justify-center text-white`}>
                  {stat.icon}
                </div>
                <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </h3>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
