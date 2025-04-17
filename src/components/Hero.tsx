
import { ArrowRight, Code, Server, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BackgroundGradient } from './BackgroundGradient';
import { HeroSlider } from './HeroSlider';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 2.5,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    opacity: [0.7, 1, 0.7],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <BackgroundGradient />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div 
                className="inline-block bg-indigo-600/20 px-4 py-1 rounded-full mb-6 border border-indigo-500/30"
                animate={{
                  boxShadow: ["0 0 0 rgba(99, 102, 241, 0.3)", "0 0 20px rgba(99, 102, 241, 0.6)", "0 0 0 rgba(99, 102, 241, 0.3)"]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="text-indigo-300 text-sm font-medium">Inovação & Tecnologia</span>
              </motion.div>
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Transformando ideias em <span className="gradient-text font-extrabold">realidade digital</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gv-gray max-w-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Soluções digitais inovadoras e personalizadas para o seu negócio.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
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
            </motion.div>
            
            <motion.div
              className="hidden sm:flex gap-8 mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
                <h4 className="text-4xl font-bold gradient-text">+100</h4>
                <p className="text-gv-gray">Projetos Entregues</p>
              </motion.div>
              <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
                <h4 className="text-4xl font-bold gradient-text">+50</h4>
                <p className="text-gv-gray">Clientes Satisfeitos</p>
              </motion.div>
              <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
                <h4 className="text-4xl font-bold gradient-text">+5</h4>
                <p className="text-gv-gray">Anos de Experiência</p>
              </motion.div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="hidden md:block relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div 
              className="absolute -top-16 -right-16 w-64 h-64 bg-indigo-600/30 rounded-full filter blur-3xl"
              animate={pulseAnimation}
            />
            <motion.div 
              className="absolute -bottom-8 -left-8 w-48 h-48 bg-purple-600/20 rounded-full filter blur-3xl"
              animate={{
                ...pulseAnimation,
                transition: { ...pulseAnimation.transition, delay: 1 }
              }}
            />
            <motion.div 
              className="relative z-10"
              animate={floatingAnimation}
            >
              <HeroSlider />
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <motion.div 
            variants={itemVariants}
            className="bg-gv-dark p-6 rounded-lg border border-gray-800 hover:border-gv-primary transition-all duration-300 group"
            whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(79, 70, 229, 0.25)" }}
          >
            <div className="mb-4 bg-gv-primary bg-opacity-10 p-3 rounded-md w-fit group-hover:bg-indigo-600 transition-all duration-300">
              <Code className="w-6 h-6 text-gv-primary group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-indigo-300 transition-colors duration-300">Desenvolvimento Web</h3>
            <p className="text-gv-gray">Criamos sites e aplicações web modernas utilizando as melhores tecnologias do mercado.</p>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="bg-gv-dark p-6 rounded-lg border border-gray-800 hover:border-gv-primary transition-all duration-300 group"
            whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(79, 70, 229, 0.25)" }}
          >
            <div className="mb-4 bg-gv-primary bg-opacity-10 p-3 rounded-md w-fit group-hover:bg-indigo-600 transition-all duration-300">
              <Server className="w-6 h-6 text-gv-primary group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-indigo-300 transition-colors duration-300">Aplicações Empresariais</h3>
            <p className="text-gv-gray">Desenvolvemos soluções sob medida para otimizar processos e aumentar a produtividade.</p>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="bg-gv-dark p-6 rounded-lg border border-gray-800 hover:border-gv-primary transition-all duration-300 group"
            whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(79, 70, 229, 0.25)" }}
          >
            <div className="mb-4 bg-gv-primary bg-opacity-10 p-3 rounded-md w-fit group-hover:bg-indigo-600 transition-all duration-300">
              <Globe className="w-6 h-6 text-gv-primary group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-indigo-300 transition-colors duration-300">Presença Digital</h3>
            <p className="text-gv-gray">Estratégias completas para destacar sua marca no ambiente digital com soluções personalizadas.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
