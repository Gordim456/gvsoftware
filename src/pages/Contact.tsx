
import React, { useState, useEffect } from 'react';
import { toast } from 'sonner';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { BackgroundGradient } from '../components/BackgroundGradient';
import ContactForm from '../components/contact/ContactForm';
import ContactSuccess from '../components/contact/ContactSuccess';
import ContactInfo from '../components/contact/ContactInfo';
import SocialIcons from '../components/SocialIcons';
import { motion } from 'framer-motion';
import { MessageSquare, Zap, Shield, Clock, Star, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    document.title = 'Contato | GV Software - Fale Conosco';
    setIsLoaded(true);
    
    // SEO otimizado
    const meta = document.createElement('meta');
    meta.name = 'description';
    meta.content = 'Entre em contato com a GV Software - Orçamentos gratuitos, resposta em 24h e suporte completo para seu projeto digital.';
    if (!document.querySelector('meta[name="description"]')) {
      document.head.appendChild(meta);
    }
  }, []);

  const handleSuccess = () => {
    setFormSubmitted(true);
    toast.success("Mensagem enviada com sucesso!", {
      description: "Entraremos em contato em breve.",
    });
  };

  // Dados de benefícios aprimorados
  const benefits = [
    { 
      icon: <Clock />, 
      title: "Resposta em 24h", 
      description: "Garantimos resposta rápida",
      color: "from-blue-500 to-cyan-500"
    },
    { 
      icon: <Shield />, 
      title: "Orçamento Gratuito", 
      description: "Sem compromisso inicial",
      color: "from-green-500 to-emerald-500"
    },
    { 
      icon: <Zap />, 
      title: "Suporte Completo", 
      description: "Acompanhamento total do projeto",
      color: "from-purple-500 to-pink-500"
    }
  ];

  // Indicadores de confiança
  const trustIndicators = [
    { icon: <Star />, text: "98% de satisfação dos clientes" },
    { icon: <CheckCircle />, text: "Mais de 100 projetos entregues" },
    { icon: <Shield />, text: "Dados protegidos e seguros" }
  ];

  // Seção Hero moderna
  const HeroSection = () => (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950"></div>
      
      {/* Elementos de background animados aprimorados */}
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
            <MessageSquare className="w-10 h-10 text-white" />
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent">
            Entre em <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">Contato</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Transformamos suas ideias em soluções digitais inovadoras. Vamos conversar sobre seu próximo projeto.
          </p>

          {/* Indicadores de confiança */}
          <motion.div 
            className="flex flex-wrap justify-center gap-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            {trustIndicators.map((indicator, index) => (
              <div key={index} className="flex items-center gap-2 text-indigo-300 bg-indigo-500/10 px-4 py-2 rounded-full">
                {indicator.icon}
                <span className="text-sm font-medium">{indicator.text}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Cards de Benefícios Aprimorados */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index}
              className="text-center p-8 bg-gradient-to-br from-slate-900/80 to-slate-800/50 backdrop-blur-sm rounded-3xl border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-300 shadow-2xl"
              whileHover={{ y: -5, scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1 }}
            >
              <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center text-white shadow-lg`}>
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
              <p className="text-gray-300">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Grid de Formulário de Contato e Informações */}
        <div className="grid md:grid-cols-12 gap-8 lg:gap-12">
          {/* Informações de Contato */}
          <motion.div 
            className="md:col-span-5 space-y-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <ContactInfo />
          </motion.div>
          
          {/* Formulário de Contato */}
          <motion.div 
            className="md:col-span-7"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.0, duration: 0.6 }}
          >
            <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/50 backdrop-blur-sm p-8 rounded-3xl border border-slate-700/50 shadow-2xl">
              {formSubmitted ? (
                <ContactSuccess onReset={() => setFormSubmitted(false)} />
              ) : (
                <>
                  <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    Envie sua <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">mensagem</span>
                  </h2>
                  <ContactForm onSuccess={handleSuccess} />
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );

  return (
    <div className={`min-h-screen flex flex-col transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Navbar />
      <BackgroundGradient>
        <HeroSection />
      </BackgroundGradient>
      <SocialIcons />
      <Footer />
    </div>
  );
};

export default Contact;
