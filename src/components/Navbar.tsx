
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Code } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Início', href: '/' },
    { name: 'Sobre', href: '/about' },
    { name: 'Serviços', href: '/services' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contato', href: '/contact' }
  ];

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed w-full z-50 bg-slate-900/95 backdrop-blur-lg shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center" onClick={closeMenu}>
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-2 rounded-lg mr-3">
              <Code className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-lg sm:text-xl font-bold text-white">
              <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">GV</span> Software
            </h1>
          </Link>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden border-t border-gray-700">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-900/95">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={closeMenu}
                  className="block px-3 py-2 text-base text-gray-300 hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
