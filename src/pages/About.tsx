
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SocialIcons from '../components/SocialIcons';

console.log("🔥 ABOUT: Iniciando com React explícito");

const About: React.FC = () => {
  console.log("🔥 ABOUT: React disponível:", React);
  console.log("🔥 ABOUT: useState disponível:", typeof React.useState);
  
  const [isLoaded, setIsLoaded] = React.useState(false);

  React.useEffect(() => {
    document.title = 'Sobre | GV Software - Nossa História e Missão';
    setIsLoaded(true);
    
    const existingMeta = document.querySelector('meta[name="description"]');
    if (!existingMeta) {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Conheça a GV Software - Empresa especializada em desenvolvimento de software com experiência criando soluções digitais inovadoras.';
      document.head.appendChild(meta);
    }
  }, []);

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center h-screen bg-slate-950">
        <div className="w-8 h-8 border-2 border-indigo-400 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950"></div>
        
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mb-8 shadow-2xl">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent">
              Sobre a <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">GV Software</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Somos uma empresa especializada em desenvolvimento de software, criando soluções digitais inovadoras para transformar negócios.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { icon: '💻', label: 'Projetos Finalizados', value: '+3', description: 'Soluções desenvolvidas' },
              { icon: '👥', label: 'Clientes Satisfeitos', value: '+3', description: 'Empresas atendidas' },
              { icon: '🏆', label: 'Experiência', value: 'Primeiro Ano', description: 'De Experiência' },
              { icon: '📈', label: 'Taxa de Sucesso', value: '100%', description: 'Projetos bem-sucedidos' }
            ].map((stat, index) => (
              <div 
                key={index}
                className="text-center p-6 bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-4xl mb-4">{stat.icon}</div>
                <h3 className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </h3>
                <p className="text-white font-semibold mb-1">{stat.label}</p>
                <p className="text-gray-400 text-sm">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/50 backdrop-blur-sm p-8 rounded-3xl border border-slate-700/50 shadow-2xl">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Nossa Missão
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Transformar ideias em soluções digitais inovadoras, oferecendo tecnologia de ponta que impulsiona o crescimento e sucesso dos nossos clientes através de software de alta qualidade.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/50 backdrop-blur-sm p-8 rounded-3xl border border-slate-700/50 shadow-2xl">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Nossa Visão
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Ser referência no desenvolvimento de software, reconhecida pela excelência técnica, inovação constante e capacidade de criar soluções que realmente fazem a diferença no mercado digital.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🌐',
                title: 'Soluções Globais',
                description: 'Desenvolvemos aplicações que atendem padrões internacionais de qualidade e performance.',
                color: 'from-blue-500 to-cyan-500'
              },
              {
                icon: '🛡️',
                title: 'Segurança Avançada',
                description: 'Implementamos as melhores práticas de segurança para proteger seus dados e sistemas.',
                color: 'from-green-500 to-emerald-500'
              },
              {
                icon: '⚡',
                title: 'Performance Otimizada',
                description: 'Criamos soluções rápidas e eficientes que garantem a melhor experiência do usuário.',
                color: 'from-purple-500 to-pink-500'
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-slate-900/80 to-slate-800/50 backdrop-blur-sm p-8 rounded-3xl border border-slate-700/50 shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg text-2xl`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SocialIcons />
      <Footer />
    </div>
  );
};

export default About;
