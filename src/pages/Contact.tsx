
import { useState, useEffect } from 'react';
import { toast } from 'sonner';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { BackgroundGradient } from '../components/BackgroundGradient';
import ContactForm from '../components/contact/ContactForm';
import ContactSuccess from '../components/contact/ContactSuccess';
import ContactInfo from '../components/contact/ContactInfo';
import SocialIcons from '../components/SocialIcons';
import { motion } from 'framer-motion';
import { MessageSquare, Zap, Shield, Clock } from 'lucide-react';

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    document.title = 'Contato | GV Software - Fale Conosco';
    setIsLoaded(true);
    
    // SEO optimization
    const meta = document.createElement('meta');
    meta.name = 'description';
    meta.content = 'Entre em contato com a GV Software - Orçamentos gratuitos, resposta em 24h e suporte completo para seu projeto digital.';
    if (!document.querySelector('meta[name="description"]')) {
      document.head.appendChild(meta);
    }
  }, []);

  const handleSuccess = () => {
    setFormSubmitted(true);
    toast.success("Mensagem enviada com sucesso!", {
      description: "Entraremos em contato em breve.",
    });
  };

  // Modern hero section
  const HeroSection = () => (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="w-20 h-20 mx-auto bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mb-8 shadow-2xl"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
          >
            <MessageSquare className="w-10 h-10 text-white" />
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent">
            Entre em <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">Contato</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Transformamos suas ideias em soluções digitais inovadoras. Vamos conversar sobre seu próximo projeto.
          </p>
        </motion.div>

        {/* Benefits Cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {[
            { icon: <Clock />, title: "Resposta em 24h", description: "Respondemos rapidamente" },
            { icon: <Shield />, title: "Orçamento Gratuito", description: "Sem compromisso inicial" },
            { icon: <Zap />, title: "Suporte Completo", description: "Acompanhamento total" }
          ].map((benefit, index) => (
            <div key={index} className="text-center p-6 bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-700/50">
              <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
              <p className="text-gray-400 text-sm">{benefit.description}</p>
            </div>
          ))}
        </motion.div>

        {/* Contact Form and Info Grid */}
        <div className="grid md:grid-cols-12 gap-8 lg:gap-12">
          {/* Contact Info */}
          <motion.div 
            className="md:col-span-5 space-y-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <ContactInfo />
          </motion.div>
          
          {/* Contact Form */}
          <motion.div 
            className="md:col-span-7"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/50 backdrop-blur-sm p-8 rounded-3xl border border-slate-700/50 shadow-2xl">
              {formSubmitted ? (
                <ContactSuccess onReset={() => setFormSubmitted(false)} />
              ) : (
                <>
                  <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    Envie sua <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">mensagem</span>
                  </h2>
                  <ContactForm onSuccess={handleSuccess} />
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );

  return (
    <div className={`min-h-screen flex flex-col transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Navbar />
      <BackgroundGradient>
        <HeroSection />
      </BackgroundGradient>
      <SocialIcons />
      <Footer />
    </div>
  );
};

export default Contact;
