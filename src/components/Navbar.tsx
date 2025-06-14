
import React, { useState, useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
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
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 
        ${scrolled ? 'bg-gv-darker/95 backdrop-blur-lg shadow-lg py-3' : 'bg-transparent py-5'}`}
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
              <h1 className="text-2xl font-bold text-white hover:scale-105 transition-transform">
                GV Software
              </h1>
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

      {isOpen && (
        <div className="md:hidden bg-gradient-to-b from-gv-darker/98 to-gv-darker backdrop-blur-lg">
          <div className="px-4 py-5 space-y-3">
            {navLinks.map((link, index) => (
              <div key={link.name}>
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
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
