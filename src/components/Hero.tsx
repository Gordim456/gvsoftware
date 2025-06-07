
import React from 'react';
import { ArrowRight, Code, Server, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link as RouterLink } from 'react-router-dom';
import OptimizedHeroImage from './OptimizedHeroImage';

const Hero = () => {
  return (
    <section className="w-full min-h-screen bg-gv-darker pt-20 pb-12">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center min-h-[80vh]">
            <div className="space-y-6 text-center md:text-left">
              <div className="inline-block bg-indigo-600/20 px-4 py-1 rounded-full mb-4 border border-indigo-500/30">
                <span className="text-indigo-300 text-sm font-medium">Inovação & Tecnologia</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
                Transformando ideias em <span className="gradient-text font-extrabold">realidade digital</span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-lg mx-auto md:mx-0">
                Desenvolvemos soluções digitais personalizadas e inovadoras que impulsionam o crescimento do seu negócio com tecnologia de ponta.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
                <RouterLink to="/contact">
                  <Button className="w-full sm:w-auto px-6 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-medium text-lg">
                    Solicitar Orçamento <ArrowRight className="w-5 h-5" />
                  </Button>
                </RouterLink>
                
                <RouterLink to="/services">
                  <Button variant="outline" className="w-full sm:w-auto px-6 py-4 border-2 border-gray-600 text-white hover:bg-gray-800 rounded-xl font-medium text-lg">
                    Nossos Serviços
                  </Button>
                </RouterLink>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-4">
                <div className="text-center">
                  <h4 className="text-2xl sm:text-3xl font-bold text-green-400">+3</h4>
                  <p className="text-gray-400 text-xs sm:text-sm">Projetos Finalizados</p>
                </div>
                <div className="text-center">
                  <h4 className="text-2xl sm:text-3xl font-bold text-green-400">+3</h4>
                  <p className="text-gray-400 text-xs sm:text-sm">Clientes Satisfeitos</p>
                </div>
                <div className="text-center">
                  <h4 className="text-xl sm:text-2xl md:text-3xl font-bold text-green-400">Primeiro Ano</h4>
                  <p className="text-gray-400 text-xs sm:text-sm">De Experiência</p>
                </div>
                <div className="text-center">
                  <h4 className="text-2xl sm:text-3xl font-bold text-green-400">100%</h4>
                  <p className="text-gray-400 text-xs sm:text-sm">Taxa de Sucesso</p>
                </div>
              </div>
            </div>
            
            <div className="hidden md:block">
              <OptimizedHeroImage />
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <div className="mb-4 bg-indigo-600 p-3 rounded-lg w-fit flex items-center justify-center">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Desenvolvimento Web</h3>
              <p className="text-gray-400">Criamos sites e aplicações web modernas, responsivas e otimizadas utilizando as tecnologias mais avançadas do mercado.</p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <div className="mb-4 bg-indigo-600 p-3 rounded-lg w-fit flex items-center justify-center">
                <Server className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Aplicações Empresariais</h3>
              <p className="text-gray-400">Desenvolvemos soluções sob medida para otimizar processos e aumentar a produtividade.</p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <div className="mb-4 bg-indigo-600 p-3 rounded-lg w-fit flex items-center justify-center">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Presença Digital</h3>
              <p className="text-gray-400">Estratégias completas para destacar sua marca no ambiente digital com soluções personalizadas.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
