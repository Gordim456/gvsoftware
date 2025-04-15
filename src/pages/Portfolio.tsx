import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Instagram, Coffee } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ProjectCard = ({ 
  image, 
  title, 
  category, 
  description, 
  link,
  delay 
}: { 
  image: string, 
  title: string, 
  category: string, 
  description: string, 
  link: string,
  delay: number
}) => {
  return (
    <motion.div 
      className="bg-gv-darker p-6 rounded-lg border border-gray-800 overflow-hidden group"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -5 }}
    >
      <div className="relative mb-6 overflow-hidden rounded-md">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" 
        />
      </div>
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-sm bg-indigo-500 bg-opacity-20 text-gv-primary px-3 py-1 rounded-full">
            {category}
          </span>
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gv-gray">{description}</p>
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center text-gv-primary hover:text-indigo-400 transition-colors"
        >
          Ver projeto <ExternalLink className="ml-1 w-4 h-4" />
        </a>
      </div>
    </motion.div>
  );
};

const Portfolio = () => {
  useEffect(() => {
    document.title = 'Portfólio | GV Software';
  }, []);

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
      description: "Painel de controle para visualização e análise de dados de negócios.",
      link: "#"
    },
    {
      image: "/project-5.jpg",
      title: "Blog CMS",
      category: "Web App",
      description: "Sistema de gerenciamento de conteúdo para blogs com editor rico.",
      link: "#"
    },
    {
      image: "/project-6.jpg",
      title: "Aplicativo de Delivery",
      category: "Mobile",
      description: "Aplicativo de entrega para restaurantes com rastreamento em tempo real.",
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <motion.div 
        className="fixed right-6 top-1/2 transform -translate-y-1/2 flex flex-col gap-4 z-50"
        animate={{
          y: [-10, 0, -10],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
           className="bg-gv-primary p-3 rounded-full hover:scale-110 transition-transform">
          <Instagram className="w-6 h-6 text-white" />
        </a>
        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer"
           className="bg-gv-primary p-3 rounded-full hover:scale-110 transition-transform">
          <Coffee className="w-6 h-6 text-white" />
        </a>
      </motion.div>

      <section className="py-20 bg-gv-dark pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nosso <span className="gradient-text">Portfólio</span></h2>
            <p className="text-gv-gray max-w-2xl mx-auto">
              Conheça alguns dos projetos que desenvolvemos para nossos clientes.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                image={project.image}
                title={project.title}
                category={project.category}
                description={project.description}
                link={project.link}
                delay={index * 0.1}
              />
            ))}
          </div>
          
          <motion.div 
            className="mt-16 bg-gv-darker p-8 rounded-lg border border-gray-800"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.7 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Nosso Processo Criativo</h3>
                <p className="text-gv-gray mb-4">
                  Cada projeto é uma oportunidade de criar algo único e impactante.
                  Nossa abordagem combina criatividade, tecnologia e estratégia para
                  entregar soluções que realmente fazem a diferença.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-gv-primary"></div>
                    <span>Entendemos profundamente as necessidades do cliente</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-gv-primary"></div>
                    <span>Criamos protótipos e validamos conceitos</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-gv-primary"></div>
                    <span>Desenvolvemos com foco na experiência do usuário</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-gv-primary"></div>
                    <span>Testamos exaustivamente cada funcionalidade</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-gv-primary"></div>
                    <span>Entregamos produtos de alta qualidade no prazo</span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <div className="w-full h-64 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg opacity-70 blur-xl absolute -top-4 -right-4 z-0"></div>
                <img 
                  src="/portfolio-process.svg" 
                  alt="Processo Criativo" 
                  className="w-full h-auto relative z-10 rounded-lg shadow-lg"
                />
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
