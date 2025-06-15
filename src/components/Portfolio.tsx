
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const ProjectCard = ({ 
  image, 
  title, 
  category, 
  description, 
  link 
}: { 
  image: string, 
  title: string, 
  category: string, 
  description: string, 
  link: string 
}) => {
  return (
    <motion.div 
      className="bg-gv-darker p-6 rounded-lg border border-gray-800 overflow-hidden group hover:border-indigo-500/30"
      whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(79, 70, 229, 0.2)" }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative mb-6 overflow-hidden rounded-md">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <span className="p-4 text-sm text-white font-medium">{category}</span>
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
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center text-indigo-400 hover:text-indigo-300 transition-colors"
        >
          Ver projeto <ExternalLink className="ml-1 w-4 h-4" />
        </a>
      </div>
    </motion.div>
  );
};

const Portfolio = () => {
  const projects = [
    {
      image: "/project-1.jpg",
      title: "E-commerce App",
      category: "Web App",
      description: "Plataforma de comércio eletrônico completa com sistema de pagamentos integrado.",
      link: "#"
    },
    {
      image: "/project-2.jpg",
      title: "Sistema de Gestão",
      category: "Software",
      description: "Sistema de gestão empresarial personalizado para pequenas empresas.",
      link: "#"
    },
    {
      image: "/project-3.jpg",
      title: "App Móvel",
      category: "Mobile",
      description: "Aplicativo móvel para gestão de tarefas e produtividade pessoal.",
      link: "#"
    },
    {
      image: "/project-4.jpg",
      title: "Dashboard Analytics",
      category: "Web App",
      description: "Painel interativo para visualização de dados e métricas de negócios.",
      link: "#"
    },
    {
      image: "/project-5.jpg",
      title: "Site Institucional",
      category: "Website",
      description: "Site profissional com design moderno para apresentação da empresa.",
      link: "#"
    },
    {
      image: "/project-6.jpg",
      title: "Aplicativo de Delivery",
      category: "Mobile",
      description: "Solução completa para delivery com rastreamento em tempo real.",
      link: "#"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="portfolio" className="py-20 bg-gv-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            className="w-16 h-16 mx-auto bg-indigo-500 bg-opacity-20 rounded-full flex items-center justify-center mb-6"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
              <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
              <line x1="12" y1="22.08" x2="12" y2="12"></line>
            </svg>
          </motion.div>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Nosso <span className="gradient-text">Portfólio</span>
          </motion.h2>
          
          <motion.p 
            className="text-gv-gray max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Conheça alguns dos projetos que desenvolvemos para nossos clientes.
          </motion.p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <ProjectCard
                image={project.image}
                title={project.title}
                category={project.category}
                description={project.description}
                link={project.link}
              />
            </motion.div>
          ))}
        </motion.div>
        
        <div className="text-center mt-12">
          <Link 
            to="/portfolio" 
            className="inline-flex items-center text-indigo-400 hover:text-indigo-300 transition-colors group"
          >
            Ver todos os projetos 
            <ExternalLink className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
