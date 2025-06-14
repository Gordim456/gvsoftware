
import React from 'react';
import { ArrowRight } from 'lucide-react';
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
          
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-3xl font-bold">Nossa Missão</h3>
            <p className="text-gv-gray">
              Ajudamos empresas a transformar suas ideias em produtos digitais de alta qualidade, 
              entregando soluções personalizadas que impulsionam o crescimento e a inovação.
            </p>
            
            {/* Estatísticas com o GIF implementado */}
            <div className="flex gap-6 mt-6 items-center">
              <div>
                <h4 className="text-3xl font-bold text-green-400">+100</h4>
                <p className="text-gv-gray text-sm">Projetos Entregues</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-green-400">+50</h4>
                <p className="text-gv-gray text-sm">Clientes Satisfeitos</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-green-400">+5</h4>
                <p className="text-gv-gray text-sm">Anos de Experiência</p>
              </div>
              {/* GIF implementado aqui */}
              <div className="ml-4">
                <iframe 
                  src="https://tenor.com/embed/12585593039499783578" 
                  width="80" 
                  height="80" 
                  style={{ border: 'none' }}
                  title="GV GIF"
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
            
            <AboutFeatures />
            
            <div className="mt-8 hover:scale-105 transition-transform duration-300">
              <Link to="/about">
                <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-6 rounded-xl flex items-center gap-3 group font-medium shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 transition-all duration-300">
                  <span>Conheça Nossa História</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
