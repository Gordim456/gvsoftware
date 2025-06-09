
import React from 'react';
import { Instagram } from 'lucide-react';
import TikTokIcon from './icons/TikTokIcon';

const SocialIcons = () => {
  return (
    <div className="fixed right-2 sm:right-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-2 sm:gap-3 z-40">
      {/* Instagram Icon */}
      <a 
        href="https://www.instagram.com/gv_software/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="group"
        aria-label="Instagram"
      >
        <div className="bg-gradient-to-tr from-rose-500 via-purple-500 to-yellow-500 p-2 sm:p-3 rounded-full shadow-lg hover:shadow-purple-500/30 transition-all duration-200 hover:scale-110">
          <Instagram className="w-4 h-4 sm:w-5 sm:h-5 text-white" strokeWidth={2.2} />
        </div>
      </a>
      
      {/* TikTok Icon - Coming soon */}
      <div className="relative group cursor-not-allowed">
        {/* Tooltip */}
        <div className="absolute -left-16 sm:-left-20 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-2 sm:px-3 py-1 sm:py-2 rounded-lg text-xs sm:text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap z-50">
          Em breve!
          <div className="absolute top-1/2 right-0 transform translate-x-1 -translate-y-1/2 w-0 h-0 border-l-4 border-l-gray-900 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
        </div>
        
        <div className="bg-gradient-to-r from-gray-700 to-gray-800 p-2 sm:p-3 rounded-full shadow-lg opacity-50">
          <TikTokIcon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" strokeWidth={2.2} />
        </div>
      </div>
    </div>
  );
};

export default SocialIcons;
