
import { ArrowRight, Code, Server, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BackgroundGradient } from './BackgroundGradient';
import { HeroSlider } from './HeroSlider';

const Hero = () => {
  // Animações simplificadas para melhor desempenho
  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    opacity: [0.7, 1, 0.7],
    transition: {
      duration: 3.5,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <BackgroundGradient>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div className="inline-block bg-indigo-600/20 px-4 py-1 rounded-full mb-6 border border-indigo-500/30">
                <span className="text-indigo-300 text-sm font-medium">Inovação & Tecnologia</span>
              </motion.div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                Transformando ideias em <span className="gradient-text font-extrabold">realidade digital</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gv-gray max-w-lg">
                Soluções digitais inovadoras e personalizadas para o seu negócio.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <RouterLink to="/contact">
                  <Button className="px-8 py-6 bg-gv-primary hover:bg-indigo-600 text-white rounded-xl font-medium text-lg flex items-center gap-3 transform hover:scale-105 transition-all duration-300">
                    Fale Conosco <ArrowRight className="w-5 h-5" />
                  </Button>
                </RouterLink>
                
                <RouterLink to="/services">
                  <Button variant="outline" className="px-8 py-6 border-2 border-gv-gray text-white hover:bg-gray-800 rounded-xl font-medium text-lg transform hover:scale-105 transition-all duration-300">
                    Nossos Serviços
                  </Button>
                </RouterLink>
              </div>
              
              <div className="hidden sm:flex gap-8 mt-8">
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
              </div>
            </motion.div>
            
            <motion.div 
              className="hidden md:block relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div 
                className="absolute -top-16 -right-16 w-64 h-64 bg-indigo-600/30 rounded-full filter blur-3xl"
                animate={pulseAnimation}
              />
              <motion.div 
                className="absolute -bottom-8 -left-8 w-48 h-48 bg-purple-600/20 rounded-full filter blur-3xl"
                animate={pulseAnimation}
              />
              <motion.div 
                className="relative z-10"
                animate={floatingAnimation}
              >
                <HeroSlider />
              </motion.div>
            </motion.div>
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gv-dark p-6 rounded-lg border border-gray-800 hover:border-gv-primary transition-all duration-300 group">
              <div className="mb-4 bg-gv-primary bg-opacity-10 p-3 rounded-md w-fit group-hover:bg-indigo-600 transition-all duration-300">
                <Code className="w-6 h-6 text-gv-primary group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-indigo-300 transition-colors duration-300">Desenvolvimento Web</h3>
              <p className="text-gv-gray">Criamos sites e aplicações web modernas utilizando as melhores tecnologias do mercado.</p>
            </div>
            
            <div className="bg-gv-dark p-6 rounded-lg border border-gray-800 hover:border-gv-primary transition-all duration-300 group">
              <div className="mb-4 bg-gv-primary bg-opacity-10 p-3 rounded-md w-fit group-hover:bg-indigo-600 transition-all duration-300">
                <Server className="w-6 h-6 text-gv-primary group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-indigo-300 transition-colors duration-300">Aplicações Empresariais</h3>
              <p className="text-gv-gray">Desenvolvemos soluções sob medida para otimizar processos e aumentar a produtividade.</p>
            </div>
            
            <div className="bg-gv-dark p-6 rounded-lg border border-gray-800 hover:border-gv-primary transition-all duration-300 group">
              <div className="mb-4 bg-gv-primary bg-opacity-10 p-3 rounded-md w-fit group-hover:bg-indigo-600 transition-all duration-300">
                <Globe className="w-6 h-6 text-gv-primary group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-indigo-300 transition-colors duration-300">Presença Digital</h3>
              <p className="text-gv-gray">Estratégias completas para destacar sua marca no ambiente digital com soluções personalizadas.</p>
            </div>
          </div>
        </div>
      </BackgroundGradient>
    </section>
  );
};

export default Hero;
