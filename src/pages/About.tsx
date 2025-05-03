
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import SocialIcons from '@/components/SocialIcons';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Sparkles, Award, BarChart, Users, Heart, Clock, CheckCircle, Star } from 'lucide-react';
import AboutHeader from '../components/about/AboutHeader';
import AboutFeatures from '../components/about/AboutFeatures';
import AboutImage from '../components/about/AboutImage';
import AboutHero from '../components/about/AboutHero';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    document.title = 'Sobre | GV Software';
    // Immediate visibility for better performance
    setIsVisible(true);
  }, []);

  // Memoized statistics data
  const stats = useMemo(() => [
    { value: '250+', label: 'Projetos Entregues', icon: <CheckCircle /> },
    { value: '98%', label: 'Satisfação', icon: <Heart /> },
    { value: '10+', label: 'Anos de Experiência', icon: <Clock /> },
    { value: '15+', label: 'Países Atendidos', icon: <Star /> }
  ], []);

  // Optimized feature grid rendering
  const renderFeatureGrid = useCallback(() => (
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
  ), []);

  return (
    <div 
      className={`min-h-screen bg-gv-darker ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      style={{ transition: 'opacity 300ms ease' }}
    >
      <SocialIcons />
      <Navbar />

      {/* Hero Banner - Using optimized component */}
      <section className="relative h-[500px] overflow-hidden">
        <AboutHero />
      </section>

      {/* About GV Software Section */}
      <section id="about" className="py-20 bg-gv-darker relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AboutHeader />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AboutImage />
            
            <div className="space-y-6">
              <h3 className="text-3xl font-bold">Nossa Missão</h3>
              <p className="text-gv-gray">
                Ajudamos empresas a transformar suas ideias em produtos digitais de alta qualidade, 
                entregando soluções personalizadas que impulsionam o crescimento e a inovação.
              </p>
              
              <AboutFeatures />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section - Optimized with static elements */}
      <section className="py-20 relative overflow-hidden">
        {/* Simplified decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
        <div className="absolute bottom-40 right-10 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-full h-full bg-gradient-to-br from-indigo-500/30 to-purple-600/30 rounded-2xl blur-2xl"></div>
              
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl shadow-indigo-500/20">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
                  alt="GV Software Team" 
                  className="w-full h-auto max-h-96 object-cover rounded-2xl" 
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-tl from-indigo-900/30 to-transparent"></div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 px-3 py-1 bg-indigo-500/10 rounded-full text-indigo-400">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-medium">Nossa Missão</span>
              </div>
              
              <h2 className="text-4xl font-bold leading-tight">
                Impulsionando o <span className="gradient-text">Sucesso Digital</span> das Empresas
              </h2>
              
              <p className="text-gv-gray text-lg">
                Somos mais que uma empresa de software - somos parceiros na jornada digital dos nossos clientes. 
                Nosso compromisso é entregar soluções que não apenas atendam, mas excedam expectativas, gerando 
                resultados mensuráveis e impactantes.
              </p>
              
              {renderFeatureGrid()}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Optimized with static rendering */}
      <section className="py-16 bg-gv-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gv-darker rounded-2xl border border-gray-800 hover:border-indigo-500/50 transition-colors duration-300"
              >
                <div className="w-12 h-12 mx-auto mb-4 bg-indigo-500/20 rounded-full flex items-center justify-center text-indigo-400">
                  {stat.icon}
                </div>
                <h3 className="text-4xl font-bold gradient-text mb-2">{stat.value}</h3>
                <p className="text-gv-gray">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
