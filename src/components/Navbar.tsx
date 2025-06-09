
import React from 'react';
import { Menu, X, Code } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

console.log("🔥 NAVBAR ULTRA CLEAN: Zero external providers");

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  
  const toggleMenu = React.useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Início', href: '#' },
    { name: 'Sobre', href: '#about' },
    { name: 'Serviços', href: '#services' },
    { name: 'Portfólio', href: '#portfolio' },
    { 
      name: 'Contato', 
      href: '#contact',
      isHighlighted: true 
    }
  ];

  return (
    <motion.nav 
      className={`fixed w-full z-50 transition-all duration-500 
        ${scrolled ? 'bg-gv-darker/95 backdrop-blur-lg shadow-lg py-3' : 'bg-transparent py-5'}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="cursor-pointer flex items-center">
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-2 rounded-lg mr-3">
                <Code className="w-6 h-6 text-white" />
              </div>
              <motion.h1 
                className="text-2xl font-bold text-white"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <span className="gradient-text">GV</span> Software
              </motion.h1>
            </a>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative group ${
                    link.isHighlighted 
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-2 rounded-full text-white hover:shadow-lg hover:shadow-indigo-500/20 transform hover:scale-105 transition-all duration-300'
                      : 'relative group'
                  }`}
                >
                  <span className={`${
                    link.isHighlighted
                      ? 'text-white font-medium'
                      : 'text-gray-300 hover:text-white px-3 py-2 text-sm font-medium cursor-pointer transition-colors'
                  }`}>
                    {link.name}
                  </span>
                  {!link.isHighlighted && (
                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                  )}
                </a>
              ))}
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-400 hover:text-white focus:outline-none p-2.5 rounded-lg bg-gray-800/60 backdrop-blur-sm hover:bg-gray-700/80 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="md:hidden bg-gradient-to-b from-gv-darker/98 to-gv-darker backdrop-blur-lg"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="px-4 py-5 space-y-3"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
            >
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <a
                    href={link.href}
                    className="block px-4 py-3 rounded-lg transition-all text-gray-300 hover:bg-gray-800/50 hover:text-white"
                  >
                    {link.name}
                  </a>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
