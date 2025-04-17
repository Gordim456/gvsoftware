import { useEffect, useState, useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { 
  Code, Layout, Database, PenTool, Settings, BarChart, Server, 
  Shield, Cloud, Globe, Smartphone, Tv, CheckCircle, ArrowRight,
  Users, Clock, Award
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';

const ServicesCard = ({ 
  icon, 
  title, 
  description, 
  index,
  features,
  cta 
}: { 
  icon: React.ReactNode, 
  title: string, 
  description: string,
  index: number,
  features: string[],
  cta: string
}) => {
  return (
    <motion.div 
      className="bg-gv-darker p-6 md:p-8 rounded-xl border border-gray-800 hover:border-indigo-500 transition-all duration-500 group overflow-hidden relative"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.5,
        delay: index * 0.1
      }}
      whileHover={{ 
        y: -10, 
        boxShadow: "0 25px 50px -12px rgba(79, 70, 229, 0.25)",
        transition: { duration: 0.3 }
      }}
    >
      <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-indigo-500 rounded-full opacity-0 group-hover:opacity-5 transition-all duration-500 transform group-hover:scale-150"></div>
      
      <div className="mb-6 bg-opacity-10 bg-indigo-500 p-4 rounded-xl w-fit group-hover:bg-indigo-600 group-hover:bg-opacity-100 transition-all duration-500">
        {icon}
      </div>
      
      <h3 className="text-xl font-semibold mb-3 group-hover:text-indigo-300 transition-colors duration-300">{title}</h3>
      <p className="text-gv-gray group-hover:text-gray-300 transition-colors duration-300 mb-6">{description}</p>
      
      <ul className="space-y-2 mb-6">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start">
            <CheckCircle size={16} className="text-indigo-500 mr-2 mt-1 flex-shrink-0" />
            <span className="text-sm text-gv-gray">{feature}</span>
          </li>
        ))}
      </ul>
      
      <a href="#contact" className="flex items-center text-indigo-400 hover:text-indigo-300 transition-colors text-sm mt-auto font-medium">
        {cta} <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform duration-300" />
      </a>
      
      <div className="mt-6 h-1 w-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full group-hover:w-16 transition-all duration-500"></div>
    </motion.div>
  );
};

const StatsCard = ({ value, label, icon, index }: { value: string, label: string, icon: React.ReactNode, index: number }) => {
  return (
    <motion.div 
      className="bg-gv-dark border border-gray-800 p-6 rounded-xl relative overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 + (index * 0.1) }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <div className="absolute -right-3 -top-3 p-6 bg-indigo-500/5 rounded-full">
        {icon}
      </div>
      <h3 className="text-3xl md:text-4xl font-bold gradient-text mb-1">{value}</h3>
      <p className="text-gv-gray">{label}</p>
    </motion.div>
  );
};

