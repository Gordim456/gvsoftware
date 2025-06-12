
import { useState, useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
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

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Início', href: '/' },
    { name: 'Sobre', href: '/about' },
    { name: 'Serviços', href: '/services' },
    { name: 'Portfólio', href: '/portfolio' },
    { 
      name: 'Contato', 
      href: '/contact',
      isHighlighted: true 
    }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.nav 
      className={`fixed w-full z-50 transition-all duration-500 
        ${scrolled ? 'bg-gv-darker/95 backdrop-blur-lg shadow-lg py-3' : 'bg-transparent py-5'}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <RouterLink to="/" className="cursor-pointer flex items-center">
              <div className="w-12 h-12 mr-3 rounded-lg overflow-hidden">
                <img 
                  src="https://s12.gifyu.com/images/bxD2v.gif" 
                  alt="GV Software Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <motion.h1 
                className="text-2xl font-bold text-white"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                GV Software
              </motion.h1>
            </RouterLink>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navLinks.map((link) => (
                <RouterLink
                  key={link.name}
                  to={link.href}
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
                    <span className={`absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 transform ${isActive(link.href) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'} transition-transform origin-left`}></span>
                  )}
                </RouterLink>
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
                  <RouterLink
                    to={link.href}
                    className={`block px-4 py-3 rounded-lg transition-all ${
                      isActive(link.href) 
                        ? 'bg-indigo-600/20 text-indigo-400 font-medium'
                        : 'text-gray-300 hover:bg-gray-800/50 hover:text-white'
                    }`}
                  >
                    {link.name}
                  </RouterLink>
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
