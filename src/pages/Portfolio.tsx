
import React, { useState } from 'react';
import SocialIcons from '@/components/SocialIcons';
import { motion } from 'framer-motion';
import { Shell, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react"
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';

const ProjectCard = ({ 
  images, 
  title, 
  category, 
  description, 
  technologies
}: { 
  images: string[], 
  title: string, 
  category: string, 
  description: string,
  technologies: string[]
}) => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <motion.div 
      className="bg-gv-darker p-6 rounded-lg border border-gray-800 overflow-hidden group hover:border-indigo-500/30"
      whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(79, 70, 229, 0.2)" }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative mb-6 overflow-hidden rounded-md">
        {/* Image slider */}
        <div className="relative h-48 w-full">
          {images.map((image, idx) => (
            <div 
              key={idx} 
              className={`absolute inset-0 transition-opacity duration-300 ${currentImage === idx ? 'opacity-100' : 'opacity-0'}`}
            >
              <img 
                src={image} 
                alt={`${title} - slide ${idx + 1}`} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                loading="lazy"
              />
            </div>
          ))}
          
          {/* Navigation arrows */}
          <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <Button 
              variant="outline" 
              size="icon" 
              className="h-8 w-8 rounded-full bg-black/50 border-gray-600 hover:bg-black/70"
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              className="h-8 w-8 rounded-full bg-black/50 border-gray-600 hover:bg-black/70"
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
          
          {/* Slide indicators */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1">
            {images.map((_, idx) => (
              <div 
                key={idx} 
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  currentImage === idx ? "bg-white w-3" : "bg-white/50 w-1.5"
                }`}
              />
            ))}
          </div>
          
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
            <span className="p-4 text-sm text-white font-medium">{category}</span>
          </div>
        </div>
      </div>
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-sm bg-indigo-500 bg-opacity-20 text-indigo-400 px-3 py-1 rounded-full">
            {category}
          </span>
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gv-gray">{description}</p>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mt-4">
          {technologies.map((tech, index) => (
            <span key={index} className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Portfolio = () => {
  const projects = [
    {
      images: [
        "/project-1.jpg",
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
        "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
      ],
      title: "E-commerce App",
      category: "Web App",
      description: "Plataforma de comércio eletrônico completa com sistema de pagamentos integrado.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "#"
    },
    {
      images: [
        "/project-2.jpg",
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
      ],
      title: "Sistema de Gestão",
      category: "Software",
      description: "Sistema de gestão empresarial personalizado para pequenas empresas.",
      technologies: ["Vue.js", "Python", "PostgreSQL", "Docker"],
      link: "#"
    },
    {
      images: [
        "/project-3.jpg",
        "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
        "https://images.unsplash.com/photo-1518770660439-4636190af475"
      ],
      title: "App Móvel",
      category: "Mobile",
      description: "Aplicativo móvel para gestão de tarefas e produtividade pessoal.",
      technologies: ["React Native", "Firebase", "TypeScript"],
      link: "#"
    },
    {
      images: [
        "/project-4.jpg",
        "https://images.unsplash.com/photo-1563986768609-322da13575f3",
        "https://images.unsplash.com/photo-1573165850883-9b0e18c44bd2"
      ],
      title: "Plataforma Educacional",
      category: "EdTech",
      description: "Sistema de ensino online com recursos avançados de aprendizagem interativa.",
      technologies: ["Next.js", "GraphQL", "AWS", "MongoDB"],
      link: "#"
    },
    {
      images: [
        "/project-5.jpg",
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
        "https://images.unsplash.com/photo-1581090700227-1e37b190418e"
      ],
      title: "Dashboard Analytics",
      category: "Business Intelligence",
      description: "Dashboard interativo para visualização de dados e métricas de negócio em tempo real.",
      technologies: ["Angular", "D3.js", "Node.js", "MySQL"],
      link: "#"
    },
    {
      images: [
        "/project-6.jpg",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
        "https://images.unsplash.com/photo-1555421689-491a97ff2040"
      ],
      title: "CRM Personalizado",
      category: "Enterprise Solution",
      description: "Sistema de gestão de relacionamento com clientes adaptado para necessidades específicas.",
      technologies: ["React", "Java Spring", "PostgreSQL", "Redis"],
      link: "#"
    }
  ];

  return (
    <div>
      <SocialIcons />
      <div className="min-h-screen bg-gv-darker">
        <Navbar />

        {/* Hero Section */}
        <section className="relative h-[400px] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-indigo-900/70 z-10"></div>
          <motion.img
            src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d"
            alt="Portfolio Hero"
            className="w-full h-full object-cover"
            initial={{ scale: 1 }}
            animate={{ scale: 1.1 }}
            transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
          />
          
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <motion.div 
              className="text-center max-w-4xl px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.div
                className="w-16 h-16 mx-auto bg-indigo-500 bg-opacity-20 rounded-full flex items-center justify-center mb-6"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              >
                <Shell className="w-8 h-8 text-indigo-400" />
              </motion.div>
              <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">
                Nosso <span className="gradient-text">Portfólio</span>
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                Explore alguns dos nossos projetos mais recentes e descubra como transformamos ideias em realidade.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20 relative overflow-hidden">
          {/* Decorative Blobs */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob"></div>
          <div className="absolute bottom-40 right-10 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob animation-delay-2000"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Projetos <span className="gradient-text">Recentes</span></h2>
              <p className="text-gv-gray max-w-2xl mx-auto text-lg">
                Cada projeto é uma história de sucesso que combina design elegante, funcionalidade robusta e experiência excepcional.
              </p>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <ProjectCard
                    images={project.images}
                    title={project.title}
                    category={project.category}
                    description={project.description}
                    technologies={project.technologies}
                  />
                </motion.div>
              ))}
            </div>
            
            {/* CTA Section */}
            <motion.div 
              className="mt-20 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-gradient-to-br from-indigo-900/50 to-purple-900/50 p-10 rounded-2xl border border-indigo-500/20 shadow-xl">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Pronto para <span className="gradient-text">iniciar seu projeto</span>?
                </h3>
                <p className="text-gv-gray mb-8 max-w-2xl mx-auto">
                  Transforme suas ideias em realidade com nosso time especializado em desenvolvimento de software.
                </p>
                <motion.a
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-medium hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <span>Solicite um Orçamento</span>
                  <ExternalLink className="w-4 h-4" />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default Portfolio;