const Services = () => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5], [50, 0]);
  
  useEffect(() => {
    document.title = 'Serviços | GV Software';
    const timer = setTimeout(() => setIsInView(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const services = [
    {
      icon: <Code className="w-6 h-6 text-indigo-400 group-hover:text-white transition-colors duration-300" />,
      title: "Desenvolvimento Web",
      description: "Construímos sites responsivos, rápidos e otimizados para SEO que impressionam seus clientes.",
      features: [
        "Design responsivo para todos dispositivos",
        "Otimização para mecanismos de busca",
        "Integração com APIs de terceiros",
        "Painel administrativo personalizável"
      ],
      cta: "Conheça nossas soluções"
    },
    {
      icon: <Smartphone className="w-6 h-6 text-indigo-400 group-hover:text-white transition-colors duration-300" />,
      title: "Aplicativos Mobile",
      description: "Desenvolvemos aplicativos nativos e híbridos que oferecem experiências excepcionais.",
      features: [
        "Apps para iOS e Android",
        "UI/UX de alta performance",
        "Integração com serviços em nuvem",
        "Notificações push e geolocalização"
      ],
      cta: "Conheça nossas soluções"
    },
    {
      icon: <PenTool className="w-6 h-6 text-indigo-400 group-hover:text-white transition-colors duration-300" />,
      title: "UI/UX Design",
      description: "Criamos interfaces intuitivas e experiências de usuário que encantam e convertem.",
      features: [
        "Pesquisa de usuários e personas",
        "Wireframes e protótipos interativos",
        "Design systems completos",
        "Testes de usabilidade"
      ],
      cta: "Conheça nossas soluções"
    },
    {
      icon: <Database className="w-6 h-6 text-indigo-400 group-hover:text-white transition-colors duration-300" />,
      title: "Banco de Dados",
      description: "Projetamos e implementamos soluções de banco de dados eficientes e escaláveis.",
      features: [
        "Modelagem de dados otimizada",
        "Bancos SQL e NoSQL",
        "Migração e integração de dados",
        "Monitoramento de performance"
      ],
      cta: "Conheça nossas soluções"
    },
    {
      icon: <Cloud className="w-6 h-6 text-indigo-400 group-hover:text-white transition-colors duration-300" />,
      title: "Cloud Computing",
      description: "Implementamos soluções em nuvem seguras, eficientes e escaláveis para seu negócio.",
      features: [
        "AWS, Google Cloud e Azure",
        "Infraestrutura como código",
        "Serverless e containers",
        "Automação e CI/CD"
      ],
      cta: "Conheça nossas soluções"
    },
    {
      icon: <Shield className="w-6 h-6 text-indigo-400 group-hover:text-white transition-colors duration-300" />,
      title: "Cibersegurança",
      description: "Protegemos seus dados e sistemas contra ameaças digitais com soluções avançadas.",
      features: [
        "Auditorias de segurança",
        "Implementação de GDPR/LGPD",
        "Testes de penetração",
        "Resposta a incidentes"
      ],
      cta: "Conheça nossas soluções"
    },
    {
      icon: <Settings className="w-6 h-6 text-indigo-400 group-hover:text-white transition-colors duration-300" />,
      title: "Manutenção e Suporte",
      description: "Oferecemos suporte técnico e manutenção contínua para suas aplicações.",
      features: [
        "Suporte 24/7",
        "Monitoramento proativo",
        "Atualizações de segurança",
        "Backups automáticos"
      ],
      cta: "Conheça nossas soluções"
    },
    {
      icon: <BarChart className="w-6 h-6 text-indigo-400 group-hover:text-white transition-colors duration-300" />,
      title: "Consultoria em TI",
      description: "Ajudamos sua empresa a tomar as melhores decisões tecnológicas para crescer.",
      features: [
        "Análise de infraestrutura",
        "Roadmap tecnológico",
        "Transformação digital",
        "Otimização de custos"
      ],
      cta: "Conheça nossas soluções"
    },
    {
      icon: <Globe className="w-6 h-6 text-indigo-400 group-hover:text-white transition-colors duration-300" />,
      title: "Marketing Digital",
      description: "Estratégias completas para destacar sua marca no ambiente digital com resultados.",
      features: [
        "SEO e SEM",
        "Gestão de redes sociais",
        "Email marketing",
        "Analytics e relatórios"
      ],
      cta: "Conheça nossas soluções"
    }
  ];

  return (
    <div className="min-h-screen bg-gv-dark">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 pt-32 relative overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob"></div>
        <div className="absolute top-32 right-10 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob animation-delay-2000"></div>
        
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
              Soluções digitais inovadoras e personalizadas para impulsionar o crescimento do seu negócio.
            </p>
          </motion.div>
          
          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            <StatsCard 
              value="+100" 
              label="Projetos entregues" 
              icon={<Layout className="w-10 h-10 text-indigo-500/40" />}
              index={0}
            />
            <StatsCard 
              value="+50" 
              label="Clientes satisfeitos" 
              icon={<Users className="w-10 h-10 text-indigo-500/40" />}
              index={1}
            />
            <StatsCard 
              value="+5" 
              label="Anos de experiência" 
              icon={<Clock className="w-10 h-10 text-indigo-500/40" />}
              index={2}
            />
            <StatsCard 
              value="+15" 
              label="Especialistas" 
              icon={<Award className="w-10 h-10 text-indigo-500/40" />}
              index={3}
            />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServicesCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                index={index}
                features={service.features}
                cta={service.cta}
              />
            ))}
          </div>
          
          <motion.div 
            className="mt-24 bg-gv-darker p-10 rounded-xl border border-gray-800 relative overflow-hidden"
            ref={ref}
            initial={{ opacity: 0, y: 100 }}
            style={{ opacity, y }}
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
          
          {/* CTA Section */}
          <motion.div 
            className="mt-20 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold mb-6">Pronto para <span className="gradient-text">transformar</span> seu negócio?</h3>
            <p className="text-gv-gray max-w-2xl mx-auto mb-8">
              Entre em contato conosco hoje mesmo e descubra como podemos ajudar a impulsionar seu projeto com nossas soluções digitais.
            </p>
            <Button 
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-6 rounded-full text-lg font-medium"
              size="lg"
            >
              Fale Conosco
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
