
import React, { useEffect, useState, useCallback, useMemo } from 'react';
import SocialIcons from '@/components/SocialIcons';
import { Briefcase, ExternalLink, Eye, Code, Wrench } from "lucide-react";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProjectCarousel from '@/components/ProjectCarousel';
import { motion } from 'framer-motion';

const Portfolio = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    document.title = 'Portfólio | GV Software - Nossos Projetos';
    setIsLoaded(true);
    
    // SEO optimization
    const meta = document.createElement('meta');
    meta.name = 'description';
    meta.content = 'Explore nosso portfólio de projetos - websites modernos, aplicações web e soluções digitais desenvolvidas pela GV Software.';
    if (!document.querySelector('meta[name="description"]')) {
      document.head.appendChild(meta);
    }
  }, []);

  // Enhanced project data with your management system as the main project
  const projects = useMemo(() => [
    {
      images: [
        "/lovable-uploads/61ef491d-1126-436c-be67-fd525f729623.png",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
      ],
      title: "Sistema de Gestão Bebidas ON",
      category: "Enterprise",
      description: "Sistema completo de gestão empresarial com dashboard interativo, controle de vendas, estoque, pedidos e clientes.",
      technologies: ["React", "Node.js", "PostgreSQL", "Chart.js", "TypeScript"],
      link: "https://kzmlikv32qnpkg9ivfjs.lite.vusercontent.net",
      featured: true,
      status: "completed"
    },
    {
      images: [
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80"
      ],
      title: "E-commerce Moderno",
      category: "E-commerce",
      description: "Plataforma completa de comércio eletrônico com pagamentos integrados - Em desenvolvimento.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "#",
      featured: false,
      status: "development"
    },
    {
      images: [
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80"
      ],
      title: "App de Produtividade",
      category: "Mobile",
      description: "Aplicativo móvel para gestão de tarefas - Em desenvolvimento.",
      technologies: ["React Native", "Firebase", "TypeScript"],
      link: "#",
      featured: false,
      status: "development"
    },
    {
      images: [
        "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=800&q=80"
      ],
      title: "Plataforma Educacional",
      category: "EdTech",
      description: "Sistema de ensino online com videoaulas - Em desenvolvimento.",
      technologies: ["Next.js", "GraphQL", "AWS", "MongoDB"],
      link: "#",
      featured: false,
      status: "development"
    },
    {
      images: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
      ],
      title: "Dashboard Analytics",
      category: "Business Intelligence",
      description: "Dashboard interativo para visualização de dados - Em desenvolvimento.",
      technologies: ["Angular", "D3.js", "Node.js", "MySQL"],
      link: "#",
      featured: false,
      status: "development"
    },
    {
      images: [
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
      ],
      title: "CRM Inteligente",
      category: "CRM",
      description: "Sistema de gestão de relacionamento com clientes - Em desenvolvimento.",
      technologies: ["React", "Java Spring", "PostgreSQL", "Redis"],
      link: "#",
      featured: false,
      status: "development"
    }
  ], []);

  // Filter categories
  const categories = useMemo(() => ['all', 'Enterprise', 'E-commerce', 'Mobile', 'EdTech', 'Business Intelligence', 'CRM'], []);

  // Filtered projects
  const filteredProjects = useMemo(() => {
    return filter === 'all' ? projects : projects.filter(project => project.category === filter);
  }, [projects, filter]);

  // Modern hero section
  const HeroSection = useCallback(() => (
    <section className="relative h-[60vh] overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-indigo-900/80 to-purple-900/90 z-10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=2000&q=80)',
          transform: 'translateZ(0)'
        }}
      />
      
      <motion.div 
        className="relative z-20 text-center max-w-4xl px-4"
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
          <Briefcase className="w-10 h-10 text-white" />
        </motion.div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent">
          Nosso <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">Portfólio</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
          Projetos que transformam ideias em soluções digitais de impacto
        </p>
      </motion.div>
    </section>
  ), []);

  // Enhanced ProjectCard component
  const ProjectCard = ({ project, index }: { project: any, index: number }) => (
    <motion.div
      className={`relative group ${project.status === 'development' ? 'opacity-75' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: project.status === 'development' ? 0.75 : 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <div className="bg-slate-900/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-indigo-500/20">
        {project.status === 'development' && (
          <div className="absolute top-4 right-4 z-10">
            <div className="bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2">
              <Wrench className="w-4 h-4" />
              Em Desenvolvimento
            </div>
          </div>
        )}
        
        <ProjectCarousel
          images={project.images}
          title={project.title}
          category={project.category}
          description={project.description}
          technologies={project.technologies}
          link={project.link}
        />
        
        {project.status === 'completed' && (
          <div className="mt-4 flex gap-3">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 hover:scale-105"
            >
              <ExternalLink className="w-4 h-4" />
              Ver Projeto
            </a>
            <button className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-slate-800/50 text-white rounded-xl font-medium hover:bg-slate-700/50 transition-all duration-300 border border-slate-600/30">
              <Code className="w-4 h-4" />
              Código
            </button>
          </div>
        )}
      </div>
    </motion.div>
  );

  return (
    <div className={`bg-slate-950 min-h-screen transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <SocialIcons />
      <Navbar />

      <HeroSection />

      <section className="py-20 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Modern Filter Section */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Projetos <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">Recentes</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
              Cada projeto é uma história de sucesso que combina design elegante, funcionalidade robusta e experiência excepcional.
            </p>
            
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                    filter === category
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                      : 'bg-slate-800/50 text-gray-400 hover:bg-slate-700/50 hover:text-white border border-slate-600/30'
                  }`}
                >
                  {category === 'all' ? 'Todos' : category}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
          
          {/* Modern CTA Section */}
          <motion.div 
            className="mt-20 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/50 p-12 rounded-3xl border border-slate-700/50 backdrop-blur-sm shadow-2xl">
              <h3 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Pronto para <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">iniciar seu projeto</span>?
              </h3>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
                Transforme suas ideias em realidade com nosso time especializado em desenvolvimento de software.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-medium hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 hover:scale-105"
                >
                  <span>Solicite um Orçamento</span>
                  <ExternalLink className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-slate-800/50 text-white rounded-full font-medium hover:bg-slate-700/50 transition-all duration-300 border border-slate-600/30"
                >
                  <Eye className="w-5 h-5" />
                  <span>Ver Mais Projetos</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
