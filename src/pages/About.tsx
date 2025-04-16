
import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { CheckCircle, Users, Award, Clock, ArrowRight, Shield, Code } from 'lucide-react';
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

  const team = [
    {
      name: "Carlos Mendes",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YnVzaW5lc3MlMjBtYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      social: {
        linkedin: "#",
        twitter: "#",
      }
    },
    {
      name: "Ana Silva",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YnVzaW5lc3MlMjB3b21hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      social: {
        linkedin: "#",
        twitter: "#",
      }
    },
    {
      name: "Marcos Rocha",
      role: "Lead Developer",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGJ1c2luZXNzJTIwbWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      social: {
        linkedin: "#",
        twitter: "#",
      }
    },
  ];

  return (
    <div className="min-h-screen bg-gv-dark">
      <Navbar />

      {/* Hero Section with Parallax Effect */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-800/80 to-purple-900/80 mix-blend-multiply z-10"></div>
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
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
              Sobre a <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-600">GV Software</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto">
              Transformando ideias em soluções digitais inovadoras desde 2020
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <motion.span 
                variants={fadeIn} 
                className="px-4 py-1 text-sm rounded-full border border-indigo-500 text-indigo-400"
              >
                Nossa História
              </motion.span>
              <motion.h3 variants={fadeIn} className="text-3xl md:text-4xl font-bold">Quem Somos</motion.h3>
              <motion.p variants={fadeIn} className="text-gv-gray text-lg leading-relaxed">
                Fundada em 2020, a GV Software nasceu com a missão de transformar ideias em produtos digitais 
                excepcionais. Nossa equipe é formada por especialistas apaixonados por tecnologia e inovação,
                focados em entregar soluções que realmente impactam o sucesso dos nossos clientes.
              </motion.p>

              <motion.p variants={fadeIn} className="text-gv-gray text-lg leading-relaxed">
                Ajudamos empresas a transformarem suas ideias em produtos digitais de alta qualidade, 
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
              </motion.div>

              <motion.div variants={fadeIn} className="mt-8">
                <Link to="/contact">
                  <Button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-8 py-2.5 rounded-lg flex items-center gap-2 group">
                    Fale Conosco
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Timeline Section */}
          <motion.div
            className="mb-24"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-12">
              <span className="px-4 py-1 text-sm rounded-full border border-indigo-500 text-indigo-400">Nossa Jornada</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-4">Nossa Evolução</h2>
              <p className="text-gv-gray mt-4 max-w-2xl mx-auto">
                Conheça os principais marcos da nossa história de sucesso e inovação
              </p>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-indigo-500 to-purple-600"></div>
              
              {/* Timeline Items */}
              <div className="space-y-16">
                {/* Item 1 */}
                <motion.div 
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="flex items-center justify-center">
                    <div className="bg-indigo-600 text-white font-bold py-1 px-4 rounded-full z-10">2020</div>
                  </div>
                  <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-gv-darker p-6 rounded-lg border border-gray-800 md:ml-auto md:mr-8">
                      <h3 className="text-xl font-semibold mb-2">Fundação da Empresa</h3>
                      <p className="text-gv-gray">
                        A GV Software é fundada com o objetivo de desenvolver soluções inovadoras para o mercado digital.
                      </p>
                    </div>
                    <div className="hidden md:block"></div>
                  </div>
                </motion.div>

                {/* Item 2 */}
                <motion.div 
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="flex items-center justify-center">
                    <div className="bg-indigo-600 text-white font-bold py-1 px-4 rounded-full z-10">2021</div>
                  </div>
                  <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="hidden md:block"></div>
                    <div className="bg-gv-darker p-6 rounded-lg border border-gray-800 md:ml-8">
                      <h3 className="text-xl font-semibold mb-2">Primeiro Grande Projeto</h3>
                      <p className="text-gv-gray">
                        Lançamos nossa primeira aplicação empresarial para uma grande empresa do setor financeiro.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Item 3 */}
                <motion.div 
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="flex items-center justify-center">
                    <div className="bg-indigo-600 text-white font-bold py-1 px-4 rounded-full z-10">2022</div>
                  </div>
                  <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-gv-darker p-6 rounded-lg border border-gray-800 md:ml-auto md:mr-8">
                      <h3 className="text-xl font-semibold mb-2">Expansão da Equipe</h3>
                      <p className="text-gv-gray">
                        Nossa equipe cresce para 10 colaboradores, incluindo desenvolvedores, designers e especialistas em UX.
                      </p>
                    </div>
                    <div className="hidden md:block"></div>
                  </div>
                </motion.div>

                {/* Item 4 */}
                <motion.div 
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="flex items-center justify-center">
                    <div className="bg-indigo-600 text-white font-bold py-1 px-4 rounded-full z-10">Hoje</div>
                  </div>
                  <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="hidden md:block"></div>
                    <div className="bg-gv-darker p-6 rounded-lg border border-gray-800 md:ml-8">
                      <h3 className="text-xl font-semibold mb-2">Reconhecimento Nacional</h3>
                      <p className="text-gv-gray">
                        Atualmente, somos reconhecidos como uma das principais empresas de desenvolvimento de software do país.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Portfolio Carousel */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <span className="px-4 py-1 text-sm rounded-full border border-indigo-500 text-indigo-400">Portfolio</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-4">Nossos Projetos</h2>
              <p className="text-gv-gray mt-4 max-w-2xl mx-auto">
                Conheça alguns dos projetos que desenvolvemos recentemente
              </p>
            </div>

            <div className="w-full max-w-5xl mx-auto">
              <Carousel opts={{ loop: true }}>
                <CarouselContent className="overflow-hidden">
                  {[1, 2, 3, 4].map((_, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                      <motion.div 
                        className="relative aspect-video rounded-xl overflow-hidden group p-2"
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10 opacity-50 group-hover:opacity-80 transition-opacity duration-300"></div>
                        <img
                          src={`/project-${index + 1}.jpg`}
                          alt={`Programming Project ${index + 1}`}
                          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                        />
                      </motion.div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="flex justify-center mt-4">
                  <CarouselPrevious className="relative inset-0 translate-x-0 translate-y-0 bg-gv-darker border-gray-700 hover:bg-indigo-600 hover:border-indigo-600 mr-2" />
                  <CarouselNext className="relative inset-0 translate-x-0 translate-y-0 bg-gv-darker border-gray-700 hover:bg-indigo-600 hover:border-indigo-600" />
                </div>
              </Carousel>
            </div>
          </motion.div>

          {/* Team Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-24"
          >
            <div className="text-center mb-12">
              <span className="px-4 py-1 text-sm rounded-full border border-indigo-500 text-indigo-400">Nossa Equipe</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-4">Profissionais Talentosos</h2>
              <p className="text-gv-gray mt-4 max-w-2xl mx-auto">
                Conheça alguns dos especialistas que fazem parte da nossa equipe
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  className="bg-gv-darker rounded-xl overflow-hidden group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                >
                  <div className="relative h-64 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-gv-darker via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                    <p className="text-indigo-400 mb-4">{member.role}</p>
                    <div className="flex gap-4">
                      <a href={member.social.linkedin} className="text-gray-400 hover:text-indigo-400 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                          <rect x="2" y="9" width="4" height="12"></rect>
                          <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                      </a>
                      <a href={member.social.twitter} className="text-gray-400 hover:text-indigo-400 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats Section */}
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
                <div className="flex justify-center mb-4">
                  <div className="bg-indigo-500 bg-opacity-10 p-3 rounded-full group-hover:bg-indigo-600 group-hover:bg-opacity-100 transition-all duration-300">
                    {stat.icon}
                  </div>
                </div>
                <h3 className="text-4xl font-bold gradient-text mb-2">{stat.value}</h3>
                <p className="text-gv-gray">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Values Section */}
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
              <div className="bg-indigo-500 bg-opacity-10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Code className="w-7 h-7 text-indigo-400" />
              </div>
              <h4 className="text-2xl font-semibold mb-4 group-hover:text-indigo-300 transition-colors duration-300">Nossa Missão</h4>
              <p className="text-gv-gray">
                Transformar ideias em soluções digitais inovadoras que geram valor real para nossos clientes e impactam positivamente a sociedade.
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
              <div className="bg-indigo-500 bg-opacity-10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-indigo-400" />
              </div>
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
              <div className="bg-indigo-500 bg-opacity-10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-indigo-400" />
              </div>
              <h4 className="text-2xl font-semibold mb-4 group-hover:text-indigo-300 transition-colors duration-300">Nossa Abordagem</h4>
              <p className="text-gv-gray">
                Trabalhamos em estreita colaboração com nossos clientes, entendendo suas necessidades
                e desenvolvendo soluções que realmente agregam valor ao seu negócio.
              </p>
              <div className="mt-6 h-1 w-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full group-hover:w-24 transition-all duration-500"></div>
            </motion.div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            className="mt-24 bg-gradient-to-r from-indigo-800/80 to-purple-900/80 rounded-2xl p-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para transformar suas ideias em realidade?</h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
              Entre em contato conosco e descubra como podemos ajudar a impulsionar seu negócio com soluções digitais inovadoras.
            </p>
            <Link to="/contact">
              <Button className="bg-white hover:bg-gray-100 text-indigo-800 font-medium px-8 py-3 rounded-lg text-lg">
                Fale com um especialista
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
