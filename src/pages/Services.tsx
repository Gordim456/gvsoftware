
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Layout, Database, PenTool, Settings, BarChart, Server, Shield, Cloud, Globe, Smartphone, Tv } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ServicesCard = ({ 
  icon, 
  title, 
  description, 
  index 
}: { 
  icon: React.ReactNode, 
  title: string, 
  description: string,
  index: number
}) => {
  return (
    <motion.div 
      className="bg-gv-darker p-6 rounded-lg border border-gray-800 hover:border-indigo-500 transition-all duration-500 group overflow-hidden relative"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.5,
        delay: index * 0.1
      }}
      whileHover={{ 
        y: -10, 
        boxShadow: "0 15px 30px rgba(79, 70, 229, 0.15)",
        transition: { duration: 0.3 }
      }}
    >
      <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-indigo-500 rounded-full opacity-0 group-hover:opacity-10 transition-all duration-500 transform group-hover:scale-150"></div>
      
      <div className="mb-6 bg-opacity-10 bg-indigo-500 p-4 rounded-xl w-fit group-hover:bg-indigo-600 group-hover:bg-opacity-100 transition-all duration-500">
        {icon}
      </div>
      
      <h3 className="text-xl font-semibold mb-3 group-hover:text-indigo-300 transition-colors duration-300">{title}</h3>
      <p className="text-gv-gray group-hover:text-gray-300 transition-colors duration-300">{description}</p>
      
      <div className="mt-6 h-1 w-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full group-hover:w-16 transition-all duration-500"></div>
    </motion.div>
  );
};

const Services = () => {
  const [isInView, setIsInView] = useState(false);
  
  useEffect(() => {
    document.title = 'Serviços | GV Software';
    const timer = setTimeout(() => setIsInView(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const services = [
    {
      icon: <Code className="w-6 h-6 text-indigo-400 group-hover:text-white transition-colors duration-300" />,
      title: "Desenvolvimento Web",
      description: "Desenvolvemos websites modernos, responsivos e otimizados para motores de busca."
    },
    {
      icon: <Layout className="w-6 h-6 text-indigo-400 group-hover:text-white transition-colors duration-300" />,
      title: "Aplicações Web",
      description: "Criamos aplicações web robustas, escaláveis e seguras para o seu negócio."
    },
    {
      icon: <Database className="w-6 h-6 text-indigo-400 group-hover:text-white transition-colors duration-300" />,
      title: "Banco de Dados",
      description: "Estruturamos e otimizamos bancos de dados para suportar suas aplicações."
    },
    {
      icon: <PenTool className="w-6 h-6 text-indigo-400 group-hover:text-white transition-colors duration-300" />,
      title: "UI/UX Design",
      description: "Projetamos interfaces intuitivas e experiências de usuário que encantam."
    },
    {
      icon: <Settings className="w-6 h-6 text-indigo-400 group-hover:text-white transition-colors duration-300" />,
      title: "Manutenção e Suporte",
      description: "Oferecemos suporte técnico e manutenção contínua para suas aplicações."
    },
    {
      icon: <BarChart className="w-6 h-6 text-indigo-400 group-hover:text-white transition-colors duration-300" />,
      title: "Consultoria em TI",
      description: "Ajudamos sua empresa a tomar as melhores decisões tecnológicas."
    },
    {
      icon: <Cloud className="w-6 h-6 text-indigo-400 group-hover:text-white transition-colors duration-300" />,
      title: "Cloud Computing",
      description: "Implementamos soluções em nuvem seguras, eficientes e escaláveis."
    },
    {
      icon: <Smartphone className="w-6 h-6 text-indigo-400 group-hover:text-white transition-colors duration-300" />,
      title: "Desenvolvimento Mobile",
      description: "Criamos aplicativos móveis nativos e híbridos para iOS e Android."
    },
    {
      icon: <Shield className="w-6 h-6 text-indigo-400 group-hover:text-white transition-colors duration-300" />,
      title: "Cibersegurança",
      description: "Protegemos seus dados e sistemas contra ameaças digitais."
    }
  ];

  return (
    <div className="min-h-screen bg-gv-dark">
      <Navbar />

      <section className="py-20 pt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-block mb-3"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ 
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.2
              }}
            >
              <div className="bg-indigo-500 bg-opacity-20 p-3 rounded-full">
                <Server className="w-6 h-6 text-indigo-400" />
              </div>
            </motion.div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Nossos <span className="gradient-text">Serviços</span></h2>
            <p className="text-gv-gray max-w-2xl mx-auto text-lg">
              Oferecemos uma ampla gama de serviços de desenvolvimento de software para atender às suas necessidades.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServicesCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                index={index}
              />
            ))}
          </div>
          
          <motion.div 
            className="mt-24 bg-gv-darker p-10 rounded-xl border border-gray-800 relative overflow-hidden"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            whileHover={{ 
              boxShadow: "0 0 40px rgba(79, 70, 229, 0.2)",
              borderColor: "rgba(79, 70, 229, 0.3)",
              transition: { duration: 0.3 }
            }}
          >
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-indigo-600 rounded-full opacity-10 blur-3xl"></div>
            <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-purple-600 rounded-full opacity-10 blur-3xl"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative z-10">
              <div>
                <h3 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">Processo de Desenvolvimento</h3>
                <ul className="space-y-6">
                  <motion.li 
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                  >
                    <div className="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">1</div>
                    <div>
                      <h4 className="font-semibold text-lg">Análise de Requisitos</h4>
                      <p className="text-gv-gray">Entendemos suas necessidades e definimos os requisitos do projeto.</p>
                    </div>
                  </motion.li>
                  <motion.li 
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 }}
                  >
                    <div className="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">2</div>
                    <div>
                      <h4 className="font-semibold text-lg">Planejamento</h4>
                      <p className="text-gv-gray">Elaboramos um plano detalhado com cronograma e recursos necessários.</p>
                    </div>
                  </motion.li>
                  <motion.li 
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                  >
                    <div className="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">3</div>
                    <div>
                      <h4 className="font-semibold text-lg">Design e Desenvolvimento</h4>
                      <p className="text-gv-gray">Implementamos a solução seguindo as melhores práticas de desenvolvimento.</p>
                    </div>
                  </motion.li>
                  <motion.li 
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.9 }}
                  >
                    <div className="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">4</div>
                    <div>
                      <h4 className="font-semibold text-lg">Testes e Validação</h4>
                      <p className="text-gv-gray">Realizamos testes rigorosos para garantir a qualidade do produto.</p>
                    </div>
                  </motion.li>
                  <motion.li 
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1 }}
                  >
                    <div className="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">5</div>
                    <div>
                      <h4 className="font-semibold text-lg">Implantação e Suporte</h4>
                      <p className="text-gv-gray">Entregamos o produto e fornecemos suporte contínuo.</p>
                    </div>
                  </motion.li>
                </ul>
              </div>
              <div className="relative">
                <div className="w-full h-64 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg opacity-70 blur-xl absolute -top-4 -left-4 z-0"></div>
                <motion.img 
                  src="/services-process.svg" 
                  alt="Processo de Desenvolvimento" 
                  className="w-full h-auto relative z-10 rounded-lg shadow-lg"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
