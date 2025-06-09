
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SocialIcons from '../components/SocialIcons';
import { motion } from 'framer-motion';
import { Code, Smartphone, Globe, ShoppingCart, Database, Zap } from 'lucide-react';

console.log('🚀 SERVICES: Loading services page - ensuring React is available');
console.log('🚀 SERVICES: React object:', React);
console.log('🚀 SERVICES: useEffect function:', useEffect);

const Services: React.FC = () => {
  console.log('🚀 SERVICES: Component rendering started');

  // Defensive check for useEffect
  if (!useEffect) {
    console.error('🔥 SERVICES: useEffect is not available!');
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-400 mb-4">Error Loading Services</h1>
          <p className="text-gray-300">React hooks are not available. Please refresh the page.</p>
        </div>
      </div>
    );
  }

  try {
    useEffect(() => {
      console.log('🚀 SERVICES: Setting document title');
      document.title = 'Serviços | GV Software - Soluções Digitais';
    }, []);
  } catch (error) {
    console.error('🔥 SERVICES: Error in useEffect:', error);
  }

  const services = [
    {
      icon: Globe,
      title: 'Desenvolvimento Web',
      description: 'Sites e aplicações web modernas, responsivas e otimizadas para performance.',
      features: ['React & Next.js', 'Design Responsivo', 'SEO Otimizado', 'Performance Avançada']
    },
    {
      icon: Smartphone,
      title: 'Aplicativos Mobile',
      description: 'Apps nativos e híbridos para iOS e Android com excelente experiência do usuário.',
      features: ['React Native', 'Flutter', 'UI/UX Moderno', 'App Store Publishing']
    },
    {
      icon: Code,
      title: 'Sistemas Personalizados',
      description: 'Soluções sob medida para automatizar processos e otimizar seu negócio.',
      features: ['APIs Robustas', 'Integração de Sistemas', 'Automação', 'Escalabilidade']
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce',
      description: 'Lojas virtuais completas com pagamentos integrados e gestão avançada.',
      features: ['Pagamentos Online', 'Gestão de Estoque', 'Dashboard Admin', 'Mobile First']
    },
    {
      icon: Database,
      title: 'Banco de Dados',
      description: 'Modelagem e otimização de bancos de dados para máxima performance.',
      features: ['PostgreSQL', 'MongoDB', 'Redis', 'Backup Automático']
    },
    {
      icon: Zap,
      title: 'Consultoria Tech',
      description: 'Consultoria especializada para escolher as melhores tecnologias para seu projeto.',
      features: ['Arquitetura de Software', 'Code Review', 'Performance Audit', 'Mentoria']
    }
  ];

  console.log('🚀 SERVICES: Rendering component JSX');

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent">
              Nossos <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">Serviços</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Oferecemos soluções completas em tecnologia para transformar suas ideias em realidade digital.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div 
                  key={index}
                  className="bg-gradient-to-br from-slate-900/80 to-slate-800/50 backdrop-blur-sm p-8 rounded-3xl border border-slate-700/50 shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300"
                  whileHover={{ y: -5, scale: 1.02 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 leading-relaxed mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
                        <div className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <SocialIcons />
      <Footer />
    </div>
  );
};

console.log('✅ SERVICES: Services component defined successfully');
export default Services;
