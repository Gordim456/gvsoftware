
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Smartphone, Globe, Database, Shield, Zap, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SocialIcons from '../components/SocialIcons';
import ChatBot from '../components/chat/ChatBot';

const Services = () => {
  React.useEffect(() => {
    document.title = 'Serviços | GV Software - Soluções em Desenvolvimento';
  }, []);

  const services = [
    {
      icon: <Code />,
      title: 'Desenvolvimento Web',
      description: 'Aplicações web modernas e responsivas usando as mais recentes tecnologias.',
      features: ['React & Next.js', 'TypeScript', 'Tailwind CSS', 'APIs RESTful'],
      price: 'A partir de R$ 2.500',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Smartphone />,
      title: 'Apps Mobile',
      description: 'Aplicativos nativos e híbridos para iOS e Android.',
      features: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
      price: 'A partir de R$ 3.500',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Database />,
      title: 'Backend & APIs',
      description: 'Sistemas robustos e escaláveis para suportar suas aplicações.',
      features: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB'],
      price: 'A partir de R$ 2.000',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Globe />,
      title: 'E-commerce',
      description: 'Lojas virtuais completas com sistemas de pagamento integrados.',
      features: ['Shopify', 'WooCommerce', 'Stripe', 'PayPal'],
      price: 'A partir de R$ 4.000',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: <Shield />,
      title: 'Segurança',
      description: 'Implementação de medidas de segurança avançadas.',
      features: ['SSL', 'Autenticação', 'Criptografia', 'Firewall'],
      price: 'A partir de R$ 1.500',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: <Zap />,
      title: 'Performance',
      description: 'Otimização para máxima velocidade e eficiência.',
      features: ['CDN', 'Cache', 'Minificação', 'Compressão'],
      price: 'A partir de R$ 1.200',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Análise e Planejamento',
      description: 'Entendemos suas necessidades e definimos a melhor estratégia para seu projeto.'
    },
    {
      step: '02',
      title: 'Design e Prototipagem',
      description: 'Criamos protótipos interativos para validar a experiência do usuário.'
    },
    {
      step: '03',
      title: 'Desenvolvimento',
      description: 'Codificamos sua solução seguindo as melhores práticas de desenvolvimento.'
    },
    {
      step: '04',
      title: 'Testes e Entrega',
      description: 'Realizamos testes rigorosos antes de entregar seu projeto finalizado.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950"></div>
        
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent">
              Nossos <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">Serviços</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Oferecemos soluções completas em desenvolvimento de software para impulsionar seu negócio digital.
            </p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Link
                to="/contact"
                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                Solicitar Orçamento
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <motion.section 
        className="py-20 bg-slate-950 relative overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-600 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-sm p-8 rounded-xl border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center text-white shadow-lg`}>
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 text-center">{service.title}</h3>
                <p className="text-gray-300 mb-6 text-center leading-relaxed">{service.description}</p>
                
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="text-center border-t border-slate-700 pt-6">
                  <p className="text-2xl font-bold text-indigo-400 mb-4">{service.price}</p>
                  <Link
                    to="/contact"
                    className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Contratar
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Process Section */}
      <motion.section 
        className="py-20 bg-gradient-to-br from-slate-950 via-indigo-950/20 to-purple-950/20 relative"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent">
              Nosso Processo
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Um processo estruturado para garantir o sucesso do seu projeto.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                className="text-center relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed">{step.description}</p>
                
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 transform -translate-x-1/2"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <Footer />
      <SocialIcons />
      <ChatBot />
    </div>
  );
};

export default Services;
