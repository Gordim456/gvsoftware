import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    document.title = 'Sobre | GV Software';
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div className="min-h-screen bg-gv-dark">
      <Navbar />
      
      <section className="relative py-20 pt-28 overflow-hidden">
        {/* Hero Section */}
        <div className="absolute inset-0 z-0">
          <div className="relative h-[500px] w-full">
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-black/90 to-indigo-900/70 z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            />
            <motion.img
              src="https://images.unsplash.com/photo-1483058712412-4245e9b90334"
              alt="About Hero"
              className="w-full h-full object-cover"
              initial={{ scale: 1 }}
              animate={{ scale: 1.1 }}
              transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
            />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          <motion.div variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { 
              opacity: 1, 
              y: 0,
              transition: { duration: 0.6 }
            }
          }} className="flex justify-center mb-4">
            <div className="bg-gradient-to-br from-indigo-500/20 to-purple-500/20 p-3 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles w-6 h-6 text-indigo-400"><path d="m12 3-1.912 5.818a2 2 0 0 1-1.275 1.275L3 12l5.818 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.818a2 2 0 0 1 1.275-1.275L21 12l-5.818-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
            </div>
          </motion.div>
          <motion.h2 
            variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { 
              opacity: 1, 
              y: 0,
              transition: { duration: 0.6 }
            }
          }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Sobre a <span className="gradient-text">GV Software</span>
          </motion.h2>
          <motion.p 
            variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { 
              opacity: 1, 
              y: 0,
              transition: { duration: 0.6 }
            }
          }}
            className="text-gv-gray max-w-2xl mx-auto text-lg"
          >
            Somos uma empresa de desenvolvimento de software focada em criar soluções personalizadas que transformam ideias em realidade digital.
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute -top-10 -left-10 w-full h-full bg-gradient-to-br from-indigo-500/30 to-purple-600/30 rounded-2xl blur-2xl"></div>
            
            <motion.div 
              className="relative z-10 rounded-2xl overflow-hidden shadow-2xl shadow-indigo-500/20"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <img 
                src="/about-image.svg" 
                alt="GV Software Team" 
                className="w-full h-auto max-h-96 object-cover rounded-2xl" 
              />
              <div className="absolute inset-0 bg-gradient-to-tl from-indigo-900/30 to-transparent"></div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold">Nossa Missão</h3>
            <p className="text-gv-gray">
              Ajudamos empresas a transformar suas ideias em produtos digitais de alta qualidade, 
              entregando soluções personalizadas que impulsionam o crescimento e a inovação.
            </p>
            
            <div className="space-y-4 mt-2">
              <motion.div 
                className="flex items-start gap-4 p-3 rounded-lg hover:bg-white/5 transition-all duration-300"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="bg-gradient-to-br from-indigo-500 to-indigo-700 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-circle w-5 h-5 text-white"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Equipe especializada</h4>
                  <p className="text-gv-gray">Desenvolvedores experientes e especializados em tecnologias modernas</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start gap-4 p-3 rounded-lg hover:bg-white/5 transition-all duration-300"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="bg-gradient-to-br from-indigo-500 to-indigo-700 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-circle w-5 h-5 text-white"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Metodologias ágeis</h4>
                  <p className="text-gv-gray">Desenvolvimento eficiente com resultados consistentes e de qualidade</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start gap-4 p-3 rounded-lg hover:bg-white/5 transition-all duration-300"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="bg-gradient-to-br from-indigo-500 to-indigo-700 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-circle w-5 h-5 text-white"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Foco na qualidade</h4>
                  <p className="text-gv-gray">Código limpo e testado seguindo as melhores práticas de desenvolvimento</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start gap-4 p-3 rounded-lg hover:bg-white/5 transition-all duration-300"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="bg-gradient-to-br from-indigo-500 to-indigo-700 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-circle w-5 h-5 text-white"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Comunicação transparente</h4>
                  <p className="text-gv-gray">Acompanhamento contínuo e suporte dedicado durante todo o projeto</p>
                </div>
              </motion.div>
            </div>
            
            <motion.div 
              className="mt-8"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Link to="/about">
                <button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-6 rounded-xl flex items-center gap-3 group font-medium shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 transition-all duration-300">
                  <span>Conheça Nossa História</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right w-5 h-5 transition-transform group-hover:translate-x-1"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

        {/* Team Section */}
        <div className="relative z-10 mt-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="relative rounded-xl overflow-hidden"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                alt="Development Team"
                className="w-full h-[300px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-bold">Desenvolvimento</h3>
                <p className="text-sm text-gray-300">Equipe Técnica</p>
              </div>
            </motion.div>

            <motion.div 
              className="relative rounded-xl overflow-hidden"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                alt="Design Team"
                className="w-full h-[300px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-bold">Design</h3>
                <p className="text-sm text-gray-300">Equipe Criativa</p>
              </div>
            </motion.div>

            <motion.div 
              className="relative rounded-xl overflow-hidden"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
                alt="Innovation Team"
                className="w-full h-[300px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-bold">Inovação</h3>
                <p className="text-sm text-gray-300">Equipe de P&D</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
};

export default About;
