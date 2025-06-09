
import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import SocialIcons from '../components/SocialIcons';

console.log('📄 ABOUT: Component loading...');

const About: React.FC = () => {
  console.log('📄 ABOUT: Component rendering...');
  
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    console.log('📄 ABOUT: useEffect running...');
    try {
      document.title = 'Sobre | GV Software - Nossa História e Missão';
      setIsLoaded(true);
      console.log('✅ ABOUT: useEffect completed successfully');
    } catch (error) {
      console.error('❌ ABOUT: Error in useEffect:', error);
    }
  }, []);

  console.log('📄 ABOUT: isLoaded state:', isLoaded);

  if (!isLoaded) {
    console.log('📄 ABOUT: Showing loading screen...');
    return (
      <div className="flex items-center justify-center h-screen bg-slate-950">
        <div className="w-8 h-8 border-2 border-indigo-400 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  console.log('📄 ABOUT: Rendering main content...');

  try {
    return (
      <div className="min-h-screen flex flex-col bg-slate-950 text-white pt-20">
        {/* Hero Section */}
        <section className="relative py-12 sm:py-16 lg:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950"></div>
          
          <div className="absolute top-0 left-1/4 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-indigo-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mb-6 sm:mb-8 shadow-2xl">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent">
                Sobre a <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">GV Software</span>
              </h1>
              
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
                Somos uma empresa especializada em desenvolvimento de software, criando soluções digitais inovadoras para transformar negócios.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 sm:py-16 bg-slate-950">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {[
                { icon: '💻', label: 'Projetos Finalizados', value: '+3', description: 'Soluções desenvolvidas' },
                { icon: '👥', label: 'Clientes Satisfeitos', value: '+3', description: 'Empresas atendidas' },
                { icon: '🏆', label: 'Experiência', value: 'Primeiro Ano', description: 'De Experiência' },
                { icon: '📈', label: 'Taxa de Sucesso', value: '100%', description: 'Projetos bem-sucedidos' }
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="text-center p-4 sm:p-6 bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-300"
                >
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{stat.icon}</div>
                  <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </h3>
                  <p className="text-white font-semibold mb-1 text-sm sm:text-base">{stat.label}</p>
                  <p className="text-gray-400 text-xs sm:text-sm">{stat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-12 sm:py-16 bg-slate-900/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8">Nossa Missão</h2>
              <p className="text-gray-300 text-lg sm:text-xl leading-relaxed mb-8 sm:mb-12">
                Transformar ideias em soluções digitais de alta qualidade, ajudando empresas a crescer e inovar no mercado digital através de tecnologia de ponta e atendimento personalizado.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                <div className="bg-slate-800/50 p-4 sm:p-6 rounded-xl border border-slate-700">
                  <h3 className="text-xl sm:text-2xl font-bold text-indigo-400 mb-3 sm:mb-4">Visão</h3>
                  <p className="text-gray-300 text-sm sm:text-base">
                    Ser referência em desenvolvimento de software, reconhecida pela qualidade, inovação e excelência no atendimento.
                  </p>
                </div>
                
                <div className="bg-slate-800/50 p-4 sm:p-6 rounded-xl border border-slate-700">
                  <h3 className="text-xl sm:text-2xl font-bold text-purple-400 mb-3 sm:mb-4">Valores</h3>
                  <p className="text-gray-300 text-sm sm:text-base">
                    Qualidade, transparência, inovação e compromisso com o sucesso dos nossos clientes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <SocialIcons />
        <Footer />
      </div>
    );
  } catch (error) {
    console.error('❌ ABOUT: Error rendering component:', error);
    return (
      <div className="min-h-screen bg-red-900 text-white p-8">
        <h1>Erro na página About</h1>
        <pre>{error instanceof Error ? error.message : 'Erro desconhecido'}</pre>
      </div>
    );
  }
};

console.log('✅ ABOUT: Component defined successfully');
export default About;
