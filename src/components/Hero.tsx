
import React from 'react';
import { ArrowRight, Code, Server, Globe } from 'lucide-react';

const Hero = () => {
  return (
    <section className="w-full min-h-screen bg-slate-950 pt-16 pb-8">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-8rem)]">
            {/* Left side - Text content */}
            <div className="space-y-6 text-center lg:text-left order-2 lg:order-1">
              <div className="inline-block bg-indigo-600/20 px-3 py-1 sm:px-4 sm:py-2 rounded-full mb-4 border border-indigo-500/30">
                <span className="text-indigo-300 text-xs sm:text-sm font-medium">Inovação & Tecnologia</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-white">
                Transformando ideias em <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent font-extrabold">realidade digital</span>
              </h1>
              
              <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto lg:mx-0">
                Soluções digitais inovadoras e personalizadas para o seu negócio.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 justify-center lg:justify-start">
                <button className="w-full sm:w-auto px-4 sm:px-6 py-3 sm:py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-medium text-sm sm:text-base lg:text-lg transition-colors flex items-center justify-center">
                  Fale Conosco <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                </button>
                
                <button className="w-full sm:w-auto px-4 sm:px-6 py-3 sm:py-4 border-2 border-gray-600 text-white hover:bg-gray-800 rounded-xl font-medium text-sm sm:text-base lg:text-lg transition-colors">
                  Nossos Serviços
                </button>
              </div>
              
              <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-6 sm:mt-8 pt-4 max-w-sm mx-auto lg:mx-0">
                <div className="text-center lg:text-left">
                  <h4 className="text-xl sm:text-2xl font-bold text-green-400">+3</h4>
                  <p className="text-gray-400 text-xs sm:text-sm">Projetos Finalizados</p>
                </div>
                <div className="text-center lg:text-left">
                  <h4 className="text-xl sm:text-2xl font-bold text-green-400">+3</h4>
                  <p className="text-gray-400 text-xs sm:text-sm">Clientes Satisfeitos</p>
                </div>
                <div className="text-center lg:text-left">
                  <h4 className="text-sm sm:text-base lg:text-lg font-bold text-green-400">Primeiro Ano</h4>
                  <p className="text-gray-400 text-xs sm:text-sm">De Experiência</p>
                </div>
                <div className="text-center lg:text-left">
                  <h4 className="text-xl sm:text-2xl font-bold text-green-400">100%</h4>
                  <p className="text-gray-400 text-xs sm:text-sm">Taxa de Sucesso</p>
                </div>
              </div>
            </div>

            {/* Right side - Project showcase */}
            <div className="order-1 lg:order-2">
              <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-4 sm:p-6 border border-gray-700 shadow-2xl max-w-md mx-auto lg:max-w-none">
                <img
                  src="/lovable-uploads/61ef491d-1126-436c-be67-fd525f729623.png"
                  alt="Sistema de Gestão Bebidas ON"
                  className="w-full h-48 sm:h-56 lg:h-64 object-cover rounded-xl mb-4 sm:mb-6"
                />
                <div className="space-y-3 sm:space-y-4">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">Sistema de Gestão de Bebidas</h3>
                  <p className="text-sm sm:text-base text-gray-300">Sistema completo para controle de estoque e vendas de bebidas.</p>
                  <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl py-2 sm:py-3 px-4 transition-colors flex items-center justify-center text-sm sm:text-base">
                    Conheça o sistema <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom cards */}
          <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-gray-800 p-4 sm:p-6 rounded-lg border border-gray-700">
              <div className="mb-4 bg-indigo-600 p-2 sm:p-3 rounded-lg w-fit flex items-center justify-center mx-auto">
                <Code className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white text-center">Desenvolvimento Web</h3>
              <p className="text-sm sm:text-base text-gray-400 text-center">Criamos sites e aplicações web modernas, responsivas e otimizadas.</p>
            </div>
            
            <div className="bg-gray-800 p-4 sm:p-6 rounded-lg border border-gray-700">
              <div className="mb-4 bg-indigo-600 p-2 sm:p-3 rounded-lg w-fit flex items-center justify-center mx-auto">
                <Server className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white text-center">Aplicações Empresariais</h3>
              <p className="text-sm sm:text-base text-gray-400 text-center">Desenvolvemos soluções sob medida para otimizar processos.</p>
            </div>
            
            <div className="bg-gray-800 p-4 sm:p-6 rounded-lg border border-gray-700 sm:col-span-2 lg:col-span-1">
              <div className="mb-4 bg-indigo-600 p-2 sm:p-3 rounded-lg w-fit flex items-center justify-center mx-auto">
                <Globe className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white text-center">Presença Digital</h3>
              <p className="text-sm sm:text-base text-gray-400 text-center">Estratégias completas para destacar sua marca no ambiente digital.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
