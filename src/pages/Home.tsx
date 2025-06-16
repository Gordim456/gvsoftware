
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Footer from '../components/Footer';
import SocialIcons from '../components/SocialIcons';
import ChatBot from '../components/chat/ChatBot';
import { HeroSlider } from '../components/HeroSlider';
import { motion } from 'framer-motion';

const Home = () => {
  React.useEffect(() => {
    document.title = 'Início | GV Software - Soluções Digitais Modernas';
  }, []);

  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <Hero />
      
      {/* Seção do Slider de Projetos */}
      <motion.section 
        className="py-20 bg-gradient-to-br from-slate-950 via-indigo-950/20 to-purple-950/20 relative overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-600 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent">
              Nossos Projetos
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Confira alguns dos projetos inovadores que desenvolvemos para nossos clientes.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <HeroSlider />
          </motion.div>
        </div>
      </motion.section>

      <Services />
      <Footer />
      <SocialIcons />
      <ChatBot />
    </div>
  );
};

export default Home;
