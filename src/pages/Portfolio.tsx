
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SocialIcons from '../components/SocialIcons';
import ChatBot from '../components/chat/ChatBot';
import ProjectCarousel from '../components/ProjectCarousel';

const Portfolio = () => {
  React.useEffect(() => {
    document.title = 'Portfólio | GV Software - Nossos Projetos';
  }, []);

  const projects = [
    {
      id: 1,
      images: ["/lovable-uploads/61ef491d-1126-436c-be67-fd525f729623.png"],
      title: "Sistema de Gestão de Bebidas",
      category: "Sistema Web",
      description: "Sistema completo para controle de estoque, vendas e gestão de bebidas. Interface intuitiva e relatórios em tempo real.",
      technologies: ["React", "Node.js", "PostgreSQL", "TypeScript", "Tailwind CSS"],
      link: "#",
      featured: true
    },
    {
      id: 2,
      images: ["/lovable-uploads/325a1643-74a7-40ea-9d10-617fbb277bf1.png"],
      title: "E-commerce Moderno",
      category: "E-commerce",
      description: "Plataforma de comércio eletrônico completa com sistema de pagamentos integrado e painel administrativo.",
      technologies: ["Next.js", "Stripe", "MongoDB", "React"],
      link: "#",
      featured: true
    },
    {
      id: 3,
      images: ["/lovable-uploads/7b28e4c1-03d5-4727-af13-88426ecce861.png"],
      title: "App de Delivery",
      category: "Mobile App",
      description: "Aplicativo móvel para delivery com rastreamento em tempo real e sistema de pagamentos.",
      technologies: ["React Native", "Firebase", "Google Maps API", "Redux"],
      link: "#",
      featured: false
    },
    {
      id: 4,
      images: ["/lovable-uploads/ec120818-eaa6-4fb5-8187-e1914b9d670a.png"],
      title: "Dashboard Analytics",
      category: "Web App",
      description: "Painel interativo para visualização de dados e métricas de negócios com gráficos dinâmicos.",
      technologies: ["React", "D3.js", "Node.js", "Chart.js"],
      link: "#",
      featured: false
    },
    {
      id: 5,
      images: ["/lovable-uploads/f9a88f53-3e07-4405-88ba-38a71e63e353.png"],
      title: "Sistema de Gestão Escolar",
      category: "Sistema Web",
      description: "Plataforma completa para gestão escolar com módulos para alunos, professores e administração.",
      technologies: ["Vue.js", "Laravel", "MySQL", "Bootstrap"],
      link: "#",
      featured: false
    },
    {
      id: 6,
      images: ["/lovable-uploads/a473a0aa-05ba-45b0-84fd-be4060fb59d9.png"],
      title: "Landing Page Corporativa",
      category: "Website",
      description: "Site institucional moderno e responsivo com animações avançadas e otimização SEO.",
      technologies: ["React", "Framer Motion", "Tailwind CSS", "Vite"],
      link: "#",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const regularProjects = projects.filter(project => !project.featured);

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
              Nosso <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">Portfólio</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Conheça alguns dos projetos que desenvolvemos para nossos clientes, desde sistemas web até aplicativos mobile.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <motion.section 
        className="py-20 bg-slate-950 relative overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-600 rounded-full filter blur-3xl animate-pulse"></div>
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
              Projetos em Destaque
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Nossos projetos mais inovadores e impactantes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-sm p-8 rounded-xl border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <ProjectCarousel
                  images={project.images}
                  title={project.title}
                  category={project.category}
                  description={project.description}
                  technologies={project.technologies}
                  link={project.link}
                />
                
                <div className="flex gap-4 mt-6">
                  <a
                    href={project.link}
                    className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Ver Projeto
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <a
                    href="#"
                    className="bg-slate-800 hover:bg-slate-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* All Projects */}
      <motion.section 
        className="py-20 bg-gradient-to-br from-slate-950 via-indigo-950/20 to-purple-950/20 relative"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl animate-pulse"></div>
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
              Todos os Projetos
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Uma seleção completa dos nossos trabalhos em diversas áreas.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <ProjectCarousel
                  images={project.images}
                  title={project.title}
                  category={project.category}
                  description={project.description}
                  technologies={project.technologies}
                  link={project.link}
                />
                
                <div className="flex gap-3 mt-4">
                  <a
                    href={project.link}
                    className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-2 px-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 text-sm"
                  >
                    Ver Projeto
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a
                    href="#"
                    className="bg-slate-800 hover:bg-slate-700 text-white py-2 px-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center"
                  >
                    <Github className="w-3 h-3" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <Footer />
      <SocialIcons />
      <ChatBot />
    </div>
  );
};

export default Portfolio;
