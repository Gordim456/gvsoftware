
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound: React.FC = () => {
  useEffect(() => {
    document.title = '404 - Página não encontrada | GV Software';
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="text-8xl md:text-9xl font-bold mb-8 bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
          >
            404
          </motion.div>
          
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            Página não encontrada
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Ops! A página que você está procurando não existe ou foi movida.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40"
            >
              <Home className="w-5 h-5" />
              Ir para Home
            </Link>
            
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-3 bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 border border-slate-600"
            >
              <ArrowLeft className="w-5 h-5" />
              Voltar
            </button>
          </div>
          
          <div className="mt-12 text-gray-400 text-sm">
            <p>Se você acredita que isso é um erro, entre em contato conosco.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
