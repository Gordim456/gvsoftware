import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { Mail, Phone, Clock, Check, Instagram, Coffee } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    document.title = 'Contato | GV Software';
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast({
        title: "Mensagem enviada",
        description: "Entraremos em contato em breve!",
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset the success state after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }, 1500);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gv-darker">
      <Navbar />
      
      {/* Fixed Social Icons */}
      <motion.div 
        className="fixed right-6 top-1/2 transform -translate-y-1/2 flex flex-col gap-4 z-50"
        animate={{
          y: [-10, 0, -10],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
           className="bg-gv-primary p-3 rounded-full hover:scale-110 transition-transform">
          <Instagram className="w-6 h-6 text-white" />
        </a>
        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer"
           className="bg-gv-primary p-3 rounded-full hover:scale-110 transition-transform">
          <Coffee className="w-6 h-6 text-white" />
        </a>
      </motion.div>

      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Entre em <span className="gradient-text">Contato</span></h2>
            <p className="text-gv-gray max-w-2xl mx-auto text-lg">
              Estamos prontos para transformar suas ideias em realidade.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div 
              className="col-span-1 space-y-8"
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.2
                  }
                }
              }}
            >
              <motion.div 
                variants={fadeInUp}
                className="bg-gv-dark p-8 rounded-lg border border-gray-800 hover:border-gv-primary transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="flex gap-6 items-center">
                  <div className="bg-gv-primary bg-opacity-20 p-4 rounded-full">
                    <Mail className="w-8 h-8 text-gv-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Email</h3>
                    <p className="text-gv-gray">contato@gvsoftware.tech</p>
                    <p className="text-gv-gray mt-1">suporte@gvsoftware.tech</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                variants={fadeInUp}
                className="bg-gv-dark p-8 rounded-lg border border-gray-800 hover:border-gv-primary transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="flex gap-6 items-center">
                  <div className="bg-gv-primary bg-opacity-20 p-4 rounded-full">
                    <Phone className="w-8 h-8 text-gv-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Telefone</h3>
                    <p className="text-gv-gray">(81) 99999-9999</p>
                    <p className="text-gv-gray mt-1">(81) 3333-3333</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                variants={fadeInUp}
                className="bg-gv-dark p-8 rounded-lg border border-gray-800 hover:border-gv-primary transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="flex gap-6 items-center">
                  <div className="bg-gv-primary bg-opacity-20 p-4 rounded-full">
                    <Clock className="w-8 h-8 text-gv-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Horário</h3>
                    <p className="text-gv-gray">Segunda - Sexta: 8h às 18h</p>
                    <p className="text-gv-gray mt-1">Sábado: 9h às 13h</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="col-span-1 lg:col-span-2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="bg-gv-dark p-8 rounded-lg border border-gray-800">
                <h3 className="text-2xl font-bold mb-6">Envie-nos uma mensagem</h3>
                
                {isSubmitted ? (
                  <motion.div 
                    className="text-center p-8"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="mx-auto w-16 h-16 bg-green-500 bg-opacity-20 rounded-full flex items-center justify-center mb-4">
                      <Check className="w-8 h-8 text-green-500" />
                    </div>
                    <h4 className="text-xl font-semibold mb-2">Mensagem Enviada!</h4>
                    <p className="text-gv-gray">Obrigado por entrar em contato. Responderemos em breve.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block mb-2 text-sm">Nome</label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Seu nome"
                          required
                          className="w-full border border-gray-700 bg-gv-darker focus:ring-gv-primary focus:border-gv-primary"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block mb-2 text-sm">Email</label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="seu@email.com"
                          required
                          className="w-full border border-gray-700 bg-gv-darker focus:ring-gv-primary focus:border-gv-primary"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block mb-2 text-sm">Assunto</label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Como podemos ajudar?"
                        required
                        className="w-full border border-gray-700 bg-gv-darker focus:ring-gv-primary focus:border-gv-primary"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block mb-2 text-sm">Mensagem</label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Descreva sua necessidade em detalhes..."
                        required
                        className="w-full border border-gray-700 bg-gv-darker focus:ring-gv-primary focus:border-gv-primary"
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-gv-primary hover:bg-indigo-600 text-white py-3"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
