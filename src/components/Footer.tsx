
import { Link } from 'react-scroll';
import { Mail, MapPin, Phone, Facebook, Instagram, Linkedin, Twitter, ChevronRight } from 'lucide-react';
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
          {/* Logo & About */}
          <motion.div 
            variants={itemVariants}
            className="col-span-1 md:col-span-4 space-y-4"
          >
            <Link to="hero" smooth={true} duration={500} className="cursor-pointer inline-block">
              <h2 className="text-2xl font-bold text-white mb-2 flex items-center">
                <span className="gradient-text text-3xl mr-1">GV</span> Software
              </h2>
            </Link>
            <p className="text-gv-gray">
              Transformando ideias em soluções digitais inovadoras para o seu negócio.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-6">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-indigo-600 flex items-center justify-center transition-colors duration-300">
                <Facebook size={18} className="text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-indigo-600 flex items-center justify-center transition-colors duration-300">
                <Instagram size={18} className="text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-indigo-600 flex items-center justify-center transition-colors duration-300">
                <Linkedin size={18} className="text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-indigo-600 flex items-center justify-center transition-colors duration-300">
                <Twitter size={18} className="text-white" />
              </a>
            </div>
          </motion.div>
          
          {/* Quick Links */}
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
                  <ChevronRight size={16} className="mr-1 text-indigo-500" /> Home
                </Link>
              </li>
              <li className="transition-transform hover:translate-x-1">
                <Link to="about" smooth={true} duration={500} className="text-gv-gray hover:text-indigo-400 cursor-pointer flex items-center">
                  <ChevronRight size={16} className="mr-1 text-indigo-500" /> Sobre
                </Link>
              </li>
              <li className="transition-transform hover:translate-x-1">
                <Link to="services" smooth={true} duration={500} className="text-gv-gray hover:text-indigo-400 cursor-pointer flex items-center">
                  <ChevronRight size={16} className="mr-1 text-indigo-500" /> Serviços
                </Link>
              </li>
              <li className="transition-transform hover:translate-x-1">
                <Link to="portfolio" smooth={true} duration={500} className="text-gv-gray hover:text-indigo-400 cursor-pointer flex items-center">
                  <ChevronRight size={16} className="mr-1 text-indigo-500" /> Portfólio
                </Link>
              </li>
            </ul>
          </motion.div>
          
          {/* Services */}
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
                  <ChevronRight size={16} className="mr-1 text-indigo-500" /> Desenvolvimento Web
                </a>
              </li>
              <li className="transition-transform hover:translate-x-1">
                <a href="#" className="text-gv-gray hover:text-indigo-400 flex items-center">
                  <ChevronRight size={16} className="mr-1 text-indigo-500" /> Aplicações Mobile
                </a>
              </li>
              <li className="transition-transform hover:translate-x-1">
                <a href="#" className="text-gv-gray hover:text-indigo-400 flex items-center">
                  <ChevronRight size={16} className="mr-1 text-indigo-500" /> UI/UX Design
                </a>
              </li>
              <li className="transition-transform hover:translate-x-1">
                <a href="#" className="text-gv-gray hover:text-indigo-400 flex items-center">
                  <ChevronRight size={16} className="mr-1 text-indigo-500" /> Consultoria em TI
                </a>
              </li>
            </ul>
          </motion.div>
          
          {/* Contact */}
          <motion.div 
            variants={itemVariants}
            className="col-span-1 md:col-span-3"
          >
            <h3 className="text-lg font-semibold mb-5 relative">
              <span className="gradient-text">Contato</span>
              <span className="block h-1 w-10 bg-indigo-500 mt-2"></span>
            </h3>
            <ul className="space-y-4">
              <li>
                <div className="flex items-start">
                  <MapPin size={18} className="text-indigo-500 mr-3 mt-1" />
                  <span className="text-gv-gray">Recife, PE, Brasil</span>
                </div>
              </li>
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
        
        {/* Bottom Bar & Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gv-gray mb-4 md:mb-0">
              © {currentYear} <span className="gradient-text font-medium">GV Software</span>. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gv-gray hover:text-indigo-400 text-sm transition-colors">Termos de Uso</a>
              <a href="#" className="text-gv-gray hover:text-indigo-400 text-sm transition-colors">Política de Privacidade</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
