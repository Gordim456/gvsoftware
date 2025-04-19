
import React from 'react';
import SocialIcons from '@/components/SocialIcons';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shell } from "lucide-react"
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
    }
  ];

  return (
    <div>
      <SocialIcons />
      <div className="min-h-screen bg-gv-darker">
        <Navbar />

        <section className="pt-32 pb-20 relative overflow-hidden">
          {/* Decorative Blobs */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob"></div>
          <div className="absolute bottom-40 right-10 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob animation-delay-2000"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <motion.div
                className="w-16 h-16 mx-auto bg-indigo-500 bg-opacity-20 rounded-full flex items-center justify-center mb-6"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              >
                <Shell className="w-8 h-8 text-indigo-400" />
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Nosso <span className="gradient-text">Portfólio</span></h2>
              <p className="text-gv-gray max-w-2xl mx-auto text-lg">
                Explore alguns dos nossos projetos mais recentes e descubra como transformamos ideias em realidade.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8">
              {projects.map((project, index) => (
                <ProjectCarousel
                  key={index}
                  images={project.images}
                  title={project.title}
                  category={project.category}
                  description={project.description}
                  technologies={project.technologies}
                  link={project.link}
                />
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default Portfolio;
