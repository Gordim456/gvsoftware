import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { toast } from 'sonner';
import { Mail, Phone, Clock, Check, MessageSquare, User, AtSign } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { submitContactForm } from '@/services/contactService';
import SocialIcons from '../components/SocialIcons';

const Contact = () => {
  const { toast: hookToast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [formErrors, setFormErrors] = useState<{[key: string]: string}>({});

  const formRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(formRef, { once: true, margin: "-100px" });

  useEffect(() => {
    document.title = 'Contato | GV Software';
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear the error for this field when the user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const errors: {[key: string]: string} = {};
    
    if (!formData.name.trim()) {
      errors.name = 'Nome é obrigatório';
    } else if (formData.name.trim().length < 2) {
      errors.name = 'Nome deve ter pelo menos 2 caracteres';
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Email é obrigatório';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email inválido';
    }
    
    if (!formData.subject.trim()) {
      errors.subject = 'Assunto é obrigatório';
    } else if (formData.subject.trim().length < 3) {
      errors.subject = 'Assunto deve ter pelo menos 3 caracteres';
    }
    
    if (!formData.message.trim()) {
      errors.message = 'Mensagem é obrigatória';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Mensagem deve ter pelo menos 10 caracteres';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast("Por favor, corrija os erros no formulário", {
        description: "Alguns campos precisam ser preenchidos corretamente.",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const success = await submitContactForm(formData);
      
      if (success) {
        setIsSubmitted(true);
        hookToast({
          title: "Mensagem enviada",
          description: "Entraremos em contato em breve!",
        });
        
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        
        // Reset the success state after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      }
    } catch (error) {
      console.error("Error in form submission:", error);
      hookToast({
        title: "Erro ao enviar mensagem",
        description: "Por favor, tente novamente mais tarde.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <motion.div 
      className="min-h-screen bg-gv-darker"
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar />
      
      {/* Social Icons */}
      <SocialIcons />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Decorative Blobs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob"></div>
        <div className="absolute bottom-40 right-10 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob animation-delay-2000"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="w-16 h-16 mx-auto bg-indigo-500 bg-opacity-20 rounded-full flex items-center justify-center mb-6"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              <MessageSquare className="w-8 h-8 text-indigo-400" />
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Entre em <span className="gradient-text">Contato</span></h2>
            <p className="text-gv-gray max-w-2xl mx-auto text-lg">
              Estamos prontos para transformar suas ideias em realidade. Entre em contato e inicie seu projeto.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Contact Information */}
            <motion.div 
              className="col-span-1 lg:col-span-2 space-y-8"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              <motion.div 
                variants={fadeInUp}
                className="bg-gv-dark p-8 rounded-xl border border-gray-800 hover:border-indigo-500/50 transition-all duration-300 group"
                whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(79, 70, 229, 0.2)" }}
              >
                <div className="flex gap-6 items-start">
                  <motion.div 
                    className="bg-indigo-500 bg-opacity-20 p-4 rounded-full group-hover:bg-indigo-500 group-hover:bg-opacity-100 transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Mail className="w-8 h-8 text-indigo-500 group-hover:text-white transition-colors duration-300" />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Email</h3>
                    <p className="text-gv-gray">contato@gvsoftware.tech</p>
                    <p className="text-gv-gray mt-1">suporte@gvsoftware.tech</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                variants={fadeInUp}
                className="bg-gv-dark p-8 rounded-xl border border-gray-800 hover:border-indigo-500/50 transition-all duration-300 group"
                whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(79, 70, 229, 0.2)" }}
              >
                <div className="flex gap-6 items-start">
                  <motion.div 
                    className="bg-indigo-500 bg-opacity-20 p-4 rounded-full group-hover:bg-indigo-500 group-hover:bg-opacity-100 transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Phone className="w-8 h-8 text-indigo-500 group-hover:text-white transition-colors duration-300" />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Telefone</h3>
                    <p className="text-gv-gray">(81) 99999-9999</p>
                    <p className="text-gv-gray mt-1">(81) 3333-3333</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                variants={fadeInUp}
                className="bg-gv-dark p-8 rounded-xl border border-gray-800 hover:border-indigo-500/50 transition-all duration-300 group"
                whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(79, 70, 229, 0.2)" }}
              >
                <div className="flex gap-6 items-start">
                  <motion.div 
                    className="bg-indigo-500 bg-opacity-20 p-4 rounded-full group-hover:bg-indigo-500 group-hover:bg-opacity-100 transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Clock className="w-8 h-8 text-indigo-500 group-hover:text-white transition-colors duration-300" />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Horário</h3>
                    <p className="text-gv-gray">Segunda - Sexta: 8h às 18h</p>
                    <p className="text-gv-gray mt-1">Sábado: 9h às 13h</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div 
              className="col-span-1 lg:col-span-3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              ref={formRef}
            >
              <div className="bg-gv-dark p-8 rounded-xl border border-gray-800 hover:border-indigo-500/50 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-6">
                  <span className="gradient-text">Envie-nos</span> uma mensagem
                </h3>
                
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
                  <motion.form 
                    onSubmit={handleSubmit} 
                    className="space-y-6"
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={containerVariants}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <motion.div variants={fadeInUp}>
                        <label htmlFor="name" className="block mb-2 text-sm">Nome</label>
                        <div className="relative">
                          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                            <User size={18} />
                          </div>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Seu nome"
                            className={`pl-10 w-full border ${formErrors.name ? 'border-red-500' : 'border-gray-700'} bg-gv-darker focus:ring-indigo-500 focus:border-indigo-500`}
                          />
                        </div>
                        {formErrors.name && <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>}
                      </motion.div>
                      <motion.div variants={fadeInUp}>
                        <label htmlFor="email" className="block mb-2 text-sm">Email</label>
                        <div className="relative">
                          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                            <AtSign size={18} />
                          </div>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="seu@email.com"
                            className={`pl-10 w-full border ${formErrors.email ? 'border-red-500' : 'border-gray-700'} bg-gv-darker focus:ring-indigo-500 focus:border-indigo-500`}
                          />
                        </div>
                        {formErrors.email && <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>}
                      </motion.div>
                    </div>
                    
                    <motion.div variants={fadeInUp}>
                      <label htmlFor="subject" className="block mb-2 text-sm">Assunto</label>
                      <div className="relative">
                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                          <MessageSquare size={18} />
                        </div>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="Como podemos ajudar?"
                          className={`pl-10 w-full border ${formErrors.subject ? 'border-red-500' : 'border-gray-700'} bg-gv-darker focus:ring-indigo-500 focus:border-indigo-500`}
                        />
                      </div>
                      {formErrors.subject && <p className="text-red-500 text-sm mt-1">{formErrors.subject}</p>}
                    </motion.div>
                    
                    <motion.div variants={fadeInUp}>
                      <label htmlFor="message" className="block mb-2 text-sm">Mensagem</label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Descreva sua necessidade em detalhes..."
                        className={`w-full border ${formErrors.message ? 'border-red-500' : 'border-gray-700'} bg-gv-darker focus:ring-indigo-500 focus:border-indigo-500`}
                      />
                      {formErrors.message && <p className="text-red-500 text-sm mt-1">{formErrors.message}</p>}
                    </motion.div>
                    
                    <motion.div variants={fadeInUp}>
                      <Button 
                        type="submit" 
                        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl flex items-center justify-center gap-2"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Enviando...' : (
                          <>
                            Enviar Mensagem <Send className="w-4 h-4" />
                          </>
                        )}
                      </Button>
                    </motion.div>
                  </motion.form>
                )}
              </div>
            </motion.div>
          </div>
          
          {/* FAQ Section */}
          <motion.div 
            className="mt-24"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4">Perguntas <span className="gradient-text">Frequentes</span></h3>
              <p className="text-gv-gray max-w-2xl mx-auto">
                Esclarecemos as dúvidas mais comuns sobre nossos serviços e processos.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div 
                className="bg-gv-dark p-6 rounded-xl border border-gray-800 hover:border-indigo-500/50 transition-all duration-300"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <h4 className="text-xl font-semibold mb-3">Quanto tempo leva para desenvolver um site?</h4>
                <p className="text-gv-gray">
                  O prazo varia de acordo com a complexidade do projeto. Websites simples podem levar de 2 a 4 semanas, enquanto projetos mais complexos podem levar de 2 a 6 meses.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-gv-dark p-6 rounded-xl border border-gray-800 hover:border-indigo-500/50 transition-all duration-300"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <h4 className="text-xl font-semibold mb-3">Como funciona o processo de desenvolvimento?</h4>
                <p className="text-gv-gray">
                  Nosso processo inclui análise de requisitos, planejamento, design, desenvolvimento, testes e lançamento. Mantemos comunicação constante com o cliente durante todas as etapas.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-gv-dark p-6 rounded-xl border border-gray-800 hover:border-indigo-500/50 transition-all duration-300"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h4 className="text-xl font-semibold mb-3">Qual é o investimento para um projeto?</h4>
                <p className="text-gv-gray">
                  O custo varia de acordo com as necessidades específicas do projeto. Trabalhamos com orçamentos personalizados após entender completamente os requisitos do cliente.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-gv-dark p-6 rounded-xl border border-gray-800 hover:border-indigo-500/50 transition-all duration-300"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <h4 className="text-xl font-semibold mb-3">Oferecem suporte após o lançamento?</h4>
                <p className="text-gv-gray">
                  Sim, oferecemos pacotes de manutenção e suporte contínuo para garantir que sua solução digital permaneça atualizada e funcionando perfeitamente.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </motion.div>
  );
};

export default Contact;
