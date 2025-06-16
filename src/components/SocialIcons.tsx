
import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin, Mail } from 'lucide-react';

const SocialIcons = () => {
  const socialLinks = [
    { icon: <Facebook />, href: '#', label: 'Facebook' },
    { icon: <Instagram />, href: '#', label: 'Instagram' },
    { icon: <Linkedin />, href: '#', label: 'LinkedIn' },
    { icon: <Mail />, href: 'mailto:contato@gvsoftware.tech', label: 'Email' }
  ];

  return (
    <motion.div
      className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40"
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
    >
      <div className="flex flex-col space-y-4">
        {socialLinks.map((link, index) => (
          <motion.a
            key={index}
            href={link.href}
            aria-label={link.label}
            className="w-12 h-12 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 backdrop-blur-sm border border-white/10 rounded-full flex items-center justify-center text-white hover:from-indigo-600/40 hover:to-purple-600/40 hover:border-white/20 transition-all duration-300 group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.2 + index * 0.1 }}
          >
            <div className="w-5 h-5 group-hover:scale-110 transition-transform duration-300">
              {link.icon}
            </div>
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
};

export default SocialIcons;
