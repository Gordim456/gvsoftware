import { ArrowRight, Code, Server, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BackgroundGradient } from './BackgroundGradient';

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

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <BackgroundGradient />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Transformando ideias em <span className="gradient-text font-extrabold">realidade digital</span>
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
              <RouterLink to="/contact">
                <Button className="px-6 py-3 bg-gv-primary hover:bg-indigo-600 text-white rounded-md font-medium text-base flex items-center gap-2">
                  Fale Conosco <ArrowRight className="w-4 h-4" />
                </Button>
              </RouterLink>
              
              <RouterLink to="/portfolio">
                <Button variant="outline" className="px-6 py-3 border-gv-gray text-white hover:bg-gray-800 rounded-md font-medium text-base">
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
                className="w-full h-96 bg-gradient-to-br from-indigo-500/30 to-purple-600/30 rounded-lg blur-2xl absolute -top-10 -left-10 z-0"
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
              />
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

        {/* Featured Technologies */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <motion.div 
            variants={itemVariants}
            className="bg-gv-dark p-6 rounded-lg border border-gray-800 hover:border-gv-primary transition-all duration-300 group"
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="mb-4 bg-gv-primary bg-opacity-10 p-3 rounded-md w-fit">
              <Code className="w-6 h-6 text-gv-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Desenvolvimento Web</h3>
            <p className="text-gv-gray">Criamos sites e aplicações web modernas utilizando as melhores tecnologias do mercado.</p>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="bg-gv-dark p-6 rounded-lg border border-gray-800 hover:border-gv-primary transition-all duration-300 group"
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="mb-4 bg-gv-primary bg-opacity-10 p-3 rounded-md w-fit">
              <Server className="w-6 h-6 text-gv-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Aplicações Empresariais</h3>
            <p className="text-gv-gray">Desenvolvemos soluções sob medida para otimizar processos e aumentar a produtividade.</p>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="bg-gv-dark p-6 rounded-lg border border-gray-800 hover:border-gv-primary transition-all duration-300 group"
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="mb-4 bg-gv-primary bg-opacity-10 p-3 rounded-md w-fit">
              <Globe className="w-6 h-6 text-gv-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Presença Digital</h3>
            <p className="text-gv-gray">Estratégias completas para destacar sua marca no ambiente digital com soluções personalizadas.</p>
          </motion.div>
        </motion.div>

        {/* Featured Projects */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Projetos <span className="gradient-text">Destacados</span></h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              className="relative overflow-hidden rounded-lg group"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <img 
                src="/project-1.jpg" 
                alt="E-commerce App" 
                className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end">
                <h3 className="text-xl font-semibold text-white">E-commerce App</h3>
                <p className="text-gray-300 mt-2">Plataforma completa com sistema de pagamentos</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="relative overflow-hidden rounded-lg group"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <img 
                src="/project-3.jpg" 
                alt="App Móvel" 
                className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end">
                <h3 className="text-xl font-semibold text-white">App Móvel</h3>
                <p className="text-gray-300 mt-2">Aplicativo de produtividade com sincronização</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="relative overflow-hidden rounded-lg group"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <img 
                src="/project-6.jpg" 
                alt="Aplicativo de Delivery" 
                className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end">
                <h3 className="text-xl font-semibold text-white">App de Delivery</h3>
                <p className="text-gray-300 mt-2">Sistema de entregas com rastreamento em tempo real</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
