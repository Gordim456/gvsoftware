
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Search, Filter } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';

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
      className="bg-gv-darker p-6 rounded-lg border border-gray-800 overflow-hidden group hover:border-indigo-500 transition-all duration-300"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
    >
      <div className="relative mb-6 overflow-hidden rounded-md group-hover:shadow-lg group-hover:shadow-indigo-500/20">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 to-purple-600/0 group-hover:from-indigo-500/30 group-hover:to-purple-600/30 transition-all duration-300 z-10"></div>
        <img 
          src={image} 
          alt={title} 
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" 
        />
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4 transition-opacity duration-300">
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-full flex items-center gap-2 text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
          >
            Ver projeto <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-sm bg-indigo-500 bg-opacity-20 text-indigo-300 px-3 py-1 rounded-full">
            {category}
          </span>
        </div>
        <h3 className="text-xl font-semibold group-hover:text-indigo-300 transition-colors">{title}</h3>
        <p className="text-gv-gray">{description}</p>
      </div>
    </motion.div>
  );
};

const Portfolio = () => {
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  
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

  const categories = ["all", "Web App", "Mobile", "Software"];
  
  const filteredProjects = projects.filter(project => {
    const matchesCategory = filter === "all" || project.category === filter;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gv-dark">
      <Navbar />

      <section className="py-20 pt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Nosso <span className="gradient-text">Portfólio</span></h2>
            <p className="text-gv-gray max-w-2xl mx-auto text-lg">
              Conheça alguns dos projetos que desenvolvemos para nossos clientes.
            </p>
          </motion.div>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-between items-center mb-10 gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex gap-2 flex-wrap justify-center sm:justify-start">
              {categories.map((category) => (
                <Button
                  key={category}
                  onClick={() => setFilter(category)}
                  variant={filter === category ? "default" : "outline"}
                  className={`rounded-full ${filter === category ? "bg-indigo-600 hover:bg-indigo-700" : "border-gray-600 hover:border-indigo-400 hover:text-indigo-300"}`}
                >
                  {category === "all" ? "Todos" : category}
                </Button>
              ))}
            </div>
            
            <div className="relative w-full sm:w-64 mt-4 sm:mt-0">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Buscar projetos..."
                className="w-full pl-10 pr-4 py-2 bg-gv-darker border border-gray-700 rounded-full focus:border-indigo-400 focus:outline-none"
                onChange={(e) => setSearchTerm(e.target.value)}
                value={searchTerm}
              />
            </div>
          </motion.div>
          
          <AnimatePresence>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
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
          </AnimatePresence>
          
          {filteredProjects.length === 0 && (
            <motion.div 
              className="text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xl text-gv-gray">Nenhum projeto encontrado com estes critérios.</p>
            </motion.div>
          )}
          
          <motion.div 
            className="mt-20 bg-gv-darker p-8 rounded-lg border border-gray-800 hover:border-indigo-500/50 transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.7 }}
            whileHover={{ 
              boxShadow: "0 0 30px rgba(79, 70, 229, 0.15)",
              transition: { duration: 0.3 }
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">Nosso Processo Criativo</h3>
                <p className="text-gv-gray mb-4">
                  Cada projeto é uma oportunidade de criar algo único e impactante.
                  Nossa abordagem combina criatividade, tecnologia e estratégia para
                  entregar soluções que realmente fazem a diferença.
                </p>
                <ul className="space-y-3">
                  <motion.li 
                    className="flex items-center gap-3"
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  >
                    <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                    <span>Entendemos profundamente as necessidades do cliente</span>
                  </motion.li>
                  <motion.li 
                    className="flex items-center gap-3"
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  >
                    <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                    <span>Criamos protótipos e validamos conceitos</span>
                  </motion.li>
                  <motion.li 
                    className="flex items-center gap-3"
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  >
                    <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                    <span>Desenvolvemos com foco na experiência do usuário</span>
                  </motion.li>
                  <motion.li 
                    className="flex items-center gap-3"
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  >
                    <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                    <span>Testamos exaustivamente cada funcionalidade</span>
                  </motion.li>
                  <motion.li 
                    className="flex items-center gap-3"
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  >
                    <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                    <span>Entregamos produtos de alta qualidade no prazo</span>
                  </motion.li>
                </ul>
              </div>
              <div className="relative">
                <div className="w-full h-64 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg opacity-70 blur-xl absolute -top-4 -right-4 z-0"></div>
                <img 
                  src="/portfolio-process.svg" 
                  alt="Processo Criativo" 
                  className="w-full h-auto relative z-10 rounded-lg shadow-lg transform transition-transform hover:scale-105 duration-300"
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
