
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
      title: 'E-commerce Moderno',
      description: 'Plataforma completa de e-commerce com pagamentos integrados e painel administrativo.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      category: 'Web',
      icon: Globe,
      status: 'Concluído'
    },
    {
      id: 2,
      title: 'App de Gestão',
      description: 'Aplicativo mobile para gestão de tarefas e projetos com sincronização em tempo real.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c',
      tech: ['React Native', 'Firebase', 'TypeScript'],
      category: 'Mobile',
      icon: Smartphone,
      status: 'Concluído'
    },
    {
      id: 3,
      title: 'Sistema de CRM',
      description: 'Sistema personalizado de gerenciamento de relacionamento com clientes.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
      tech: ['Vue.js', 'Laravel', 'MySQL'],
      category: 'Sistema',
      icon: Database,
      status: 'Em Desenvolvimento'
    }
  ];

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
              Nosso <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">Portfólio</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Conheça alguns dos projetos que desenvolvemos com excelência e inovação.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <motion.div 
                  key={project.id}
                  className="bg-gradient-to-br from-slate-900/80 to-slate-800/50 backdrop-blur-sm rounded-3xl border border-slate-700/50 shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300 overflow-hidden group"
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
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
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
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, idx) => (
                        <span key={idx} className="px-2 py-1 bg-indigo-500/20 text-indigo-300 rounded-md text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-3">
                      <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-sm font-medium transition-colors">
                        <ExternalLink className="w-4 h-4" />
                        Ver Projeto
                      </button>
                      <button className="flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg text-sm font-medium transition-colors">
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
