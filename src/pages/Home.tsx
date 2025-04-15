
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import { Instagram, BrandTiktok } from 'lucide-react';

const Home = () => {
  useEffect(() => {
    document.title = 'Início | GV Software - Desenvolvimento de Software';
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Fixed Social Icons */}
      <motion.div 
        className="fixed right-6 top-1/2 transform -translate-y-1/2 flex flex-col gap-4 z-50"
        animate={{
          y: [-10, 0, -10],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
           className="bg-gv-primary p-3 rounded-full hover:scale-110 transition-transform">
          <Instagram className="w-6 h-6 text-white" />
        </a>
        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer"
           className="bg-gv-primary p-3 rounded-full hover:scale-110 transition-transform">
          <BrandTiktok className="w-6 h-6 text-white" />
        </a>
      </motion.div>

      <Hero />
      <Footer />
    </div>
  );
};

export default Home;
