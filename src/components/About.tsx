
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import AboutHeader from './about/AboutHeader';
import AboutFeatures from './about/AboutFeatures';
import AboutImage from './about/AboutImage';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gv-darker relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AboutHeader />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <AboutImage />
          
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold">Nossa Missão</h3>
            <p className="text-gv-gray">
              Ajudamos empresas a transformar suas ideias em produtos digitais de alta qualidade, 
              entregando soluções personalizadas que impulsionam o crescimento e a inovação.
            </p>
            
            {/* Estatísticas como na imagem 2 */}
            <div className="flex gap-6 mt-6">
              <div>
                <h4 className="text-3xl font-bold text-green-400">+1</h4>
                <p className="text-gv-gray text-sm">Projetos Finalizados</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-green-400">+1</h4>
                <p className="text-gv-gray text-sm">Clientes Satisfeitos</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-green-400">Primeiro Ano</h4>
                <p className="text-gv-gray text-sm">Anos de Experiência</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-green-400">100%</h4>
                <p className="text-gv-gray text-sm">Taxa de Sucesso</p>
              </div>
            </div>
            
            <AboutFeatures />
            
            <motion.div 
              className="mt-8"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Link to="/about">
                <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-6 rounded-xl flex items-center gap-3 group font-medium shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 transition-all duration-300">
                  <span>Conheça Nossa História</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
