
import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { CheckCircle, Users, Award, Clock } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

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
  
  const statsRef = useRef(null);
  const isStatsInView = useInView(statsRef, { once: true, amount: 0.5 });
  
  const stats = [
    { icon: <Users className="w-6 h-6 text-indigo-400" />, value: "15+", label: "Especialistas" },
    { icon: <Award className="w-6 h-6 text-indigo-400" />, value: "50+", label: "Projetos Entregues" },
    { icon: <Clock className="w-6 h-6 text-indigo-400" />, value: "5+", label: "Anos de Experiência" }
  ];

  return (
    <div className="min-h-screen bg-gv-dark">
      <Navbar />

      <section className="py-20 pt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
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
                <Users className="w-6 h-6 text-indigo-400" />
              </div>
            </motion.div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Sobre a <span className="gradient-text">GV Software</span></h2>
            <p className="text-gv-gray max-w-2xl mx-auto text-lg">
              Somos uma empresa de desenvolvimento de software focada em criar soluções personalizadas para o seu negócio.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <Carousel className="w-full max-w-5xl mx-auto" opts={{ loop: true }} autoPlay={true}>
              <CarouselContent>
                {[1, 2, 3, 4].map((_, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-2">
                      <motion.div 
                        className="relative aspect-video rounded-xl overflow-hidden group"
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10 opacity-50 group-hover:opacity-80 transition-opacity duration-300"></div>
                        <img
                          src={`/project-${index + 1}.jpg`}
                          alt={`Programming Project ${index + 1}`}
                          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                        />
                      </motion.div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center mt-4">
                <CarouselPrevious className="relative inset-0 translate-x-0 translate-y-0 bg-gv-darker border-gray-700 hover:bg-indigo-600 hover:border-indigo-600 mr-2" />
                <CarouselNext className="relative inset-0 translate-x-0 translate-y-0 bg-gv-darker border-gray-700 hover:bg-indigo-600 hover:border-indigo-600" />
              </div>
            </Carousel>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative order-2 md:order-1">
              <div className="w-full h-96 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl opacity-80 blur-xl absolute -bottom-8 -right-8 z-0"></div>
              <motion.img 
                src="/about-image.svg" 
                alt="GV Software Team" 
                className="w-full h-auto max-h-96 object-cover rounded-xl shadow-xl relative z-10" 
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              />
              <motion.div 
                className="absolute -bottom-6 -right-6 bg-gv-darker p-4 rounded-lg border border-gray-700 shadow-xl z-20"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(79, 70, 229, 0.2)" }}
              >
                <div className="flex items-center gap-3">
                  <div className="bg-indigo-500 bg-opacity-20 p-2 rounded-full">
                    <Award className="w-5 h-5 text-indigo-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gv-gray">Reconhecidos como</p>
                    <p className="font-semibold">Top Developers 2024</p>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <motion.div 
              className="space-y-6 order-1 md:order-2"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.h3 variants={fadeIn} className="text-3xl font-bold">Nossa Missão</motion.h3>
              <motion.p variants={fadeIn} className="text-gv-gray text-lg">
                Ajudamos empresas a transformar suas ideias em produtos digitais de alta qualidade, 
                entregando soluções personalizadas que impulsionam o crescimento e a inovação.
              </motion.p>
              
              <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="space-y-4 mt-8">
                <motion.div variants={fadeIn} className="flex items-start gap-4 group">
                  <CheckCircle className="w-6 h-6 text-indigo-400 flex-shrink-0 mt-1 group-hover:text-indigo-300 transition-colors duration-300" />
                  <div>
                    <h4 className="font-semibold text-lg group-hover:text-indigo-300 transition-colors duration-300">Equipe especializada</h4>
                    <p className="text-gv-gray">Desenvolvedores experientes e apaixonados por tecnologia</p>
                  </div>
                </motion.div>
                <motion.div variants={fadeIn} className="flex items-start gap-4 group">
                  <CheckCircle className="w-6 h-6 text-indigo-400 flex-shrink-0 mt-1 group-hover:text-indigo-300 transition-colors duration-300" />
                  <div>
                    <h4 className="font-semibold text-lg group-hover:text-indigo-300 transition-colors duration-300">Metodologias ágeis</h4>
                    <p className="text-gv-gray">Processos eficientes para desenvolvimento rápido e de qualidade</p>
                  </div>
                </motion.div>
                <motion.div variants={fadeIn} className="flex items-start gap-4 group">
                  <CheckCircle className="w-6 h-6 text-indigo-400 flex-shrink-0 mt-1 group-hover:text-indigo-300 transition-colors duration-300" />
                  <div>
                    <h4 className="font-semibold text-lg group-hover:text-indigo-300 transition-colors duration-300">Foco na qualidade</h4>
                    <p className="text-gv-gray">Código limpo e testado seguindo as melhores práticas</p>
                  </div>
                </motion.div>
                <motion.div variants={fadeIn} className="flex items-start gap-4 group">
                  <CheckCircle className="w-6 h-6 text-indigo-400 flex-shrink-0 mt-1 group-hover:text-indigo-300 transition-colors duration-300" />
                  <div>
                    <h4 className="font-semibold text-lg group-hover:text-indigo-300 transition-colors duration-300">Comunicação transparente</h4>
                    <p className="text-gv-gray">Acompanhamento constante do projeto e suporte contínuo</p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div 
            ref={statsRef}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
            initial={{ opacity: 0, y: 50 }}
            animate={isStatsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-gv-darker p-6 rounded-xl border border-gray-800 hover:border-indigo-500 transition-all duration-300 text-center relative overflow-hidden group"
                initial={{ opacity: 0, y: 20 }}
                animate={isStatsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 15px 30px rgba(79, 70, 229, 0.15)",
                  transition: { duration: 0.3 }
                }}
              >
                <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-indigo-500 rounded-full opacity-0 group-hover:opacity-10 transition-all duration-500 transform group-hover:scale-150"></div>
                <div className="flex justify-center mb-3">
                  <div className="bg-indigo-500 bg-opacity-10 p-3 rounded-full group-hover:bg-indigo-600 group-hover:bg-opacity-100 transition-all duration-300">
                    {stat.icon}
                  </div>
                </div>
                <h3 className="text-4xl font-bold gradient-text mb-2">{stat.value}</h3>
                <p className="text-gv-gray">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div 
              className="bg-gv-darker p-8 rounded-xl border border-gray-800 hover:border-indigo-500 transition-all duration-500 relative overflow-hidden group"
              whileHover={{ 
                y: -10,
                boxShadow: "0 15px 30px rgba(79, 70, 229, 0.15)",
                transition: { duration: 0.3 }
              }}
            >
              <div className="absolute -top-20 -left-20 w-40 h-40 bg-indigo-500 rounded-full opacity-0 group-hover:opacity-10 transition-all duration-500 transform group-hover:scale-150"></div>
              <h4 className="text-2xl font-semibold mb-4 group-hover:text-indigo-300 transition-colors duration-300">Nossa História</h4>
              <p className="text-gv-gray">
                Fundada em 2020, a GV Software nasceu da paixão por criar soluções tecnológicas que realmente 
                resolvem problemas. Começamos como uma pequena equipe e crescemos com base na qualidade e na satisfação dos clientes.
              </p>
              <div className="mt-6 h-1 w-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full group-hover:w-24 transition-all duration-500"></div>
            </motion.div>
            <motion.div 
              className="bg-gv-darker p-8 rounded-xl border border-gray-800 hover:border-indigo-500 transition-all duration-500 relative overflow-hidden group"
              whileHover={{ 
                y: -10,
                boxShadow: "0 15px 30px rgba(79, 70, 229, 0.15)",
                transition: { duration: 0.3 }
              }}
            >
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-500 rounded-full opacity-0 group-hover:opacity-10 transition-all duration-500 transform group-hover:scale-150"></div>
              <h4 className="text-2xl font-semibold mb-4 group-hover:text-indigo-300 transition-colors duration-300">Nossos Valores</h4>
              <p className="text-gv-gray">
                Acreditamos na inovação, na excelência técnica, na transparência e na colaboração.
                Cada linha de código que escrevemos é guiada por esses valores fundamentais.
              </p>
              <div className="mt-6 h-1 w-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full group-hover:w-24 transition-all duration-500"></div>
            </motion.div>
            <motion.div 
              className="bg-gv-darker p-8 rounded-xl border border-gray-800 hover:border-indigo-500 transition-all duration-500 relative overflow-hidden group"
              whileHover={{ 
                y: -10,
                boxShadow: "0 15px 30px rgba(79, 70, 229, 0.15)",
                transition: { duration: 0.3 }
              }}
            >
              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-indigo-500 rounded-full opacity-0 group-hover:opacity-10 transition-all duration-500 transform group-hover:scale-150"></div>
              <h4 className="text-2xl font-semibold mb-4 group-hover:text-indigo-300 transition-colors duration-300">Nossa Abordagem</h4>
              <p className="text-gv-gray">
                Trabalhamos em estreita colaboração com nossos clientes, entendendo suas necessidades
                e desenvolvendo soluções que realmente agregam valor ao seu negócio.
              </p>
              <div className="mt-6 h-1 w-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full group-hover:w-24 transition-all duration-500"></div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
