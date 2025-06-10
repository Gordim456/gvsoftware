
import * as React from 'react';
import { ArrowRight, Code, Server, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link as RouterLink } from 'react-router-dom';
import { BackgroundGradient } from './BackgroundGradient';
import { HeroSlider } from './HeroSlider';

const Hero = () => {
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
                Transformando ideias em <span className="gradient-text font-extrabold">realidade digital</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gv-gray max-w-lg">
                Soluções digitais inovadoras e personalizadas para o seu negócio.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <RouterLink to="/contact">
                  <Button className="px-6 py-4 bg-gv-primary hover:bg-indigo-600 text-white rounded-xl font-medium text-lg flex items-center gap-3 transition-colors">
                    Fale Conosco <ArrowRight className="w-5 h-5" />
                  </Button>
                </RouterLink>
                
                <RouterLink to="/services">
                  <Button variant="outline" className="px-6 py-4 border-2 border-gv-gray text-white hover:bg-gray-800 rounded-xl font-medium text-lg transition-colors">
                    Nossos Serviços
                  </Button>
                </RouterLink>
              </div>
              
              <div className="hidden sm:flex gap-6 mt-6">
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
            </div>
            
            <div className="hidden md:block relative">
              <HeroSlider />
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gv-dark p-6 rounded-lg border border-gray-800 hover:border-gv-primary transition-colors duration-200">
              <div className="mb-4 bg-gv-primary bg-opacity-10 p-3 rounded-md w-fit">
                <Code className="w-8 h-8 text-gv-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Desenvolvimento Web</h3>
              <p className="text-gv-gray">Criamos sites e aplicações web modernas utilizando as melhores tecnologias do mercado.</p>
            </div>
            
            <div className="bg-gv-dark p-6 rounded-lg border border-gray-800 hover:border-gv-primary transition-colors duration-200">
              <div className="mb-4 bg-gv-primary bg-opacity-10 p-3 rounded-md w-fit">
                <Server className="w-8 h-8 text-gv-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Aplicações Empresariais</h3>
              <p className="text-gv-gray">Desenvolvemos soluções sob medida para otimizar processos e aumentar a produtividade.</p>
            </div>
            
            <div className="bg-gv-dark p-6 rounded-lg border border-gray-800 hover:border-gv-primary transition-colors duration-200">
              <div className="mb-4 bg-gv-primary bg-opacity-10 p-3 rounded-md w-fit">
                <Globe className="w-8 h-8 text-gv-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Presença Digital</h3>
              <p className="text-gv-gray">Estratégias completas para destacar sua marca no ambiente digital com soluções personalizadas.</p>
            </div>
          </div>
        </div>
      </BackgroundGradient>
    </section>
  );
};

export default Hero;
