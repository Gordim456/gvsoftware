
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SocialIcons from '../components/SocialIcons';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Smartphone, Globe, Database } from 'lucide-react';

const Portfolio: React.FC = () => {
  useEffect(() => {
    document.title = 'Portfólio | GV Software - Nossos Projetos';
  }, []);

  const projects = [
    {
      id: 1,
      title: 'Sistema de Gestão Bebidas ON',
      description: 'Sistema completo para controle de estoque e vendas de bebidas com dashboard administrativo.',
      image: '/lovable-uploads/61ef491d-1126-436c-be67-fd525f729623.png',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      category: 'Web App',
      icon: Globe,
      status: 'Concluído'
    },
    {
      id: 2,
      title: 'App Mobile de Gestão',
      description: 'Aplicativo mobile para gestão de tarefas e projetos com sincronização em tempo real.',
      image: '/lovable-uploads/9805566a-c46b-4db7-8637-f74f6a89da91.png',
      tech: ['React Native', 'Firebase', 'TypeScript'],
      category: 'Mobile',
      icon: Smartphone,
      status: 'Concluído'
    },
    {
      id: 3,
      title: 'Sistema de CRM Personalizado',
      description: 'Sistema personalizado de gerenciamento de relacionamento com clientes e vendas.',
      image: '/lovable-uploads/9805566a-c46b-4db7-8637-f74f6a89da91.png',
      tech: ['Vue.js', 'Laravel', 'MySQL'],
      category: 'Sistema',
      icon: Database,
      status: 'Em Desenvolvimento'
    },
    {
      id: 4,
      title: 'E-commerce Moderno',
      description: 'Plataforma completa de e-commerce com pagamentos integrados e painel administrativo.',
      image: '/project-1.jpg',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      category: 'Web App',
      icon: Globe,
      status: 'Concluído'
    },
    {
      id: 5,
      title: 'App de Delivery',
      description: 'Aplicativo de delivery com rastreamento em tempo real e sistema de pagamentos.',
      image: '/project-6.jpg',
      tech: ['React Native', 'Express', 'MongoDB'],
      category: 'Mobile',
      icon: Smartphone,
      status: 'Concluído'
    },
    {
      id: 6,
      title: 'Dashboard Analytics',
      description: 'Painel interativo para visualização de dados e métricas de negócios em tempo real.',
      image: '/project-4.jpg',
      tech: ['React', 'D3.js', 'Python', 'FastAPI'],
      category: 'Web App',
      icon: Database,
      status: 'Concluído'
    }
  ];

  return (
    <div className="min-h-screen bg-gv-darker text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gv-darker via-indigo-950/30 to-purple-950/30"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Nosso <span className="gradient-text">Portfólio</span>
            </h1>
            <p className="text-xl md:text-2xl text-gv-gray max-w-3xl mx-auto leading-relaxed">
              Conheça alguns dos projetos que desenvolvemos com excelência e inovação para nossos clientes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-gv-darker">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <motion.div 
                  key={project.id}
                  className="bg-gv-dark/80 backdrop-blur-sm rounded-2xl border border-gray-800/50 shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300 overflow-hidden group hover:border-indigo-500/30"
                  whileHover={{ y: -5, scale: 1.02 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        project.status === 'Concluído' 
                          ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                          : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <div className="bg-white/10 backdrop-blur-sm p-2 rounded-lg">
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs bg-indigo-500/20 text-indigo-300 px-3 py-1 rounded-full font-medium border border-indigo-500/30">
                        {project.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-200 transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-gv-gray text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, idx) => (
                        <span key={idx} className="px-2 py-1 bg-gv-darker/70 text-gray-300 rounded-md text-xs border border-gray-700/50 hover:border-indigo-500/30 transition-colors">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-3">
                      <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-sm font-medium transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/20">
                        <ExternalLink className="w-4 h-4" />
                        Ver Projeto
                      </button>
                      <button className="flex items-center gap-2 px-4 py-2 bg-gv-darker hover:bg-gray-700 rounded-lg text-sm font-medium transition-colors border border-gray-700/50 hover:border-gray-600">
                        <Github className="w-4 h-4" />
                        Código
                      </button>
                    </div>
                  </div>
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

export default Portfolio;
