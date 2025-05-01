
import { Link as RouterLink } from 'react-router-dom';
import { Link } from 'react-scroll';
import { Mail, Phone, ExternalLink, Shield, FileText, HelpCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
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
    <footer className="relative bg-gv-darker border-t border-gray-800 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob"></div>
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob animation-delay-2000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12"
        >
          <motion.div 
            variants={itemVariants}
            className="col-span-1 md:col-span-5 space-y-4"
          >
            <Link to="hero" smooth={true} duration={500} className="cursor-pointer inline-block">
              <h2 className="text-2xl font-bold text-white mb-2 flex items-center">
                <span className="gradient-text text-3xl mr-1">GV</span> Software
              </h2>
            </Link>
            <p className="text-gv-gray">
              Transformando ideias em soluções digitais inovadoras para o seu negócio.
              Criamos experiências que impulsionam o sucesso dos nossos clientes através
              da tecnologia e design de ponta.
            </p>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="col-span-1 md:col-span-2"
          >
            <h3 className="text-lg font-semibold mb-5 relative">
              <span className="gradient-text">Links</span>
              <span className="block h-1 w-10 bg-indigo-500 mt-2"></span>
            </h3>
            <ul className="space-y-3">
              <li className="transition-transform hover:translate-x-1">
                <Link to="hero" smooth={true} duration={500} className="text-gv-gray hover:text-indigo-400 cursor-pointer flex items-center">
                  Home
                </Link>
              </li>
              <li className="transition-transform hover:translate-x-1">
                <Link to="about" smooth={true} duration={500} className="text-gv-gray hover:text-indigo-400 cursor-pointer flex items-center">
                  Sobre
                </Link>
              </li>
              <li className="transition-transform hover:translate-x-1">
                <Link to="services" smooth={true} duration={500} className="text-gv-gray hover:text-indigo-400 cursor-pointer flex items-center">
                  Serviços
                </Link>
              </li>
              <li className="transition-transform hover:translate-x-1">
                <Link to="portfolio" smooth={true} duration={500} className="text-gv-gray hover:text-indigo-400 cursor-pointer flex items-center">
                  Portfólio
                </Link>
              </li>
              <li className="transition-transform hover:translate-x-1">
                <RouterLink to="/faq" className="text-gv-gray hover:text-indigo-400 cursor-pointer flex items-center">
                  <HelpCircle className="w-4 h-4 mr-1 text-indigo-500" /> FAQ
                </RouterLink>
              </li>
            </ul>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="col-span-1 md:col-span-3"
          >
            <h3 className="text-lg font-semibold mb-5 relative">
              <span className="gradient-text">Serviços</span>
              <span className="block h-1 w-10 bg-indigo-500 mt-2"></span>
            </h3>
            <ul className="space-y-3">
              <li className="transition-transform hover:translate-x-1">
                <a href="#" className="text-gv-gray hover:text-indigo-400 flex items-center">
                  Desenvolvimento Web
                </a>
              </li>
              <li className="transition-transform hover:translate-x-1">
                <a href="#" className="text-gv-gray hover:text-indigo-400 flex items-center">
                  Aplicações Mobile
                </a>
              </li>
              <li className="transition-transform hover:translate-x-1">
                <a href="#" className="text-gv-gray hover:text-indigo-400 flex items-center">
                  UI/UX Design
                </a>
              </li>
              <li className="transition-transform hover:translate-x-1">
                <a href="#" className="text-gv-gray hover:text-indigo-400 flex items-center">
                  Consultoria em TI
                </a>
              </li>
            </ul>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="col-span-1 md:col-span-2"
          >
            <h3 className="text-lg font-semibold mb-5 relative">
              <span className="gradient-text">Contato</span>
              <span className="block h-1 w-10 bg-indigo-500 mt-2"></span>
            </h3>
            <ul className="space-y-4">
              <li>
                <a href="mailto:contato@gvsoftware.tech" className="flex items-start hover:text-indigo-400 text-gv-gray transition-colors">
                  <Mail size={18} className="text-indigo-500 mr-3 mt-1" />
                  <span>contato@gvsoftware.tech</span>
                </a>
              </li>
              <li>
                <a href="tel:+5581999999999" className="flex items-start hover:text-indigo-400 text-gv-gray transition-colors">
                  <Phone size={18} className="text-indigo-500 mr-3 mt-1" />
                  <span>(81) 99999-9999</span>
                </a>
              </li>
            </ul>
          </motion.div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-12 space-y-6 relative"
        >
          {/* Enhanced footer with animated gradient elements */}
          <motion.div 
            className="absolute inset-0 -z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-indigo-500/10 filter blur-3xl"></div>
            <motion.div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-purple-500/10 filter blur-2xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            ></motion.div>
          </motion.div>
          
          {/* Animated gradient line */}
          <div className="h-1 w-32 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mx-auto rounded-full animate-pulse"></div>
          
          {/* Copyright text with enhanced visual effects */}
          <motion.div 
            className="relative"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div
              className="absolute -inset-4 rounded-xl bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 blur-xl -z-10"
              animate={{
                background: [
                  "linear-gradient(90deg, rgba(99,102,241,0.2) 0%, rgba(168,85,247,0.2) 50%, rgba(236,72,153,0.2) 100%)",
                  "linear-gradient(90deg, rgba(236,72,153,0.2) 0%, rgba(99,102,241,0.2) 50%, rgba(168,85,247,0.2) 100%)",
                  "linear-gradient(90deg, rgba(168,85,247,0.2) 0%, rgba(236,72,153,0.2) 50%, rgba(99,102,241,0.2) 100%)"
                ]
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear"
              }}
            ></motion.div>
            <h3 className="text-3xl font-bold relative">
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                © {currentYear} GV Software
              </span>
              <br />
              <span className="text-xl text-gv-gray">
                Todos os direitos reservados.
              </span>
            </h3>
          </motion.div>

          {/* Terms and Privacy Links with Improved Styling */}
          <div className="flex justify-center space-x-8 mt-8">
            <RouterLink to="/terms">
              <motion.div
                className="px-6 py-2 rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 group relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-indigo-600/0 to-purple-600/0 group-hover:from-indigo-600/20 group-hover:to-purple-600/20 transition-all duration-300"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ type: "tween", ease: "easeInOut" }}
                />
                <div className="flex items-center gap-2 relative z-10">
                  <FileText className="text-indigo-400 w-4 h-4 group-hover:text-indigo-300 transition-colors" />
                  <span className="text-indigo-400 group-hover:text-indigo-300 transition-colors">Termos de Uso</span>
                  <ExternalLink className="w-3 h-3 text-indigo-400/70 group-hover:text-indigo-300/70 transition-colors" />
                </div>
              </motion.div>
            </RouterLink>

            <RouterLink to="/privacy">
              <motion.div
                className="px-6 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 group relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-purple-600/0 to-pink-600/0 group-hover:from-purple-600/20 group-hover:to-pink-600/20 transition-all duration-300"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ type: "tween", ease: "easeInOut" }}
                />
                <div className="flex items-center gap-2 relative z-10">
                  <Shield className="text-purple-400 w-4 h-4 group-hover:text-purple-300 transition-colors" />
                  <span className="text-purple-400 group-hover:text-purple-300 transition-colors">Política de Privacidade</span>
                  <ExternalLink className="w-3 h-3 text-purple-400/70 group-hover:text-purple-300/70 transition-colors" />
                </div>
              </motion.div>
            </RouterLink>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
