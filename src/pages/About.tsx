
import React from 'react';
import SocialIcons from '@/components/SocialIcons';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Rocket } from 'lucide-react';

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

  return (
    <motion.div
      className="min-h-screen bg-gv-darker"
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      <SocialIcons />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Decorative Blobs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob"></div>
        <div className="absolute bottom-40 right-10 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob animation-delay-2000"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="w-16 h-16 mx-auto bg-indigo-500 bg-opacity-20 rounded-full flex items-center justify-center mb-6"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              <Rocket className="w-8 h-8 text-indigo-400" />
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Sobre a <span className="gradient-text">GV Software</span>
            </h2>
            <p className="text-gv-gray max-w-2xl mx-auto text-lg">
              Nossa missão é impulsionar o sucesso dos nossos clientes através de soluções digitais inovadoras e personalizadas.
            </p>
          </motion.div>

          {/* Core Values Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="bg-gv-dark p-6 rounded-xl border border-gray-800 hover:border-indigo-500/50 transition-all duration-300"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-3">Inovação</h3>
              <p className="text-gv-gray">
                Buscamos constantemente novas tecnologias e abordagens para criar soluções que se destacam no mercado.
              </p>
            </motion.div>

            <motion.div
              className="bg-gv-dark p-6 rounded-xl border border-gray-800 hover:border-indigo-500/50 transition-all duration-300"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-3">Qualidade</h3>
              <p className="text-gv-gray">
                Garantimos a excelência em cada etapa do desenvolvimento, desde a concepção até a entrega final.
              </p>
            </motion.div>

            <motion.div
              className="bg-gv-dark p-6 rounded-xl border border-gray-800 hover:border-indigo-500/50 transition-all duration-300"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-xl font-semibold mb-3">Parceria</h3>
              <p className="text-gv-gray">
                Trabalhamos em colaboração com nossos clientes, construindo relacionamentos de confiança e resultados duradouros.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
};

export default About;
