
import React from 'react';
import { Users, Target, Award, TrendingUp, Code, Globe, Shield, Zap } from 'lucide-react';

const About: React.FC = () => {
  const [isLoaded, setIsLoaded] = React.useState(false);

  React.useEffect(() => {
    document.title = 'Sobre | GV Software - Nossa História e Missão';
    setIsLoaded(true);
    
    // SEO otimizado
    const meta = document.createElement('meta');
    meta.name = 'description';
    meta.content = 'Conheça a GV Software - Empresa especializada em desenvolvimento de software com mais de 5 anos de experiência criando soluções digitais inovadoras.';
    if (!document.querySelector('meta[name="description"]')) {
      document.head.appendChild(meta);
    }
  }, []);

  // Stats atualizados para ser igual à página inicial
  const stats = [
    { icon: <Code />, label: 'Projetos Entregues', value: '+3', description: 'Soluções desenvolvidas' },
    { icon: <Users />, label: 'Clientes Satisfeitos', value: '+3', description: 'Empresas atendidas' },
    { icon: <Award />, label: 'Experiência', value: 'Primeiro', description: 'Ano no Mercado Digital' },
    { icon: <TrendingUp />, label: 'Taxa de Sucesso', value: '100%', description: 'Projetos bem-sucedidos' }
  ];

  // Features modernas
  const features = [
    {
      icon: <Globe />,
      title: 'Soluções Globais',
      description: 'Desenvolvemos aplicações que atendem padrões internacionais de qualidade e performance.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Shield />,
      title: 'Segurança Avançada',
      description: 'Implementamos as melhores práticas de segurança para proteger seus dados e sistemas.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Zap />,
      title: 'Performance Otimizada',
      description: 'Criamos soluções rápidas e eficientes que garantem a melhor experiência do usuário.',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <div className={`min-h-screen flex flex-col transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950"></div>
        
        {/* Elementos de background animados */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-cyan-600/10 to-blue-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mb-8 shadow-2xl animate-pulse">
              <Users className="w-10 h-10 text-white" />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent">
              Sobre a <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">GV Software</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Somos uma empresa especializada em desenvolvimento de software, criando soluções digitais inovadoras para transformar negócios.
            </p>
          </div>

          {/* Grid de Stats - igual à página inicial */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16 animate-fade-in" style={{animationDelay: '0.2s'}}>
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center p-6 bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:-translate-y-1"
                style={{animationDelay: `${0.4 + index * 0.1}s`}}
              >
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold text-green-400 mb-2">
                  {stat.value}
                </h3>
                <p className="text-white font-semibold mb-1">{stat.label}</p>
                <p className="text-gray-400 text-sm">{stat.description}</p>
              </div>
            ))}
          </div>

          {/* Missão e Visão */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/50 backdrop-blur-sm p-8 rounded-3xl border border-slate-700/50 shadow-2xl animate-fade-in" style={{animationDelay: '0.6s'}}>
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Nossa Missão
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Transformar ideias em soluções digitais inovadoras, oferecendo tecnologia de ponta que impulsiona o crescimento e sucesso dos nossos clientes através de software de alta qualidade.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/50 backdrop-blur-sm p-8 rounded-3xl border border-slate-700/50 shadow-2xl animate-fade-in" style={{animationDelay: '0.8s'}}>
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Nossa Visão
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Ser referência no desenvolvimento de software, reconhecida pela excelência técnica, inovação constante e capacidade de criar soluções que realmente fazem a diferença no mercado digital.
              </p>
            </div>
          </div>

          {/* Grid de Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in" style={{animationDelay: '1s'}}>
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-slate-900/80 to-slate-800/50 backdrop-blur-sm p-8 rounded-3xl border border-slate-700/50 shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300 hover:transform hover:scale-105 hover:-translate-y-1"
                style={{animationDelay: `${1.2 + index * 0.1}s`}}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
