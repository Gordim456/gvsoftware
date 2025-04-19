import { CheckCircle, ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="about" className="py-20 bg-gv-darker relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          <motion.div variants={fadeInUp} className="flex justify-center mb-4">
            <div className="bg-gradient-to-br from-indigo-500/20 to-purple-500/20 p-3 rounded-full">
              <Sparkles className="w-6 h-6 text-indigo-400" />
            </div>
          </motion.div>
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Sobre a <span className="gradient-text">GV Software</span>
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-gv-gray max-w-2xl mx-auto text-lg"
          >
            Somos uma empresa de desenvolvimento de software focada em criar soluções personalizadas que transformam ideias em realidade digital.
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute -top-10 -left-10 w-full h-full bg-gradient-to-br from-indigo-500/30 to-purple-600/30 rounded-2xl blur-2xl"></div>
            
            <motion.div 
              className="relative z-10 rounded-2xl overflow-hidden shadow-2xl shadow-indigo-500/20"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <img 
                src="/about-image.svg" 
                alt="GV Software Team" 
                className="w-full h-auto max-h-96 object-cover rounded-2xl" 
              />
              <div className="absolute inset-0 bg-gradient-to-tl from-indigo-900/30 to-transparent"></div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold">Nossa Missão</h3>
            <p className="text-gv-gray">
              Ajudamos empresas a transformar suas ideias em produtos digitais de alta qualidade, 
              entregando soluções personalizadas que impulsionam o crescimento e a inovação.
            </p>
            
            <div className="space-y-4 mt-2">
              <motion.div 
                className="flex items-start gap-4 p-3 rounded-lg hover:bg-white/5 transition-all duration-300"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="bg-gradient-to-br from-indigo-500 to-indigo-700 p-2 rounded-full">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Equipe especializada</h4>
                  <p className="text-gv-gray">Desenvolvedores experientes e especializados em tecnologias modernas</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start gap-4 p-3 rounded-lg hover:bg-white/5 transition-all duration-300"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="bg-gradient-to-br from-indigo-500 to-indigo-700 p-2 rounded-full">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Metodologias ágeis</h4>
                  <p className="text-gv-gray">Desenvolvimento eficiente com resultados consistentes e de qualidade</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start gap-4 p-3 rounded-lg hover:bg-white/5 transition-all duration-300"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="bg-gradient-to-br from-indigo-500 to-indigo-700 p-2 rounded-full">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Foco na qualidade</h4>
                  <p className="text-gv-gray">Código limpo e testado seguindo as melhores práticas de desenvolvimento</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start gap-4 p-3 rounded-lg hover:bg-white/5 transition-all duration-300"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="bg-gradient-to-br from-indigo-500 to-indigo-700 p-2 rounded-full">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Comunicação transparente</h4>
                  <p className="text-gv-gray">Acompanhamento contínuo e suporte dedicado durante todo o projeto</p>
                </div>
              </motion.div>
            </div>
            
            <motion.div 
              className="mt-8"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Link to="/about">
                <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-6 rounded-xl flex items-center gap-3 group font-medium shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 transition-all duration-300">
                  <span>Conheça Nossa História</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
