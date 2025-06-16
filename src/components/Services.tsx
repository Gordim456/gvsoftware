
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Smartphone, Globe, Database, Shield, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Code />,
      title: 'Desenvolvimento Web',
      description: 'Aplicações web modernas e responsivas usando as mais recentes tecnologias.',
      features: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS']
    },
    {
      icon: <Smartphone />,
      title: 'Apps Mobile',
      description: 'Aplicativos nativos e híbridos para iOS e Android.',
      features: ['React Native', 'Flutter', 'Swift', 'Kotlin']
    },
    {
      icon: <Database />,
      title: 'Backend & APIs',
      description: 'Sistemas robustos e escaláveis para suportar suas aplicações.',
      features: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB']
    },
    {
      icon: <Globe />,
      title: 'E-commerce',
      description: 'Lojas virtuais completas com sistemas de pagamento integrados.',
      features: ['Shopify', 'WooCommerce', 'Stripe', 'PayPal']
    },
    {
      icon: <Shield />,
      title: 'Segurança',
      description: 'Implementação de medidas de segurança avançadas.',
      features: ['SSL', 'Autenticação', 'Criptografia', 'Firewall']
    },
    {
      icon: <Zap />,
      title: 'Performance',
      description: 'Otimização para máxima velocidade e eficiência.',
      features: ['CDN', 'Cache', 'Minificação', 'Compressão']
    }
  ];

  return (
    <section className="py-20 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-600 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent">
            Nossos Serviços
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Oferecemos soluções completas em desenvolvimento de software para impulsionar seu negócio.
          </p>
        </motion.div>

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
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center text-white shadow-lg">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 text-center">{service.title}</h3>
              <p className="text-gray-300 mb-6 text-center leading-relaxed">{service.description}</p>
              
              <div className="flex flex-wrap gap-2 justify-center">
                {service.features.map((feature, featureIndex) => (
                  <span
                    key={featureIndex}
                    className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-sm border border-indigo-500/30"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
