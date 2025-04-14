
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { MapPin, Mail, Phone, Clock, Check } from 'lucide-react';
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Entre em <span className="gradient-text">Contato</span></h2>
            <p className="text-gv-gray max-w-2xl mx-auto">
              Estamos prontos para atender às suas necessidades de desenvolvimento de software.
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
                className="bg-gv-dark p-6 rounded-lg border border-gray-800 hover:border-gv-primary transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="flex gap-4 items-start">
                  <div className="bg-gv-primary bg-opacity-20 p-3 rounded-md">
                    <MapPin className="w-6 h-6 text-gv-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Localização</h3>
                    <p className="text-gv-gray">Recife, PE, Brasil</p>
                    <p className="text-gv-gray mt-1">Av. Boa Viagem, 1234</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                variants={fadeInUp}
                className="bg-gv-dark p-6 rounded-lg border border-gray-800 hover:border-gv-primary transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="flex gap-4 items-start">
                  <div className="bg-gv-primary bg-opacity-20 p-3 rounded-md">
                    <Mail className="w-6 h-6 text-gv-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Email</h3>
                    <p className="text-gv-gray">contato@gvsoftware.tech</p>
                    <p className="text-gv-gray mt-1">suporte@gvsoftware.tech</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                variants={fadeInUp}
                className="bg-gv-dark p-6 rounded-lg border border-gray-800 hover:border-gv-primary transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="flex gap-4 items-start">
                  <div className="bg-gv-primary bg-opacity-20 p-3 rounded-md">
                    <Phone className="w-6 h-6 text-gv-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Telefone</h3>
                    <p className="text-gv-gray">(81) 99999-9999</p>
                    <p className="text-gv-gray mt-1">(81) 3333-3333</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                variants={fadeInUp}
                className="bg-gv-dark p-6 rounded-lg border border-gray-800 hover:border-gv-primary transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="flex gap-4 items-start">
                  <div className="bg-gv-primary bg-opacity-20 p-3 rounded-md">
                    <Clock className="w-6 h-6 text-gv-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Horário</h3>
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

          <motion.div 
            className="mt-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            <div className="bg-gv-dark p-6 rounded-lg border border-gray-800">
              <h3 className="text-2xl font-bold mb-6 text-center">Nossa Localização</h3>
              <div className="relative w-full h-96 rounded-lg overflow-hidden">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63201.44826788247!2d-34.921483805954895!3d-8.064745257831162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab196f88c446e5%3A0x3c9ef52922447fd4!2sRecife%2C%20PE!5e0!3m2!1spt-BR!2sbr!4v1702420651182!5m2!1spt-BR!2sbr"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
