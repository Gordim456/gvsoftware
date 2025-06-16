
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Award, Lightbulb, Code, Zap, Shield, Heart } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SocialIcons from '../components/SocialIcons';
import ChatBot from '../components/chat/ChatBot';

const About = () => {
  useEffect(() => {
    document.title = 'Sobre | GV Software - Nossa História e Valores';
  }, []);

  const stats = [
    { number: "100+", label: "Projetos Entregues", icon: <Award /> },
    { number: "50+", label: "Clientes Satisfeitos", icon: <Users /> },
    { number: "5+", label: "Anos de Experiência", icon: <Target /> },
    { number: "98%", label: "Taxa de Sucesso", icon: <Heart /> }
  ];

  const values = [
    {
      icon: <Lightbulb />,
      title: "Inovação",
      description: "Sempre buscamos as tecnologias mais avançadas para criar soluções únicas e eficientes.",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: <Code />,
      title: "Qualidade",
      description: "Código limpo, documentado e testado é nossa marca registrada em todos os projetos.",
      gradient: "from-blue-500 to-indigo-500"
    },
    {
      icon: <Zap />,
      title: "Agilidade",
      description: "Metodologias ágeis para entregas rápidas sem comprometer a qualidade do resultado.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: <Shield />,
      title: "Confiança",
      description: "Transparência total em nossos processos e comprometimento com prazos e resultados.",
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  const team = [
    {
      name: "Gabriel Vieira",
      role: "CEO & Desenvolvedor Full Stack",
      description: "Especialista em React, Node.js e arquiteturas escaláveis. Apaixonado por criar soluções que transformam negócios.",
      gradient: "from-indigo-500 to-purple-600"
    },
    {
      name: "Equipe Técnica",
      role: "Desenvolvedores Especialistas",
      description: "Time multidisciplinar com expertise em diversas tecnologias e frameworks modernos.",
      gradient: "from-blue-500 to-cyan-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 via-purple-600/20 to-pink-600/20"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
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
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Somos uma empresa especializada em desenvolvimento de software personalizado, 
              transformando ideias em soluções digitais inovadoras que impulsionam o crescimento dos nossos clientes.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-sm rounded-3xl border border-slate-700/50"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + index * 0.1, type: "spring", stiffness: 200 }}
                whileHover={{ y: -5, scale: 1.05 }}
              >
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center text-white">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Nossa <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">Missão</span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Democratizar o acesso à tecnologia de ponta, oferecendo soluções de software 
                personalizadas que atendem às necessidades específicas de cada cliente, 
                desde startups até grandes corporações.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Acreditamos que cada negócio é único e merece uma solução digital sob medida, 
                desenvolvida com as melhores práticas e tecnologias mais avançadas do mercado.
              </p>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative w-full h-96 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 rounded-3xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 to-slate-800/60 flex items-center justify-center">
                  <div className="text-center">
                    <motion.div
                      className="w-24 h-24 mx-auto bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mb-6"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                      <Target className="w-12 h-12 text-white" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white mb-4">Foco no Cliente</h3>
                    <p className="text-gray-300">Seu sucesso é nosso objetivo</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 to-purple-600/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Nossos <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">Valores</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Os princípios que guiam nosso trabalho e relacionamento com nossos clientes
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="text-center p-8 bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-sm rounded-3xl border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-br ${value.gradient} rounded-2xl flex items-center justify-center text-white shadow-lg`}>
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Nossa <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">Equipe</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Profissionais apaixonados por tecnologia e comprometidos com a excelência
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="text-center p-8 bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-sm rounded-3xl border border-slate-700/50"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className={`w-24 h-24 mx-auto mb-6 bg-gradient-to-br ${member.gradient} rounded-full flex items-center justify-center text-white shadow-lg`}>
                  <span className="text-2xl font-bold">{member.name.charAt(0)}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-indigo-400 font-medium mb-4">{member.role}</p>
                <p className="text-gray-300 leading-relaxed">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <SocialIcons />
      <ChatBot />
    </div>
  );
};

export default About;
