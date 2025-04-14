
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => {
  const isHomePage = window.location.pathname === '/';

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gv-darker pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Desenvolvimento de <span className="gradient-text">Software</span> & Consultoria
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-gv-gray max-w-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Transformamos suas ideias em soluções digitais inovadoras e personalizadas para o seu negócio.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {isHomePage ? (
                <ScrollLink to="contact" smooth={true} duration={500}>
                  <Button className="px-6 py-3 bg-gv-primary hover:bg-indigo-600 text-white rounded-md font-medium text-base flex items-center gap-2">
                    Fale Conosco <ArrowRight className="w-4 h-4" />
                  </Button>
                </ScrollLink>
              ) : (
                <RouterLink to="/contact">
                  <Button className="px-6 py-3 bg-gv-primary hover:bg-indigo-600 text-white rounded-md font-medium text-base flex items-center gap-2">
                    Fale Conosco <ArrowRight className="w-4 h-4" />
                  </Button>
                </RouterLink>
              )}
              
              {isHomePage ? (
                <ScrollLink to="services" smooth={true} duration={500}>
                  <Button variant="outline" className="px-6 py-3 border-gv-gray text-white hover:bg-gray-800 rounded-md font-medium text-base">
                    Nossos Serviços
                  </Button>
                </ScrollLink>
              ) : (
                <RouterLink to="/services">
                  <Button variant="outline" className="px-6 py-3 border-gv-gray text-white hover:bg-gray-800 rounded-md font-medium text-base">
                    Nossos Serviços
                  </Button>
                </RouterLink>
              )}
            </motion.div>
            
            <motion.div
              className="hidden sm:flex gap-8 mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <div>
                <h4 className="text-4xl font-bold gradient-text">+100</h4>
                <p className="text-gv-gray">Projetos Entregues</p>
              </div>
              <div>
                <h4 className="text-4xl font-bold gradient-text">+50</h4>
                <p className="text-gv-gray">Clientes Satisfeitos</p>
              </div>
              <div>
                <h4 className="text-4xl font-bold gradient-text">+5</h4>
                <p className="text-gv-gray">Anos de Experiência</p>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="hidden md:block"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              <motion.div 
                className="w-full h-96 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg opacity-80 blur-2xl absolute -top-10 -left-10 z-0"
                animate={{ 
                  opacity: [0.6, 0.8, 0.6],
                  scale: [1, 1.05, 1],
                  rotate: [0, 1, 0]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              ></motion.div>
              <motion.img 
                src="/hero-image.svg" 
                alt="GV Software Development" 
                className="w-full h-auto object-cover rounded-lg shadow-xl relative z-10" 
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
