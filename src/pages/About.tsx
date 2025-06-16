
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Users, Award, Zap, Target, Heart } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SocialIcons from '../components/SocialIcons';
import ChatBot from '../components/chat/ChatBot';

const About = () => {
  React.useEffect(() => {
    document.title = 'Sobre | GV Software - Conheça Nossa História';
  }, []);

  const stats = [
    { number: "50+", label: "Projetos Entregues", icon: <Award /> },
    { number: "3+", label: "Anos de Experiência", icon: <Code /> },
    { number: "30+", label: "Clientes Satisfeitos", icon: <Users /> },
    { number: "99%", label: "Taxa de Sucesso", icon: <Target /> }
  ];

  const values = [
    {
      icon: <Code />,
      title: "Excelência Técnica",
      description: "Utilizamos as mais modernas tecnologias e melhores práticas de desenvolvimento."
    },
    {
      icon: <Users />,
      title: "Foco no Cliente",
      description: "Cada projeto é único e desenvolvido pensando nas necessidades específicas do cliente."
    },
    {
      icon: <Zap />,
      title: "Agilidade",
      description: "Entregas rápidas sem comprometer a qualidade, utilizando metodologias ágeis."
    },
    {
      icon: <Heart />,
      title: "Paixão pelo que fazemos",
      description: "Amamos transformar ideias em realidade através da tecnologia."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950"></div>
        
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent">
              Sobre a <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">GV Software</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Somos uma empresa especializada em desenvolvimento de software, comprometida em transformar ideias em soluções digitais inovadoras e eficientes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <motion.section 
        className="py-20 bg-gradient-to-br from-slate-950 to-indigo-950/30 relative"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-sm p-8 rounded-xl border border-slate-700/50"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center text-white">
                  {stat.icon}
                </div>
                <h3 className="text-4xl font-bold text-white mb-2">{stat.number}</h3>
                <p className="text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Mission Section */}
      <motion.section 
        className="py-20 bg-slate-950 relative overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl animate-pulse"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent">
                Nossa Missão
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Democratizar o acesso à tecnologia, fornecendo soluções de software personalizadas que impulsionam o crescimento dos negócios de nossos clientes. Acreditamos que a tecnologia deve ser um facilitador, não um obstáculo.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                Com uma abordagem centrada no cliente e foco na qualidade, buscamos sempre superar expectativas e entregar valor real através de nossas soluções tecnológicas.
              </p>
            </motion.div>
            
            <motion.div
              className="grid grid-cols-2 gap-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50"
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center text-white mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{value.title}</h3>
                  <p className="text-gray-400 text-sm">{value.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section 
        className="py-20 bg-gradient-to-br from-slate-950 via-indigo-950/20 to-purple-950/20 relative"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent">
              Nossa Equipe
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Uma equipe de profissionais apaixonados por tecnologia, dedicados a criar soluções que fazem a diferença.
            </p>
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-sm p-12 rounded-xl border border-slate-700/50 max-w-4xl mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ y: -5 }}
          >
            <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-3xl font-bold text-white">GV</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Fundador & Desenvolvedor Principal</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Com mais de 3 anos de experiência em desenvolvimento de software, nossa equipe combina expertise técnica com visão estratégica para entregar soluções que realmente impactam os negócios de nossos clientes.
            </p>
          </motion.div>
        </div>
      </motion.section>

      <Footer />
      <SocialIcons />
      <ChatBot />
    </div>
  );
};

export default About;
