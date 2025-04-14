
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

const Home = () => {
  useEffect(() => {
    document.title = 'Início | GV Software - Desenvolvimento de Software';
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      
      {/* Additional centered copyright notice */}
      <motion.div 
        className="bg-gv-dark py-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-bold text-white mb-2">
              © {new Date().getFullYear()} GV Software
            </h2>
            <p className="text-gray-200">Todos os direitos reservados.</p>
          </div>
        </div>
      </motion.div>
      
      <Footer />
    </div>
  );
};

export default Home;
