
import React from 'react';
import SocialIcons from '@/components/SocialIcons';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shell, ExternalLink } from "lucide-react"
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProjectCarousel from '../components/ProjectCarousel';

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
                  <ProjectCarousel
                    images={project.images}
                    title={project.title}
                    category={project.category}
                    description={project.description}
                    technologies={project.technologies}
                    link={project.link}
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
