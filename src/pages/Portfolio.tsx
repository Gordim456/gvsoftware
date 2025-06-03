
import React, { useEffect, useState, useCallback, useMemo } from 'react';
import SocialIcons from '@/components/SocialIcons';
import { Briefcase, ExternalLink, Eye, Code, Wrench, Calendar, Clock, Upload } from "lucide-react";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProjectCarousel from '@/components/ProjectCarousel';

const Portfolio = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    document.title = 'Portfólio | GV Software - Nossos Projetos';
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
    
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
        "/lovable-uploads/f9a88f53-3e07-4405-88ba-38a71e63e353.png",
        "/lovable-uploads/61ef491d-1126-436c-be67-fd525f729623.png"
      ],
      title: "Sistema de Gestão Bebidas ON",
      category: "Web",
      description: "Sistema completo de gestão empresarial com dashboard interativo, controle de vendas, estoque, pedidos e clientes.",
      technologies: ["React", "Node.js", "PostgreSQL", "Chart.js", "TypeScript"],
      link: "https://kzmlikv32qnpkg9ivfjs.lite.vusercontent.net",
      featured: true,
      status: "completed"
    },
    {
      images: [
        "/lovable-uploads/9805566a-c46b-4db7-8637-f74f6a89da91.png"
      ],
      title: "Em Desenvolvimento: A Próxima Grande Inovação!",
      category: "Web",
      description: "Seu projeto pode ser o próximo! Estamos em desenvolvimento, não perca as novidades!",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "#",
      featured: false,
      status: "development"
    },
    {
      images: [
        "/lovable-uploads/9805566a-c46b-4db7-8637-f74f6a89da91.png"
      ],
      title: "Em Desenvolvimento: A Próxima Grande Inovação!",
      category: "Mobile",
      description: "Seu projeto pode ser o próximo! Estamos em desenvolvimento, não perca as novidades!",
      technologies: ["React Native", "Firebase", "TypeScript"],
      link: "#",
      featured: false,
      status: "development"
    },
    {
      images: [
        "/lovable-uploads/9805566a-c46b-4db7-8637-f74f6a89da91.png"
      ],
      title: "Em Desenvolvimento: A Próxima Grande Inovação!",
      category: "Design",
      description: "Seu projeto pode ser o próximo! Estamos em desenvolvimento, não perca as novidades!",
      technologies: ["Figma", "Adobe XD", "Sketch", "Photoshop"],
      link: "#",
      featured: false,
      status: "development"
    },
    {
      images: [
        "/lovable-uploads/9805566a-c46b-4db7-8637-f74f6a89da91.png"
      ],
      title: "Em Desenvolvimento: A Próxima Grande Inovação!",
      category: "Web",
      description: "Seu projeto pode ser o próximo! Estamos em desenvolvimento, não perca as novidades!",
      technologies: ["Angular", "D3.js", "Node.js", "MySQL"],
      link: "#",
      featured: false,
      status: "development"
    },
    {
      images: [
        "/lovable-uploads/9805566a-c46b-4db7-8637-f74f6a89da91.png"
      ],
      title: "Em Desenvolvimento: A Próxima Grande Inovação!",
      category: "Mobile",
      description: "Seu projeto pode ser o próximo! Estamos em desenvolvimento, não perca as novidades!",
      technologies: ["Flutter", "Dart", "Firebase", "SQLite"],
      link: "#",
      featured: false,
      status: "development"
    }
  ], []);

  // Simplified filter categories
  const categories = useMemo(() => ['all', 'Web', 'Mobile', 'Design'], []);

  // Filtered projects
  const filteredProjects = useMemo(() => {
    return filter === 'all' ? projects : projects.filter(project => project.category === filter);
  }, [projects, filter]);

  // Enhanced hero section with Sistema de Gestão Bebidas ON background
  const HeroSection = useCallback(() => (
    <section className="relative h-[50vh] overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-indigo-900/80 to-purple-900/90 z-10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(/lovable-uploads/f9a88f53-3e07-4405-88ba-38a71e63e353.png)',
          transform: 'translateZ(0)'
        }}
      />
      
      <div className="relative z-20 text-center max-w-4xl px-4">
        <div className="w-16 h-16 mx-auto bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mb-6 shadow-2xl">
          <Briefcase className="w-8 h-8 text-white" />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent">
          Nosso <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">Portfólio</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
          Projetos que transformam ideias em soluções digitais de impacto
        </p>
      </div>
    </section>
  ), []);

  // Enhanced ProjectCard component
  const ProjectCard = ({ project, index }: { project: any, index: number }) => (
    <div className={`relative group ${project.status === 'development' ? 'opacity-75' : ''}`}>
      <div className="bg-slate-900/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-200 shadow-xl">
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
        
        {project.status === 'completed' && project.title !== "Sistema de Gestão Bebidas ON" && (
          <div className="mt-4 flex gap-3">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-medium hover:shadow-lg transition-all duration-200"
            >
              <ExternalLink className="w-4 h-4" />
              Ver Projeto
            </a>
            <button className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-slate-800/50 text-white rounded-xl font-medium hover:bg-slate-700/50 transition-all duration-200 border border-slate-600/30">
              <Code className="w-4 h-4" />
              Código
            </button>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className={`bg-slate-950 min-h-screen transition-opacity duration-200 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Navbar />

      <HeroSection />
      <SocialIcons />

      <section className="py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Enhanced Filter Section with better categories */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Projetos por <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">Categoria</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed">
              Explore nossos projetos organizados por área de especialização
            </p>
            
            {/* Enhanced Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
                    filter === category
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg scale-105'
                      : 'bg-slate-800/50 text-gray-400 hover:bg-slate-700/50 hover:text-white border border-slate-600/30 hover:scale-105'
                  }`}
                >
                  {category === 'all' ? 'Todos os Projetos' : 
                   category === 'Web' ? '💻 Desenvolvimento Web' :
                   category === 'Mobile' ? '📱 Apps Mobile' :
                   category === 'Design' ? '🎨 Design UI/UX' : category}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
          
          {/* Modern CTA Section */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/50 p-8 rounded-3xl border border-slate-700/50 backdrop-blur-sm shadow-2xl">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Pronto para <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">iniciar seu projeto</span>?
              </h3>
              <p className="text-gray-400 mb-6 max-w-2xl mx-auto text-lg leading-relaxed">
                Transforme suas ideias em realidade com nosso time especializado em desenvolvimento de software.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-medium hover:shadow-lg transition-all duration-200"
                >
                  <span>Solicite um Orçamento</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-3 px-6 py-3 bg-slate-800/50 text-white rounded-full font-medium hover:bg-slate-700/50 transition-all duration-200 border border-slate-600/30"
                >
                  <Eye className="w-4 h-4" />
                  <span>Ver Mais Projetos</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <SocialIcons />
    </div>
  );
};

export default Portfolio;
