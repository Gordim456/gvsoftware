
import React from 'react';
import SocialIcons from '@/components/SocialIcons';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Rocket, Sparkles, Award, BarChart, Users, Heart, Clock, CheckCircle, Star } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    document.title = 'Sobre | GV Software';
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeInOut'
      }
    }
  };

  // Timeline items
  const timeline = [
    {
      year: '2015',
      title: 'Fundação da GV Software',
      description: 'Nascemos com a missão de transformar ideias em soluções digitais excepcionais.'
    },
    {
      year: '2017',
      title: 'Expansão Nacional',
      description: 'Expandimos nossa atuação para todo o Brasil, com clientes em mais de 10 estados.'
    },
    {
      year: '2019',
      title: 'Prêmio Inovação',
      description: 'Reconhecidos como uma das empresas mais inovadoras do setor de tecnologia.'
    },
    {
      year: '2021',
      title: 'Internacionalização',
      description: 'Iniciamos projetos internacionais, expandindo nossa presença global.'
    },
    {
      year: '2023',
      title: 'Prêmio Excelência',
      description: 'Conquistamos o prêmio de excelência em desenvolvimento de software.'
    }
  ];

  // Statistics
  const stats = [
    { value: '250+', label: 'Projetos Entregues', icon: <CheckCircle /> },
    { value: '98%', label: 'Satisfação', icon: <Heart /> },
    { value: '10+', label: 'Anos de Experiência', icon: <Clock /> },
    { value: '15+', label: 'Países Atendidos', icon: <Star /> }
  ];

  return (
    <motion.div
      className="min-h-screen bg-gv-darker"
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      <SocialIcons />
      <Navbar />

      {/* Hero Banner */}
      <section className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-indigo-900/70 z-10"></div>
        <motion.img
          src="https://images.unsplash.com/photo-1483058712412-4245e9b90334"
          alt="About Hero"
          className="w-full h-full object-cover"
          initial={{ scale: 1 }}
          animate={{ scale: 1.1 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
        />
        
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <motion.div 
            className="text-center max-w-4xl px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div
              className="w-16 h-16 mx-auto bg-indigo-500 bg-opacity-20 rounded-full flex items-center justify-center mb-6"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              <Rocket className="w-8 h-8 text-indigo-400" />
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">
              Nossa <span className="gradient-text">História</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Transformando ideias em soluções digitais inovadoras desde 2015, com paixão pela excelência e compromisso com resultados.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Decorative Blobs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob"></div>
        <div className="absolute bottom-40 right-10 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob animation-delay-2000"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
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
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
                  alt="GV Software Team" 
                  className="w-full h-auto max-h-96 object-cover rounded-2xl" 
                />
                <div className="absolute inset-0 bg-gradient-to-tl from-indigo-900/30 to-transparent"></div>
              </motion.div>
            </motion.div>
            
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div
                className="inline-flex items-center space-x-2 px-3 py-1 bg-indigo-500/10 rounded-full text-indigo-400"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-medium">Nossa Missão</span>
              </motion.div>
              
              <h2 className="text-4xl font-bold leading-tight">
                Impulsionando o <span className="gradient-text">Sucesso Digital</span> das Empresas
              </h2>
              
              <p className="text-gv-gray text-lg">
                Somos mais que uma empresa de software - somos parceiros na jornada digital dos nossos clientes. 
                Nosso compromisso é entregar soluções que não apenas atendam, mas excedam expectativas, gerando 
                resultados mensuráveis e impactantes.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-indigo-500/20 p-3 rounded-xl">
                    <Award className="w-6 h-6 text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Excelência</h3>
                    <p className="text-gv-gray">Comprometidos com a qualidade em cada linha de código.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-500/20 p-3 rounded-xl">
                    <BarChart className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Resultados</h3>
                    <p className="text-gv-gray">Focados em gerar valor mensurável para seu negócio.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-500/20 p-3 rounded-xl">
                    <Users className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Colaboração</h3>
                    <p className="text-gv-gray">Trabalhamos juntos para alcançar objetivos comuns.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-pink-500/20 p-3 rounded-xl">
                    <Sparkles className="w-6 h-6 text-pink-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Inovação</h3>
                    <p className="text-gv-gray">Constantemente explorando novas tecnologias e abordagens.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gv-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ 
              duration: 0.5, 
              staggerChildren: 0.1 
            }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-gv-darker rounded-2xl border border-gray-800 hover:border-indigo-500/50 transition-all duration-300"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-12 h-12 mx-auto mb-4 bg-indigo-500/20 rounded-full flex items-center justify-center text-indigo-400">
                  {stat.icon}
                </div>
                <h3 className="text-4xl font-bold gradient-text mb-2">{stat.value}</h3>
                <p className="text-gv-gray">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="w-16 h-16 mx-auto bg-purple-500/20 rounded-full flex items-center justify-center mb-6"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              <Clock className="w-8 h-8 text-purple-400" />
            </motion.div>
            <h2 className="text-4xl font-bold mb-4">Nossa <span className="gradient-text">Jornada</span></h2>
            <p className="text-gv-gray max-w-2xl mx-auto text-lg">
              A trajetória que nos trouxe até aqui e continua nos impulsionando para o futuro.
            </p>
          </motion.div>

          <div className="relative flex flex-col items-center">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-indigo-500 to-purple-600 rounded-full"></div>
            
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                className={`relative flex items-center justify-between w-full mb-16 last:mb-0`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'order-last text-left pl-8'}`}>
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gv-gray">{item.description}</p>
                </div>
                
                <div className="z-10">
                  <motion.div 
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold"
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {item.year.substring(2)}
                  </motion.div>
                </div>
                
                <div className={`w-5/12 ${index % 2 === 0 ? 'order-last text-left pl-8' : 'text-right pr-8'}`}>
                  <span className="text-sm font-bold text-indigo-400">{item.year}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
};

export default About;
