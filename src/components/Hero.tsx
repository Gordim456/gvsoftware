
import React from 'react';
import { ArrowRight, Code, Server, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link as RouterLink } from 'react-router-dom';
import OptimizedHeroImage from './OptimizedHeroImage';

const Hero = () => {
  return (
    <section className="w-full min-h-screen bg-gv-darker pt-20 pb-12">
      <div className="w-full px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-8 items-center min-h-[80vh] text-center">
            <div className="space-y-6 w-full">
              <div className="inline-block bg-indigo-600/20 px-4 py-1 rounded-full mb-4 border border-indigo-500/30">
                <span className="text-indigo-300 text-sm font-medium">Inovação & Tecnologia</span>
              </div>
              
              <h1 className="text-4xl font-bold leading-tight text-white">
                Transformando ideias em <span className="gradient-text font-extrabold">realidade digital</span>
              </h1>
              
              <p className="text-lg text-gray-400 max-w-lg mx-auto">
                Desenvolvemos soluções digitais personalizadas e inovadoras que impulsionam o crescimento do seu negócio com tecnologia de ponta.
              </p>
              
              <div className="flex flex-col gap-4 pt-4 w-full">
                <RouterLink to="/contact" className="w-full">
                  <Button className="w-full px-6 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-medium text-lg">
                    Solicitar Orçamento <ArrowRight className="w-5 h-5" />
                  </Button>
                </RouterLink>
                
                <RouterLink to="/services" className="w-full">
                  <Button variant="outline" className="w-full px-6 py-4 border-2 border-gray-600 text-white hover:bg-gray-800 rounded-xl font-medium text-lg">
                    Nossos Serviços
                  </Button>
                </RouterLink>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-8 pt-4 max-w-md mx-auto">
                <div className="text-center">
                  <h4 className="text-2xl font-bold text-green-400">+3</h4>
                  <p className="text-gray-400 text-sm">Projetos Finalizados</p>
                </div>
                <div className="text-center">
                  <h4 className="text-2xl font-bold text-green-400">+3</h4>
                  <p className="text-gray-400 text-sm">Clientes Satisfeitos</p>
                </div>
                <div className="text-center">
                  <h4 className="text-lg font-bold text-green-400">Primeiro Ano</h4>
                  <p className="text-gray-400 text-sm">De Experiência</p>
                </div>
                <div className="text-center">
                  <h4 className="text-2xl font-bold text-green-400">100%</h4>
                  <p className="text-gray-400 text-sm">Taxa de Sucesso</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <div className="mb-4 bg-indigo-600 p-3 rounded-lg w-fit flex items-center justify-center mx-auto">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white text-center">Desenvolvimento Web</h3>
              <p className="text-gray-400 text-center">Criamos sites e aplicações web modernas, responsivas e otimizadas utilizando as tecnologias mais avançadas do mercado.</p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <div className="mb-4 bg-indigo-600 p-3 rounded-lg w-fit flex items-center justify-center mx-auto">
                <Server className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white text-center">Aplicações Empresariais</h3>
              <p className="text-gray-400 text-center">Desenvolvemos soluções sob medida para otimizar processos e aumentar a produtividade.</p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <div className="mb-4 bg-indigo-600 p-3 rounded-lg w-fit flex items-center justify-center mx-auto">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white text-center">Presença Digital</h3>
              <p className="text-gray-400 text-center">Estratégias completas para destacar sua marca no ambiente digital com soluções personalizadas.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
