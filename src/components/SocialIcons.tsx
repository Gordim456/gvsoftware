
import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Instagram, Linkedin, Facebook } from 'lucide-react';

const SocialIcons = () => {
  const socialLinks = [
    {
      icon: <MessageCircle className="w-6 h-6" />,
      href: "https://wa.me/5517997853416",
      label: "WhatsApp",
      color: "bg-green-500 hover:bg-green-600",
      hoverColor: "hover:shadow-green-500/30"
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      href: "#",
      label: "Instagram",
      color: "bg-gradient-to-tr from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600",
      hoverColor: "hover:shadow-purple-500/30"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      href: "#",
      label: "LinkedIn",
      color: "bg-blue-600 hover:bg-blue-700",
      hoverColor: "hover:shadow-blue-500/30"
    },
    {
      icon: <Facebook className="w-6 h-6" />,
      href: "#",
      label: "Facebook",
      color: "bg-blue-500 hover:bg-blue-600",
      hoverColor: "hover:shadow-blue-500/30"
    }
  ];

  return (
    <motion.div 
      className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 space-y-4"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 1 }}
    >
      {socialLinks.map((social, index) => (
        <motion.a
          key={index}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`
            w-14 h-14 rounded-full ${social.color} ${social.hoverColor}
            flex items-center justify-center text-white shadow-lg
            transition-all duration-300 group
          `}
          whileHover={{ 
            scale: 1.1,
            rotate: [0, -10, 10, 0],
            transition: { duration: 0.3 }
          }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2 + index * 0.1 }}
        >
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            {social.icon}
          </motion.div>
          
          {/* Tooltip */}
          <motion.span 
            className="absolute right-16 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm font-medium
                     opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap
                     shadow-lg"
            initial={{ scale: 0.8 }}
            whileHover={{ scale: 1 }}
          >
            {social.label}
            <span className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-gray-900"></span>
          </motion.span>
        </motion.a>
      ))}
    </motion.div>
  );
};

export default SocialIcons;
