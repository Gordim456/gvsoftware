
import React from 'react';
import { Instagram } from 'lucide-react';
import TikTokIcon from './icons/TikTokIcon';

const SocialIcons = () => {
  return (
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-3 z-50">
      {/* Instagram Icon */}
      <a 
        href="https://www.instagram.com/gv_software/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="relative group hover:scale-110 transition-transform duration-300"
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-rose-500 via-purple-500 to-yellow-500 opacity-0 group-hover:opacity-100 blur-sm -z-10 transition-all duration-600" 
             style={{ transform: 'scale(1.2)' }}></div>
        
        <div className="bg-gradient-to-tr from-rose-500 via-purple-500 to-yellow-500 p-3 rounded-full shadow-lg hover:shadow-purple-500/30 transition-all duration-200 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-full"></div>
          <Instagram className="w-5 h-5 text-white relative z-10" strokeWidth={2.2} />
        </div>
      </a>
      
      {/* TikTok Icon - Sem link, apenas tooltip */}
      <div className="relative group cursor-not-allowed hover:scale-110 transition-transform duration-300">
        {/* Tooltip */}
        <div className="absolute -left-20 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap z-50">
          Em breve!
          <div className="absolute top-1/2 right-0 transform translate-x-1 -translate-y-1/2 w-0 h-0 border-l-4 border-l-gray-900 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
        </div>
        
        <div className="bg-gradient-to-r from-gray-700 to-gray-800 p-3 rounded-full shadow-lg opacity-50 relative overflow-hidden">
          <TikTokIcon className="w-5 h-5 text-gray-400 relative z-10" strokeWidth={2.2} />
        </div>
      </div>
    </div>
  );
};

export default React.memo(SocialIcons);
