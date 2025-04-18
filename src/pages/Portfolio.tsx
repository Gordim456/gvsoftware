import { useEffect, useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ExternalLink, Search, Filter, Code, PenTool, Layout, ChevronRight, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import ProjectCarousel from '@/components/ProjectCarousel';

const PortfolioCategory = ({ category, isActive, onClick }: { category: string, isActive: boolean, onClick: () => void }) => {
  return (
    <motion.button
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
        isActive 
          ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/20" 
          : "bg-gray-800/50 text-gray-300 hover:bg-gray-700"
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {category === "all" ? "Todos" : category}
    </motion.button>
  );
};

const Portfolio = () => {
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef(null);
  const isInView = useInView(statsRef, { once: true });
  
  useEffect(() => {
    document.title = 'Portfólio | GV Software';
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  // Enhanced project data with multiple images per project
  const projects = [
    {
      images: [
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
        "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
      ],
      title: "E-commerce App",
      category: "Web App",
      description: "Plataforma de comércio eletrônico completa com sistema de pagamentos integrado.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "#"
    },
    {
      images: [
        "https://images.unsplash.com/photo-1518770660439-4636190af475",
        "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
        "https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
      ],
      title: "Sistema de Gestão",
      category: "Software",
      description: "Sistema de gestão empresarial personalizado para pequenas empresas.",
      technologies: ["Vue.js", "Laravel", "MySQL", "Docker"],
      link: "#"
    },
    {
      images: [
        "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
      ],
      title: "App Móvel",
      category: "Mobile",
      description: "Aplicativo móvel para gestão de tarefas e produtividade pessoal.",
      technologies: ["React Native", "Firebase", "Redux", "TypeScript"],
      link: "#"
    },
    {
      images: [
        "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
        "https://images.unsplash.com/photo-1518770660439-4636190af475",
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
      ],
      title: "Dashboard Analytics",
      category: "Web App",
      description: "Painel de controle para visualização e análise de dados de negócios.",
      technologies: ["Angular", "D3.js", "Express", "PostgreSQL"],
      link: "#"
    },
    {
      images: [
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
        "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
        "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
      ],
      title: "Blog CMS",
      category: "Web App",
      description: "Sistema de gerenciamento de conteúdo para blogs com editor rico.",
      technologies: ["Next.js", "Contentful", "GraphQL", "Tailwind CSS"],
      link: "#"
    },
    {
      images: [
        "https://images.unsplash.com/photo-1518770660439-4636190af475",
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
      ],
      title: "Aplicativo de Delivery",
      category: "Mobile",
      description: "Aplicativo de entrega para restaurantes com rastreamento em tempo real.",
      technologies: ["Flutter", "Go", "Google Maps API", "Redis"],
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
    <motion.div 
      className="min-h-screen bg-gv-dark"
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar />

      <section className="py-20 pt-28 relative overflow-hidden">
        {/* Enhanced decorative elements with animations */}
        <motion.div 
          className="absolute top-20 left-10 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-5"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 20, 0],
            y: [0, -20, 0]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>
        
        <motion.div 
          className="absolute bottom-20 right-10 w-72 h-72 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-5"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -30, 0],
            y: [0, 30, 0]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        ></motion.div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="w-16 h-16 mx-auto bg-indigo-500 bg-opacity-20 rounded-full flex items-center justify-center mb-6"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              <Layout className="w-8 h-8 text-indigo-400" />
            </motion.div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Nosso <span className="gradient-text">Portfólio</span></h2>
            <p className="text-gv-gray max-w-2xl mx-auto text-lg">
              Transformando ideias em soluções digitais inovadoras. Conheça alguns dos nossos cases de sucesso.
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
                <PortfolioCategory
                  key={category}
                  category={category}
                  isActive={filter === category}
                  onClick={() => setFilter(category)}
                />
              ))}
            </div>
            
            <div className="relative w-full sm:w-64 mt-4 sm:mt-0">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Buscar projetos..."
                className="w-full pl-10 pr-4 py-2 bg-gv-darker border border-gray-700 rounded-full focus:border-indigo-400 focus:outline-none focus:ring-1 focus:ring-indigo-400"
                onChange={(e) => setSearchTerm(e.target.value)}
                value={searchTerm}
              />
            </div>
          </motion.div>
          
          <AnimatePresence>
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              layout
            >
              {filteredProjects.map((project, index) => (
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
            </motion.div>
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
          
          {/* Stats Section */}
          <motion.div 
            className="mt-24 grid grid-cols-1 md:grid-cols-4 gap-8"
            ref={statsRef}
          >
            <motion.div 
              className="bg-gv-darker p-8 rounded-xl border border-gray-800 text-center"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <motion.div 
                className="w-16 h-16 mx-auto bg-indigo-500 bg-opacity-10 rounded-full flex items-center justify-center mb-3"
                whileHover={{ scale: 1.1, backgroundColor: "rgba(99, 102, 241, 0.2)" }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Code className="w-8 h-8 text-indigo-400" />
              </motion.div>
              <h3 className="text-4xl font-bold gradient-text mb-2">+100</h3>
              <p className="text-gv-gray">Projetos Entregues</p>
            </motion.div>

            <motion.div 
              className="bg-gv-darker p-8 rounded-xl border border-gray-800 text-center"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <motion.div 
                className="w-16 h-16 mx-auto bg-indigo-500 bg-opacity-10 rounded-full flex items-center justify-center mb-3"
                whileHover={{ scale: 1.1, backgroundColor: "rgba(99, 102, 241, 0.2)" }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Layout className="w-8 h-8 text-indigo-400" />
              </motion.div>
              <h3 className="text-4xl font-bold gradient-text mb-2">+30</h3>
              <p className="text-gv-gray">Websites</p>
            </motion.div>

            <motion.div 
              className="bg-gv-darker p-8 rounded-xl border border-gray-800 text-center"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <motion.div 
                className="w-16 h-16 mx-auto bg-indigo-500 bg-opacity-10 rounded-full flex items-center justify-center mb-3"
                whileHover={{ scale: 1.1, backgroundColor: "rgba(99, 102, 241, 0.2)" }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <PenTool className="w-8 h-8 text-indigo-400" />
              </motion.div>
              <h3 className="text-4xl font-bold gradient-text mb-2">+50</h3>
              <p className="text-gv-gray">UI/UX Designs</p>
            </motion.div>

            <motion.div 
              className="bg-gv-darker p-8 rounded-xl border border-gray-800 text-center"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <motion.div 
                className="w-16 h-16 mx-auto bg-indigo-500 bg-opacity-10 rounded-full flex items-center justify-center mb-3"
                whileHover={{ scale: 1.1, backgroundColor: "rgba(99, 102, 241, 0.2)" }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Filter className="w-8 h-8 text-indigo-400" />
              </motion.div>
              <h3 className="text-4xl font-bold gradient-text mb-2">+20</h3>
              <p className="text-gv-gray">Aplicativos Mobile</p>
            </motion.div>
          </motion.div>
          
          {/* Enhanced methodology section with hover animations */}
          <motion.div 
            className="mt-20 bg-gv-darker p-8 rounded-xl border border-gray-800 hover:border-indigo-500/50 transition-all duration-300 group"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.7 }}
            whileHover={{ 
              boxShadow: "0 0 30px rgba(79, 70, 229, 0.15)",
              transition: { duration: 0.3 }
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">Metodologia de Trabalho</h3>
                <p className="text-gv-gray mb-6">
                  Nossa abordagem combina metodologias ágeis, experiência de usuário e tecnologias modernas
                  para entregar projetos de alta qualidade que superam expectativas.
                </p>
                <ul className="space-y-3">
                  <motion.li 
                    className="flex items-center gap-3"
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  >
                    <ChevronRight className="text-indigo-500" size={18} />
                    <span>Design centrado no usuário</span>
                  </motion.li>
                  <motion.li 
                    className="flex items-center gap-3"
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  >
                    <ChevronRight className="text-indigo-500" size={18} />
                    <span>Desenvolvimento ágil com entregas incrementais</span>
                  </motion.li>
                  <motion.li 
                    className="flex items-center gap-3"
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  >
                    <ChevronRight className="text-indigo-500" size={18} />
                    <span>Testes contínuos e garantia de qualidade</span>
                  </motion.li>
                  <motion.li 
                    className="flex items-center gap-3"
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  >
                    <ChevronRight className="text-indigo-500" size={18} />
                    <span>Comunicação transparente durante todo o processo</span>
                  </motion.li>
                </ul>
                
                <motion.div 
                  className="mt-8"
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                >
                  <a 
                    href="/contact" 
                    className="inline-flex items-center text-indigo-400 hover:text-indigo-300 font-medium"
                  >
                    Vamos discutir seu projeto <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </motion.div>
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
          
          {/* CTA Section with enhanced animations */}
          <motion.div 
            className="mt-20 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold mb-6">Quer ver seu <span className="gradient-text">projeto</span> aqui?</h3>
            <p className="text-gv-gray max-w-2xl mx-auto mb-8">
              Entre em contato conosco hoje mesmo para discutir como podemos transformar sua ideia em realidade.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-6 rounded-full text-lg font-medium"
                size="lg"
              >
                Iniciar Projeto
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
};

export default Portfolio;
