
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageCircle, Send, CheckCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SocialIcons from '../components/SocialIcons';
import ChatBot from '../components/chat/ChatBot';

const Contact = () => {
  React.useEffect(() => {
    document.title = 'Contato | GV Software - Entre em Contato';
  }, []);

  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: <Mail />,
      title: "Email",
      value: "contato.gvsoftware@gmail.com",
      link: "mailto:contato.gvsoftware@gmail.com",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Phone />,
      title: "Telefone",
      value: "(17) 99785-3416",
      link: "tel:+5517997853416",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <MessageCircle />,
      title: "WhatsApp",
      value: "(17) 99785-3416",
      link: "https://wa.me/5517997853416",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <MapPin />,
      title: "Localização",
      value: "São Paulo, SP",
      link: "#",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const services = [
    "Desenvolvimento Web",
    "Aplicativos Mobile",
    "E-commerce",
    "Sistema de Gestão",
    "API e Backend",
    "Consultoria Tech",
    "Outro"
  ];

  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950"></div>
        
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent">
              Entre em <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">Contato</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Vamos conversar sobre seu projeto! Estamos prontos para transformar suas ideias em realidade digital.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <motion.section 
        className="py-20 bg-slate-950 relative overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-600 rounded-full filter blur-3xl animate-pulse"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.link}
                className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-sm p-8 rounded-xl border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-300 group text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform`}>
                  {info.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{info.title}</h3>
                <p className="text-gray-300">{info.value}</p>
              </motion.a>
            ))}
          </div>

          {/* Contact Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <motion.div
              className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-sm p-8 rounded-xl border border-slate-700/50"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-white mb-8">Envie sua Mensagem</h2>
              
              {isSubmitted ? (
                <motion.div
                  className="text-center py-12"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Mensagem Enviada!</h3>
                  <p className="text-gray-300 mb-6">Obrigado pelo contato! Retornaremos em breve.</p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300"
                  >
                    Enviar Nova Mensagem
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white font-medium mb-2">Nome *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-slate-800/50 border border-slate-600 rounded-lg py-3 px-4 text-white focus:border-indigo-500 focus:outline-none transition-colors"
                        placeholder="Seu nome completo"
                      />
                    </div>
                    <div>
                      <label className="block text-white font-medium mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-slate-800/50 border border-slate-600 rounded-lg py-3 px-4 text-white focus:border-indigo-500 focus:outline-none transition-colors"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white font-medium mb-2">Telefone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-slate-800/50 border border-slate-600 rounded-lg py-3 px-4 text-white focus:border-indigo-500 focus:outline-none transition-colors"
                        placeholder="(11) 99999-9999"
                      />
                    </div>
                    <div>
                      <label className="block text-white font-medium mb-2">Serviço de Interesse</label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full bg-slate-800/50 border border-slate-600 rounded-lg py-3 px-4 text-white focus:border-indigo-500 focus:outline-none transition-colors"
                      >
                        <option value="">Selecione um serviço</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">Mensagem *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full bg-slate-800/50 border border-slate-600 rounded-lg py-3 px-4 text-white focus:border-indigo-500 focus:outline-none transition-colors resize-none"
                      placeholder="Conte-nos sobre seu projeto..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed text-white py-4 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        Enviar Mensagem
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>

            {/* Additional Info */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-sm p-8 rounded-xl border border-slate-700/50">
                <h3 className="text-2xl font-bold text-white mb-6">Por que nos escolher?</h3>
                <ul className="space-y-4">
                  {[
                    "Experiência comprovada em projetos inovadores",
                    "Tecnologias modernas e atualizadas",
                    "Atendimento personalizado e dedicado",
                    "Prazos respeitados e qualidade garantida",
                    "Suporte contínuo pós-entrega"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-sm p-8 rounded-xl border border-slate-700/50">
                <h3 className="text-2xl font-bold text-white mb-6">Horário de Atendimento</h3>
                <div className="space-y-3 text-gray-300">
                  <div className="flex justify-between">
                    <span>Segunda - Sexta:</span>
                    <span>8h - 18h</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sábado:</span>
                    <span>9h - 14h</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Domingo:</span>
                    <span>Fechado</span>
                  </div>
                </div>
                <p className="text-sm text-gray-400 mt-4">
                  * Atendimento de emergência disponível 24/7 para clientes premium
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <Footer />
      <SocialIcons />
      <ChatBot />
    </div>
  );
};

export default Contact;
