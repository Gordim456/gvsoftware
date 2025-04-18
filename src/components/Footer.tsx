
import { Link } from 'react-scroll';
import { Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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
          {/* Animated gradient line */}
          <div className="h-1 w-32 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mx-auto rounded-full animate-pulse"></div>
          
          {/* Glowing effect behind copyright text */}
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 blur-3xl"></div>
          
          {/* Copyright text with gradient and animation */}
          <motion.p 
            className="text-3xl font-bold relative"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              © {currentYear} GV Software
            </span>
            <br />
            <span className="text-xl text-gv-gray">
              Todos os direitos reservados.
            </span>
          </motion.p>

          {/* Terms and Privacy Links with Dialogs */}
          <div className="flex justify-center space-x-8 mt-8">
            <Dialog>
              <DialogTrigger asChild>
                <button className="px-6 py-2 rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 hover:from-indigo-500/20 hover:to-purple-500/20 border border-indigo-500/20 hover:border-indigo-500/40 text-indigo-400 transition-all duration-300 hover:scale-105">
                  Termos de Uso
                </button>
              </DialogTrigger>
              <DialogContent className="bg-gv-darker border-gray-800">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold gradient-text">Termos de Uso</DialogTitle>
                </DialogHeader>
                <div className="text-gv-gray space-y-4">
                  <p>1. Aceitação dos Termos</p>
                  <p>Ao acessar e usar este website, você aceita e concorda em cumprir estes termos e condições de uso.</p>
                  <p>2. Uso do Serviço</p>
                  <p>Nossos serviços devem ser utilizados de acordo com as leis aplicáveis e de forma ética.</p>
                  {/* Add more terms as needed */}
                </div>
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger asChild>
                <button className="px-6 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 hover:from-purple-500/20 hover:to-pink-500/20 border border-purple-500/20 hover:border-purple-500/40 text-purple-400 transition-all duration-300 hover:scale-105">
                  Política de Privacidade
                </button>
              </DialogTrigger>
              <DialogContent className="bg-gv-darker border-gray-800">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold gradient-text">Política de Privacidade</DialogTitle>
                </DialogHeader>
                <div className="text-gv-gray space-y-4">
                  <p>1. Coleta de Dados</p>
                  <p>Coletamos apenas as informações necessárias para fornecer nossos serviços.</p>
                  <p>2. Uso de Informações</p>
                  <p>Suas informações são utilizadas apenas para melhorar nossos serviços e sua experiência.</p>
                  {/* Add more privacy policy content as needed */}
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
