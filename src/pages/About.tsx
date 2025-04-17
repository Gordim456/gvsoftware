import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { CheckCircle, Users, Award, Clock, ArrowRight, Shield, Code, Star, Zap, Sparkles } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

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
    { icon: <Clock className="w-6 h-6 text-indigo-400" />, value: "5+", label: "Anos de Experiência" },
    { icon: <Shield className="w-6 h-6 text-indigo-400" />, value: "100%", label: "Segurança" }
  ];

  return (
    <div className="min-h-screen bg-gv-dark">
      <Navbar />

      {/* Hero Section with Enhanced Parallax Effect */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-800/90 to-purple-900/90 mix-blend-multiply z-10"></div>
          <motion.div
            initial={{ scale: 1.2 }}
            animate={{ 
              y: [0, -15, 0],
              scale: 1.1 
            }}
            transition={{ 
              y: { repeat: Infinity, duration: 6, ease: "easeInOut" },
              scale: { duration: 1 } 
            }}
            className="w-full h-full"
          >
            <img
              src="/project-4.jpg"
              alt="About Us"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="mb-4 flex justify-center"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
            >
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-full">
                <Sparkles className="w-10 h-10 text-indigo-300" />
              </div>
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 drop-shadow-lg">
              Sobre a <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500">GV Software</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-light">
              Transformando ideias em soluções digitais inovadoras que impulsionam o futuro dos negócios
            </p>
            <motion.div 
              className="mt-8 flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-full flex items-center space-x-2">
                <Star className="w-5 h-5 text-yellow-400" />
                <span className="text-white/90">Premiada como Top Desenvolvedora 2023</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-0 z-20">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-[60px] text-gv-dark">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="currentColor"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="currentColor"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="currentColor"></path>
          </svg>
        </div>
      </section>

      <section className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative order-2 md:order-1">
              <div className="absolute -top-20 -left-20 w-64 h-64 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
              <div className="absolute -bottom-8 -right-20 w-64 h-64 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
              
              <motion.div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl shadow-indigo-500/20"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <img 
                  src="/about-image.svg" 
                  alt="GV Software Team" 
                  className="w-full h-auto rounded-xl" 
                />
                <div className="absolute inset-0 bg-gradient-to-tl from-indigo-900/40 to-transparent"></div>
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-6 -right-6 bg-gv-darker p-4 rounded-lg border border-indigo-500/30 shadow-xl z-20 backdrop-blur-sm"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(79, 70, 229, 0.2)" }}
              >
                <div className="flex items-center gap-3">
                  <div className="bg-gradient-to-br from-indigo-500 to-indigo-700 p-2 rounded-full">
                    <Award className="w-5 h-5 text-white" />
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
              <motion.div variants={fadeIn} 
                className="inline-flex items-center px-4 py-1.5 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30"
              >
                <Zap className="w-4 h-4 text-indigo-400 mr-2" />
                <span className="text-sm font-medium text-indigo-400">Nossa História</span>
              </motion.div>
              <motion.h3 variants={fadeIn} className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">Nossa Missão</motion.h3>
              <motion.p variants={fadeIn} className="text-gv-gray text-lg leading-relaxed">
                Fundada em 2020, a <span className="text-indigo-400 font-medium">GV Software</span> nasceu com a missão de transformar ideias em produtos digitais 
                excepcionais. Nossa equipe é formada por especialistas apaixonados por tecnologia e inovação,
                focados em entregar soluções que realmente impactam o sucesso dos nossos clientes.
              </motion.p>

              <motion.p variants={fadeIn} className="text-gv-gray text-lg leading-relaxed">
                Ajudamos empresas a transformarem suas ideias em produtos digitais de alta qualidade, 
                entregando soluções personalizadas que impulsionam o crescimento e a inovação no mercado digital.
              </motion.p>
              
              <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="space-y-4 mt-8">
                <motion.div variants={fadeIn} className="flex items-start gap-4 p-3 rounded-lg hover:bg-white/5 transition-all duration-300">
                  <div className="bg-gradient-to-br from-indigo-500 to-indigo-700 p-2 rounded-full">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg group-hover:text-indigo-300 transition-colors duration-300">Equipe especializada</h4>
                    <p className="text-gv-gray">Desenvolvedores experientes e apaixonados por tecnologia</p>
                  </div>
                </motion.div>
                <motion.div variants={fadeIn} className="flex items-start gap-4 p-3 rounded-lg hover:bg-white/5 transition-all duration-300">
                  <div className="bg-gradient-to-br from-indigo-500 to-indigo-700 p-2 rounded-full">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg group-hover:text-indigo-300 transition-colors duration-300">Metodologias ágeis</h4>
                    <p className="text-gv-gray">Processos eficientes para desenvolvimento rápido e de qualidade</p>
                  </div>
                </motion.div>
                <motion.div variants={fadeIn} className="flex items-start gap-4 p-3 rounded-lg hover:bg-white/5 transition-all duration-300">
                  <div className="bg-gradient-to-br from-indigo-500 to-indigo-700 p-2 rounded-full">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg group-hover:text-indigo-300 transition-colors duration-300">Foco na qualidade</h4>
                    <p className="text-gv-gray">Código limpo e testado seguindo as melhores práticas</p>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div variants={fadeIn} className="mt-8">
                <Link to="/contact">
                  <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium px-8 py-6 rounded-xl flex items-center gap-3 group shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 transition-all duration-300">
                    <span>Fale Conosco</span>
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Portfolio Carousel with enhanced styling */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="flex justify-center mb-4"
              >
                <div className="bg-gradient-to-br from-indigo-500/20 to-purple-500/20 p-3 rounded-full inline-flex">
                  <Sparkles className="w-6 h-6 text-indigo-400" />
                </div>
              </motion.div>
              <h2 className="text-3xl md:text-5xl font-bold mt-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">Nossos Projetos</h2>
              <p className="text-gv-gray mt-6 max-w-2xl mx-auto text-lg">
                Conheça alguns dos projetos inovadores que desenvolvemos recentemente
              </p>
            </div>

            <div className="w-full max-w-6xl mx-auto">
              <Carousel opts={{ loop: true }} className="overflow-visible">
                <CarouselContent className="overflow-visible">
                  {[1, 2, 3, 4].map((_, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 p-2 overflow-visible">
                      <motion.div 
                        className="relative aspect-video rounded-xl overflow-hidden group"
                        whileHover={{ scale: 1.05, y: -10 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10 opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                        <img
                          src={`/project-${index + 1}.jpg`}
                          alt={`Programming Project ${index + 1}`}
                          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end">
                          <span className="text-xs bg-indigo-600/80 backdrop-blur-sm text-white px-3 py-1 rounded-full w-max mb-3 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">Projeto {index + 1}</span>
                          <h4 className="text-lg font-semibold text-white mb-2 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 delay-75">{["Sistema ERP", "App Móvel", "Ecommerce", "Dashboard"][index]}</h4>
                          <p className="text-sm text-gray-300 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 delay-100">Solução completa desenvolvida com tecnologias modernas</p>
                        </div>
                      </motion.div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="flex justify-center mt-6">
                  <CarouselPrevious className="relative inset-0 translate-x-0 translate-y-0 bg-gv-darker border-indigo-500/50 hover:bg-indigo-600 hover:border-indigo-600 mr-2" />
                  <CarouselNext className="relative inset-0 translate-x-0 translate-y-0 bg-gv-darker border-indigo-500/50 hover:bg-indigo-600 hover:border-indigo-600" />
                </div>
              </Carousel>
            </div>
          </motion.div>

          {/* Stats Section with enhanced design */}
          <motion.div 
            ref={statsRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
            initial={{ opacity: 0, y: 50 }}
            animate={isStatsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-gv-darker p-8 rounded-xl backdrop-blur-sm border border-indigo-500/10 hover:border-indigo-500/50 transition-all duration-500 text-center relative overflow-hidden group"
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
                <div className="flex justify-center mb-6">
                  <div className="bg-gradient-to-br from-indigo-500 to-indigo-700 p-4 rounded-full">
                    {stat.icon}
                  </div>
                </div>
                <h3 className="text-4xl font-bold mb-2">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500">{stat.value}</span>
                </h3>
                <p className="text-gv-gray">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Values Section with enhanced design */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div 
              className="bg-gv-darker p-8 rounded-xl border border-indigo-500/10 hover:border-indigo-500/50 transition-all duration-500 relative overflow-hidden group backdrop-blur-sm"
              whileHover={{ 
                y: -10,
                boxShadow: "0 15px 30px rgba(79, 70, 229, 0.15)",
                transition: { duration: 0.3 }
              }}
            >
              <div className="absolute -top-20 -left-20 w-40 h-40 bg-indigo-500 rounded-full opacity-0 group-hover:opacity-10 transition-all duration-500 transform group-hover:scale-150"></div>
              <div className="bg-gradient-to-br from-indigo-500 to-indigo-700 p-4 rounded-xl w-16 h-16 flex items-center justify-center mb-6">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl font-semibold mb-4 group-hover:text-indigo-300 transition-colors duration-300">Nossa Missão</h4>
              <p className="text-gv-gray">
                Transformar ideias em soluções digitais inovadoras que geram valor real para nossos clientes e impactam positivamente a sociedade.
              </p>
              <div className="mt-6 h-1 w-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full group-hover:w-24 transition-all duration-500"></div>
            </motion.div>
            <motion.div 
              className="bg-gv-darker p-8 rounded-xl border border-indigo-500/10 hover:border-indigo-500/50 transition-all duration-500 relative overflow-hidden group backdrop-blur-sm"
              whileHover={{ 
                y: -10,
                boxShadow: "0 15px 30px rgba(79, 70, 229, 0.15)",
                transition: { duration: 0.3 }
              }}
            >
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-500 rounded-full opacity-0 group-hover:opacity-10 transition-all duration-500 transform group-hover:scale-150"></div>
              <div className="bg-gradient-to-br from-purple-500 to-purple-700 p-4 rounded-xl w-16 h-16 flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl font-semibold mb-4 group-hover:text-indigo-300 transition-colors duration-300">Nossos Valores</h4>
              <p className="text-gv-gray">
                Acreditamos na inovação, na excelência técnica, na transparência e na colaboração.
                Cada linha de código que escrevemos é guiada por esses valores fundamentais.
              </p>
              <div className="mt-6 h-1 w-0 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full group-hover:w-24 transition-all duration-500"></div>
            </motion.div>
            <motion.div 
              className="bg-gv-darker p-8 rounded-xl border border-indigo-500/10 hover:border-indigo-500/50 transition-all duration-500 relative overflow-hidden group backdrop-blur-sm"
              whileHover={{ 
                y: -10,
                boxShadow: "0 15px 30px rgba(79, 70, 229, 0.15)",
                transition: { duration: 0.3 }
              }}
            >
              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-indigo-500 rounded-full opacity-0 group-hover:opacity-10 transition-all duration-500 transform group-hover:scale-150"></div>
              <div className="bg-gradient-to-br from-indigo-500 to-purple-700 p-4 rounded-xl w-16 h-16 flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl font-semibold mb-4 group-hover:text-indigo-300 transition-colors duration-300">Nossa Abordagem</h4>
              <p className="text-gv-gray">
                Trabalhamos em estreita colaboração com nossos clientes, entendendo suas necessidades
                e desenvolvendo soluções que realmente agregam valor ao seu negócio.
              </p>
              <div className="mt-6 h-1 w-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full group-hover:w-24 transition-all duration-500"></div>
            </motion.div>
          </motion.div>

          {/* Enhanced CTA Section */}
          <motion.div
            className="mt-24 bg-gradient-to-r from-indigo-900/90 to-purple-900/90 rounded-2xl p-12 text-center overflow-hidden relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute inset-0 overflow-hidden">
              <motion.div 
                className="absolute -top-40 -left-40 w-80 h-80 bg-purple-700/30 rounded-full mix-blend-overlay blur-3xl"
                animate={{ 
                  x: [0, 30, 0],
                  y: [0, 30, 0],
                }}
                transition={{ 
                  repeat: Infinity,
                  duration: 8,
                  ease: "easeInOut"
                }}
              />
              <motion.div 
                className="absolute -bottom-40 -right-40 w-80 h-80 bg-indigo-700/30 rounded-full mix-blend-overlay blur-3xl"
                animate={{ 
                  x: [0, -30, 0],
                  y: [0, -30, 0],
                }}
                transition={{ 
                  repeat: Infinity,
                  duration: 10,
                  ease: "easeInOut"
                }}
              />
            </div>
            
            <div className="relative z-10">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="flex justify-center mb-6"
              >
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-full">
                  <Sparkles className="w-8 h-8 text-indigo-300" />
                </div>
              </motion.div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Pronto para transformar suas ideias em realidade?</h2>
              <p className="text-lg text-white/80 max-w-2xl mx-auto mb-10">
                Entre em contato conosco e descubra como podemos ajudar a impulsionar seu negócio com soluções digitais inovadoras.
              </p>
              <Link to="/contact">
                <Button className="bg-white hover:bg-gray-100 text-indigo-800 font-medium px-8 py-6 rounded-xl text-lg shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 transition-all duration-300 transform hover:scale-105">
                  Fale com um especialista hoje mesmo
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      
      {/* Add animation utility styles */}
      <style>
        {`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -20px) scale(1.1); }
          50% { transform: translate(0, 20px) scale(1); }
          75% { transform: translate(-20px, -20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 10s infinite ease-in-out;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}
      </style>
    </div>
  );
};

export default About;
