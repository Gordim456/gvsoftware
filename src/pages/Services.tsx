import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Rocket, Code, Brush, CheckCircle, LayoutDashboard, Users, ShieldCheck, TrendingUp } from 'lucide-react';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SocialIcons from '@/components/SocialIcons';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    document.title = 'Serviços | GV Software';
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeInOut'
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
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
      <Navbar />
      <SocialIcons />

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
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            >
              <Rocket className="w-8 h-8 text-indigo-400" />
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Nossos <span className="gradient-text">Serviços</span>
            </h2>
            <p className="text-gv-gray max-w-2xl mx-auto text-lg">
              Oferecemos soluções completas para impulsionar o seu negócio no mundo digital.
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {/* Web Development */}
            <motion.div
              className="bg-gv-dark p-6 rounded-xl border border-gray-800 hover:border-indigo-500/50 transition-all duration-300 card-hover"
              variants={fadeInUp}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-indigo-500 bg-opacity-20 rounded-full flex items-center justify-center mr-4">
                  <Code className="w-6 h-6 text-indigo-400" />
                </div>
                <h3 className="text-xl font-semibold">Desenvolvimento Web</h3>
              </div>
              <p className="text-gv-gray">
                Criação de websites personalizados, desde landing pages até plataformas complexas,
                com foco em performance e experiência do usuário.
              </p>
              <ul className="list-disc pl-5 mt-4 text-gv-gray">
                <li>Sites responsivos e otimizados</li>
                <li>E-commerce e lojas virtuais</li>
                <li>Sistemas web sob medida</li>
              </ul>
            </motion.div>

            {/* UI/UX Design */}
            <motion.div
              className="bg-gv-dark p-6 rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300 card-hover"
              variants={fadeInUp}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-500 bg-opacity-20 rounded-full flex items-center justify-center mr-4">
                  <Brush className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold">UI/UX Design</h3>
              </div>
              <p className="text-gv-gray">
                Design de interfaces intuitivas e agradáveis, focadas na melhor experiência do usuário
                e alinhadas com a identidade visual da sua marca.
              </p>
              <ul className="list-disc pl-5 mt-4 text-gv-gray">
                <li>Design de interface (UI)</li>
                <li>Experiência do usuário (UX)</li>
                <li>Protótipos interativos</li>
              </ul>
            </motion.div>

            {/* Mobile Development */}
            <motion.div
              className="bg-gv-dark p-6 rounded-xl border border-gray-800 hover:border-pink-500/50 transition-all duration-300 card-hover"
              variants={fadeInUp}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-pink-500 bg-opacity-20 rounded-full flex items-center justify-center mr-4">
                  <LayoutDashboard className="w-6 h-6 text-pink-400" />
                </div>
                <h3 className="text-xl font-semibold">Aplicações Mobile</h3>
              </div>
              <p className="text-gv-gray">
                Desenvolvimento de aplicativos móveis nativos (iOS e Android) e híbridos,
                com foco em performance, segurança e escalabilidade.
              </p>
              <ul className="list-disc pl-5 mt-4 text-gv-gray">
                <li>Apps nativos (Swift, Kotlin)</li>
                <li>Apps híbridos (React Native)</li>
                <li>Testes e publicação nas lojas</li>
              </ul>
            </motion.div>

            {/* SEO Optimization */}
            <motion.div
              className="bg-gv-dark p-6 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-all duration-300 card-hover"
              variants={fadeInUp}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-500 bg-opacity-20 rounded-full flex items-center justify-center mr-4">
                  <TrendingUp className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold">Otimização SEO</h3>
              </div>
              <p className="text-gv-gray">
                Otimização de sites para melhorar o posicionamento nos resultados de busca do Google,
                aumentando o tráfego orgânico e a visibilidade da sua marca.
              </p>
              <ul className="list-disc pl-5 mt-4 text-gv-gray">
                <li>Análise de palavras-chave</li>
                <li>Otimização on-page e off-page</li>
                <li>Relatórios e acompanhamento</li>
              </ul>
            </motion.div>

            {/* IT Consulting */}
            <motion.div
              className="bg-gv-dark p-6 rounded-xl border border-gray-800 hover:border-green-500/50 transition-all duration-300 card-hover"
              variants={fadeInUp}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-500 bg-opacity-20 rounded-full flex items-center justify-center mr-4">
                  <ShieldCheck className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold">Consultoria em TI</h3>
              </div>
              <p className="text-gv-gray">
                Consultoria especializada para identificar as melhores soluções de tecnologia
                para o seu negócio, desde a escolha de softwares até a implementação de infraestrutura.
              </p>
              <ul className="list-disc pl-5 mt-4 text-gv-gray">
                <li>Planejamento estratégico de TI</li>
                <li>Análise de sistemas e processos</li>
                <li>Implementação de soluções</li>
              </ul>
            </motion.div>

            {/* Support and Maintenance */}
            <motion.div
              className="bg-gv-dark p-6 rounded-xl border border-gray-800 hover:border-yellow-500/50 transition-all duration-300 card-hover"
              variants={fadeInUp}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-yellow-500 bg-opacity-20 rounded-full flex items-center justify-center mr-4">
                  <Users className="w-6 h-6 text-yellow-400" />
                </div>
                <h3 className="text-xl font-semibold">Suporte e Manutenção</h3>
              </div>
              <p className="text-gv-gray">
                Serviços de suporte técnico e manutenção para garantir o bom funcionamento
                dos seus sistemas e aplicações, com atendimento rápido e eficiente.
              </p>
              <ul className="list-disc pl-5 mt-4 text-gv-gray">
                <li>Suporte técnico online</li>
                <li>Manutenção preventiva e corretiva</li>
                <li>Atualizações e upgrades</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gv-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Por que <span className="gradient-text">Escolher</span> a GV Software?
            </h2>
            <p className="text-gv-gray max-w-2xl mx-auto text-lg">
              Nossos diferenciais que garantem o sucesso do seu projeto.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Expertise */}
            <motion.div
              className="bg-gv-dark p-6 rounded-xl border border-gray-800 hover:border-indigo-500/50 transition-all duration-300 card-hover"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-indigo-500 bg-opacity-20 rounded-full flex items-center justify-center mr-4">
                  <CheckCircle className="w-6 h-6 text-indigo-400" />
                </div>
                <h3 className="text-xl font-semibold">Expertise</h3>
              </div>
              <p className="text-gv-gray">
                Equipe altamente qualificada e experiente em diversas tecnologias e metodologias.
              </p>
            </motion.div>

            {/* Innovation */}
            <motion.div
              className="bg-gv-dark p-6 rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300 card-hover"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-500 bg-opacity-20 rounded-full flex items-center justify-center mr-4">
                  <Code className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold">Inovação</h3>
              </div>
              <p className="text-gv-gray">
                Buscamos constantemente as últimas tendências e tecnologias para oferecer soluções inovadoras.
              </p>
            </motion.div>

            {/* Customer Focus */}
            <motion.div
              className="bg-gv-dark p-6 rounded-xl border border-gray-800 hover:border-pink-500/50 transition-all duration-300 card-hover"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-pink-500 bg-opacity-20 rounded-full flex items-center justify-center mr-4">
                  <Users className="w-6 h-6 text-pink-400" />
                </div>
                <h3 className="text-xl font-semibold">Foco no Cliente</h3>
              </div>
              <p className="text-gv-gray">
                Priorizamos a satisfação do cliente, oferecendo atendimento personalizado e soluções sob medida.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
};

export default Services;
