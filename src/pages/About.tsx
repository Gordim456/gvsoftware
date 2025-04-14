
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  useEffect(() => {
    document.title = 'Sobre Nós | GV Software';
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="py-20 bg-gv-dark pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Sobre a <span className="gradient-text">GV Software</span></h2>
            <p className="text-gv-gray max-w-2xl mx-auto">
              Somos uma empresa de desenvolvimento de software focada em criar soluções personalizadas para o seu negócio.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="w-full h-96 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg opacity-80 blur-2xl absolute -top-10 -left-10 z-0"></div>
              <motion.img 
                src="/about-image.svg" 
                alt="GV Software Team" 
                className="w-full h-auto max-h-96 object-cover rounded-lg shadow-xl relative z-10" 
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              />
            </motion.div>
            
            <motion.div 
              className="space-y-6"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.h3 variants={fadeIn} className="text-2xl font-bold">Nossa Missão</motion.h3>
              <motion.p variants={fadeIn} className="text-gv-gray">
                Ajudamos empresas a transformar suas ideias em produtos digitais de alta qualidade, 
                entregando soluções personalizadas que impulsionam o crescimento e a inovação.
              </motion.p>
              
              <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="space-y-3">
                <motion.div variants={fadeIn} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-gv-primary flex-shrink-0 mt-1" />
                  <p>Equipe de desenvolvedores experientes e especializados</p>
                </motion.div>
                <motion.div variants={fadeIn} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-gv-primary flex-shrink-0 mt-1" />
                  <p>Metodologias ágeis para desenvolvimento eficiente</p>
                </motion.div>
                <motion.div variants={fadeIn} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-gv-primary flex-shrink-0 mt-1" />
                  <p>Foco na qualidade e nas melhores práticas de desenvolvimento</p>
                </motion.div>
                <motion.div variants={fadeIn} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-gv-primary flex-shrink-0 mt-1" />
                  <p>Comunicação transparente e suporte contínuo</p>
                </motion.div>
              </motion.div>

              <motion.div 
                variants={fadeIn}
                className="bg-gv-darker p-6 rounded-lg border border-gray-800 mt-8"
              >
                <h4 className="text-xl font-semibold mb-3">Nossa Visão</h4>
                <p className="text-gv-gray">
                  Ser reconhecida como uma empresa inovadora e confiável no desenvolvimento de software,
                  criando soluções que impactam positivamente a vida das pessoas e o sucesso dos negócios.
                </p>
              </motion.div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div className="bg-gv-darker p-6 rounded-lg border border-gray-800 hover:border-gv-primary transition-all duration-300">
              <h4 className="text-xl font-semibold mb-3">Nossa História</h4>
              <p className="text-gv-gray">
                Fundada em 2020, a GV Software nasceu da paixão por criar soluções tecnológicas que realmente 
                resolvem problemas. Começamos como uma pequena equipe e crescemos com base na qualidade e na satisfação dos clientes.
              </p>
            </div>
            <div className="bg-gv-darker p-6 rounded-lg border border-gray-800 hover:border-gv-primary transition-all duration-300">
              <h4 className="text-xl font-semibold mb-3">Nossos Valores</h4>
              <p className="text-gv-gray">
                Acreditamos na inovação, na excelência técnica, na transparência e na colaboração.
                Cada linha de código que escrevemos é guiada por esses valores fundamentais.
              </p>
            </div>
            <div className="bg-gv-darker p-6 rounded-lg border border-gray-800 hover:border-gv-primary transition-all duration-300">
              <h4 className="text-xl font-semibold mb-3">Nossa Abordagem</h4>
              <p className="text-gv-gray">
                Trabalhamos em estreita colaboração com nossos clientes, entendendo suas necessidades
                e desenvolvendo soluções que realmente agregam valor ao seu negócio.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
