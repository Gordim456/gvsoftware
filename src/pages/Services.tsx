
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code, Layout, Database, PenTool, Settings, BarChart, Server, Shield, Cloud, Globe, Smartphone, Tv } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ServicesCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => {
  return (
    <motion.div 
      className="bg-gv-darker p-6 rounded-lg border border-gray-800 hover:border-gv-primary transition-all duration-300 group"
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <div className="mb-4 bg-opacity-10 bg-indigo-500 p-3 rounded-md w-fit group-hover:bg-gv-primary group-hover:bg-opacity-100 transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gv-gray">{description}</p>
    </motion.div>
  );
};

const Services = () => {
  useEffect(() => {
    document.title = 'Serviços | GV Software';
  }, []);

  const services = [
    {
      icon: <Code className="w-6 h-6 text-gv-primary group-hover:text-white transition-colors duration-300" />,
      title: "Desenvolvimento Web",
      description: "Desenvolvemos websites modernos, responsivos e otimizados para motores de busca."
    },
    {
      icon: <Layout className="w-6 h-6 text-gv-primary group-hover:text-white transition-colors duration-300" />,
      title: "Aplicações Web",
      description: "Criamos aplicações web robustas, escaláveis e seguras para o seu negócio."
    },
    {
      icon: <Database className="w-6 h-6 text-gv-primary group-hover:text-white transition-colors duration-300" />,
      title: "Banco de Dados",
      description: "Estruturamos e otimizamos bancos de dados para suportar suas aplicações."
    },
    {
      icon: <PenTool className="w-6 h-6 text-gv-primary group-hover:text-white transition-colors duration-300" />,
      title: "UI/UX Design",
      description: "Projetamos interfaces intuitivas e experiências de usuário que encantam."
    },
    {
      icon: <Settings className="w-6 h-6 text-gv-primary group-hover:text-white transition-colors duration-300" />,
      title: "Manutenção e Suporte",
      description: "Oferecemos suporte técnico e manutenção contínua para suas aplicações."
    },
    {
      icon: <BarChart className="w-6 h-6 text-gv-primary group-hover:text-white transition-colors duration-300" />,
      title: "Consultoria em TI",
      description: "Ajudamos sua empresa a tomar as melhores decisões tecnológicas."
    },
    {
      icon: <Cloud className="w-6 h-6 text-gv-primary group-hover:text-white transition-colors duration-300" />,
      title: "Cloud Computing",
      description: "Implementamos soluções em nuvem seguras, eficientes e escaláveis."
    },
    {
      icon: <Smartphone className="w-6 h-6 text-gv-primary group-hover:text-white transition-colors duration-300" />,
      title: "Desenvolvimento Mobile",
      description: "Criamos aplicativos móveis nativos e híbridos para iOS e Android."
    },
    {
      icon: <Shield className="w-6 h-6 text-gv-primary group-hover:text-white transition-colors duration-300" />,
      title: "Cibersegurança",
      description: "Protegemos seus dados e sistemas contra ameaças digitais."
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="py-20 bg-gv-darker pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossos <span className="gradient-text">Serviços</span></h2>
            <p className="text-gv-gray max-w-2xl mx-auto">
              Oferecemos uma ampla gama de serviços de desenvolvimento de software para atender às suas necessidades.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={cardVariants} transition={{ duration: 0.5 }}>
                <ServicesCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                />
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className="mt-20 bg-gv-dark p-8 rounded-lg border border-gray-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Processo de Desenvolvimento</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-2">
                    <div className="bg-gv-primary text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">1</div>
                    <div>
                      <h4 className="font-semibold">Análise de Requisitos</h4>
                      <p className="text-gv-gray">Entendemos suas necessidades e definimos os requisitos do projeto.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="bg-gv-primary text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">2</div>
                    <div>
                      <h4 className="font-semibold">Planejamento</h4>
                      <p className="text-gv-gray">Elaboramos um plano detalhado com cronograma e recursos necessários.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="bg-gv-primary text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">3</div>
                    <div>
                      <h4 className="font-semibold">Design e Desenvolvimento</h4>
                      <p className="text-gv-gray">Implementamos a solução seguindo as melhores práticas de desenvolvimento.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="bg-gv-primary text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">4</div>
                    <div>
                      <h4 className="font-semibold">Testes e Validação</h4>
                      <p className="text-gv-gray">Realizamos testes rigorosos para garantir a qualidade do produto.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="bg-gv-primary text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">5</div>
                    <div>
                      <h4 className="font-semibold">Implantação e Suporte</h4>
                      <p className="text-gv-gray">Entregamos o produto e fornecemos suporte contínuo.</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <div className="w-full h-64 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg opacity-70 blur-xl absolute -top-4 -left-4 z-0"></div>
                <img 
                  src="/services-process.svg" 
                  alt="Processo de Desenvolvimento" 
                  className="w-full h-auto relative z-10 rounded-lg shadow-lg"
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
