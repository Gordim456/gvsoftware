import React, { useEffect, useState } from 'react';
import { Rocket, Code, Brush, CheckCircle, LayoutDashboard, Users, ShieldCheck, TrendingUp } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SocialIcons from '@/components/SocialIcons';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    document.title = 'Serviços | GV Software - Soluções Digitais Completas';
    setIsVisible(true);
    
    // SEO otimizado
    const meta = document.createElement('meta');
    meta.name = 'description';
    meta.content = 'Serviços completos de desenvolvimento: Web, Mobile, UI/UX, SEO e Consultoria em TI. Soluções digitais modernas para seu negócio.';
    if (!document.querySelector('meta[name="description"]')) {
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950">
      <Navbar />
      <SocialIcons />

      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-10 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mb-8 shadow-2xl">
              <Rocket className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent">
              Nossos <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">Serviços</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Oferecemos soluções completas para impulsionar o seu negócio no mundo digital.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/50 backdrop-blur-sm p-8 rounded-3xl border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-300 shadow-2xl hover:shadow-indigo-500/10">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Desenvolvimento Web</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Criação de websites personalizados, desde landing pages até plataformas complexas,
                com foco em performance e experiência do usuário.
              </p>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-indigo-400" />
                  Sites responsivos e otimizados
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-indigo-400" />
                  E-commerce e lojas virtuais
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-indigo-400" />
                  Sistemas web sob medida
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/50 backdrop-blur-sm p-8 rounded-3xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 shadow-2xl hover:shadow-purple-500/10">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Brush className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">UI/UX Design</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Design de interfaces intuitivas e agradáveis, focadas na melhor experiência do usuário
                e alinhadas com a identidade visual da sua marca.
              </p>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-400" />
                  Design de interface (UI)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-400" />
                  Experiência do usuário (UX)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-400" />
                  Protótipos interativos
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/50 backdrop-blur-sm p-8 rounded-3xl border border-slate-700/50 hover:border-pink-500/50 transition-all duration-300 shadow-2xl hover:shadow-pink-500/10">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <LayoutDashboard className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Aplicações Mobile</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Desenvolvimento de aplicativos móveis nativos (iOS e Android) e híbridos,
                com foco em performance, segurança e escalabilidade.
              </p>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-pink-400" />
                  Apps nativos (Swift, Kotlin)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-pink-400" />
                  Apps híbridos (React Native)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-pink-400" />
                  Testes e publicação nas lojas
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/50 backdrop-blur-sm p-8 rounded-3xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 shadow-2xl hover:shadow-blue-500/10">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Otimização SEO</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Otimização de sites para melhorar o posicionamento nos resultados de busca do Google,
                aumentando o tráfego orgânico e a visibilidade da sua marca.
              </p>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  Análise de palavras-chave
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  Otimização on-page e off-page
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  Relatórios e acompanhamento
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/50 backdrop-blur-sm p-8 rounded-3xl border border-slate-700/50 hover:border-green-500/50 transition-all duration-300 shadow-2xl hover:shadow-green-500/10">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <ShieldCheck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Consultoria em TI</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Consultoria especializada para identificar as melhores soluções de tecnologia
                para o seu negócio, desde a escolha de softwares até a implementação de infraestrutura.
              </p>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Planejamento estratégico de TI
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Análise de sistemas e processos
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Implementação de soluções
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/50 backdrop-blur-sm p-8 rounded-3xl border border-slate-700/50 hover:border-yellow-500/50 transition-all duration-300 shadow-2xl hover:shadow-yellow-500/10">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Suporte e Manutenção</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Serviços de suporte técnico e manutenção para garantir o bom funcionamento
                dos seus sistemas e aplicações, com atendimento rápido e eficiente.
              </p>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-yellow-400" />
                  Suporte técnico online
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-yellow-400" />
                  Manutenção preventiva e corretiva
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-yellow-400" />
                  Atualizações e upgrades
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-slate-950 via-purple-950 to-indigo-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Por que <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">Escolher</span> a GV Software?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Nossos diferenciais que garantem o sucesso do seu projeto.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/50 backdrop-blur-sm p-8 rounded-3xl border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-300 shadow-2xl text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Expertise</h3>
              <p className="text-gray-300 leading-relaxed">
                Equipe altamente qualificada e experiente em diversas tecnologias e metodologias.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/50 backdrop-blur-sm p-8 rounded-3xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 shadow-2xl text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Inovação</h3>
              <p className="text-gray-300 leading-relaxed">
                Buscamos constantemente as últimas tendências e tecnologias para oferecer soluções inovadoras.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/50 backdrop-blur-sm p-8 rounded-3xl border border-slate-700/50 hover:border-pink-500/50 transition-all duration-300 shadow-2xl text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Foco no Cliente</h3>
              <p className="text-gray-300 leading-relaxed">
                Priorizamos a satisfação do cliente, oferecendo atendimento personalizado e soluções sob medida.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
