
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 border-t border-indigo-800/30 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <motion.div 
            className="col-span-1 md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/" className="flex items-center mb-6">
              <motion.span 
                className="text-3xl font-bold bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                GV Software
              </motion.span>
            </Link>
            <p className="text-gray-300 mb-8 max-w-md leading-relaxed text-lg">
              Transformamos ideias em soluções digitais inovadoras. Especialistas em desenvolvimento de software personalizado para empresas que buscam excelência.
            </p>
            <div className="flex space-x-6">
              {[
                { icon: <Facebook />, href: "#", color: "hover:text-blue-500", bg: "hover:bg-blue-500/20" },
                { icon: <Instagram />, href: "#", color: "hover:text-pink-500", bg: "hover:bg-pink-500/20" },
                { icon: <Linkedin />, href: "#", color: "hover:text-blue-400", bg: "hover:bg-blue-400/20" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className={`w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 ${social.color} ${social.bg} transition-all duration-300`}
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.1, type: "spring", stiffness: 200 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-white font-bold mb-6 text-xl">Links Rápidos</h3>
            <ul className="space-y-4">
              {[
                { name: 'Início', path: '/' },
                { name: 'Sobre', path: '/about' },
                { name: 'Serviços', path: '/services' },
                { name: 'Portfólio', path: '/portfolio' },
                { name: 'Contato', path: '/contact' }
              ].map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link 
                    to={link.path} 
                    className="text-gray-300 hover:text-indigo-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-white font-bold mb-6 text-xl">Contato</h3>
            <ul className="space-y-6">
              <li className="flex items-center text-gray-300 group">
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="font-medium">contato.gvsoftware@gmail.com</p>
                </div>
              </li>
              <li className="flex items-center text-gray-300 group">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Telefone</p>
                  <p className="font-medium">(17) 99785-3416</p>
                </div>
              </li>
              <li className="flex items-center text-gray-300 group">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Localização</p>
                  <p className="font-medium">São Paulo, SP</p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>
        
        <motion.div 
          className="border-t border-gradient-to-r from-indigo-800/30 via-purple-800/30 to-pink-800/30 mt-12 pt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.p 
              className="text-gray-400 text-sm flex items-center"
              whileHover={{ scale: 1.05 }}
            >
              © 2025 GV Software. Todos os direitos reservados. 
              <Heart className="w-4 h-4 mx-2 text-red-500 animate-pulse" />
              Feito com amor
            </motion.p>
            <div className="flex space-x-8 mt-4 md:mt-0">
              <Link 
                to="/terms" 
                className="text-gray-400 hover:text-indigo-400 text-sm transition-colors duration-300 relative group"
              >
                Termos de Uso
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link 
                to="/privacy" 
                className="text-gray-400 hover:text-indigo-400 text-sm transition-colors duration-300 relative group"
              >
                Privacidade
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
