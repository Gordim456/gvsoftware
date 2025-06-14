
import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950">
      <nav className="fixed w-full z-50 bg-slate-900/95 backdrop-blur-lg py-4">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-12 h-12 mr-3 rounded-lg overflow-hidden">
              <img 
                src="https://s12.gifyu.com/images/bxD2v.gif" 
                alt="GV Software Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-2xl font-bold text-white">GV Software</h1>
          </div>
        </div>
      </nav>
      
      <main className="pt-20">
        <section className="min-h-screen flex items-center justify-center px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              Transformando ideias em <span className="text-indigo-400">realidade digital</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Soluções digitais inovadoras e personalizadas para o seu negócio.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-medium text-lg transition-colors">
                Fale Conosco
              </button>
              
              <button className="px-8 py-4 border-2 border-gray-400 text-white hover:bg-gray-800 rounded-xl font-medium text-lg transition-colors">
                Nossos Serviços
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
              <div className="bg-slate-800/50 p-6 rounded-lg border border-gray-700">
                <h3 className="text-xl font-semibold mb-2 text-white">Desenvolvimento Web</h3>
                <p className="text-gray-300">Criamos sites e aplicações web modernas.</p>
              </div>
              
              <div className="bg-slate-800/50 p-6 rounded-lg border border-gray-700">
                <h3 className="text-xl font-semibold mb-2 text-white">Aplicações Empresariais</h3>
                <p className="text-gray-300">Soluções sob medida para seu negócio.</p>
              </div>
              
              <div className="bg-slate-800/50 p-6 rounded-lg border border-gray-700">
                <h3 className="text-xl font-semibold mb-2 text-white">Presença Digital</h3>
                <p className="text-gray-300">Estratégias completas para o digital.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
