
import React from 'react';
import { ArrowRight, Code, Server, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link as RouterLink } from 'react-router-dom';
import { BackgroundGradient } from './BackgroundGradient';
import { HeroSlider } from './HeroSlider';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <BackgroundGradient>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block bg-indigo-600/20 px-4 py-1 rounded-full mb-4 border border-indigo-500/30">
                <span className="text-indigo-300 text-sm font-medium">Inovação & Tecnologia</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                Transformando ideias em <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent font-extrabold">realidade digital</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-300 max-w-lg">
                Soluções digitais inovadoras e personalizadas para o seu negócio.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <RouterLink to="/contact">
                  <Button className="px-6 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-medium text-lg flex items-center gap-3 transition-colors">
                    Fale Conosco <ArrowRight className="w-5 h-5" />
                  </Button>
                </RouterLink>
                
                <RouterLink to="/services">
                  <Button variant="outline" className="px-6 py-4 border-2 border-gray-300 text-white hover:bg-gray-800 rounded-xl font-medium text-lg transition-colors">
                    Nossos Serviços
                  </Button>
                </RouterLink>
              </div>
              
              <div className="hidden sm:flex gap-6 mt-6">
                <div>
                  <h4 className="text-3xl font-bold text-green-400">+3</h4>
                  <p className="text-gray-300 text-sm">Projetos Entregues</p>
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-green-400">+3</h4>
                  <p className="text-gray-300 text-sm">Clientes Satisfeitos</p>
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-green-400">Primeiro</h4>
                  <p className="text-gray-300 text-sm">Ano no Mercado Digital</p>
                </div>
              </div>
            </div>
            
            <div className="hidden md:block relative">
              <HeroSlider />
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-indigo-600 transition-colors duration-200">
              <div className="mb-4 bg-indigo-600 bg-opacity-10 p-3 rounded-md w-fit">
                <Code className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Desenvolvimento Web</h3>
              <p className="text-gray-300">Criamos sites e aplicações web modernas utilizando as melhores tecnologias do mercado.</p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-indigo-600 transition-colors duration-200">
              <div className="mb-4 bg-indigo-600 bg-opacity-10 p-3 rounded-md w-fit">
                <Server className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Aplicações Empresariais</h3>
              <p className="text-gray-300">Desenvolvemos soluções sob medida para otimizar processos e aumentar a produtividade.</p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-indigo-600 transition-colors duration-200">
              <div className="mb-4 bg-indigo-600 bg-opacity-10 p-3 rounded-md w-fit">
                <Globe className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Presença Digital</h3>
              <p className="text-gray-300">Estratégias completas para destacar sua marca no ambiente digital com soluções personalizadas.</p>
            </div>
          </div>
        </div>
      </BackgroundGradient>
    </section>
  );
};

export default Hero;
