
import { useState } from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { toast } from 'sonner';
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { BackgroundGradient } from '../components/BackgroundGradient';
import { submitContactForm, ContactFormData } from '../services/contactService';
import { AlertCircle, CheckCircle, Mail, Phone, SendHorizontal } from 'lucide-react';

// Schema de validação do formulário
const formSchema = z.object({
  name: z.string().min(3, { message: "O nome deve ter pelo menos 3 caracteres." }),
  email: z.string().email({ message: "Email inválido." }),
  subject: z.string().min(5, { message: "O assunto deve ter pelo menos 5 caracteres." }),
  message: z.string().min(10, { message: "A mensagem deve ter pelo menos 10 caracteres." }),
});

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // useForm hook com validação zod
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  // Handle form submission
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    try {
      // Garantindo que todos os campos obrigatórios estejam presentes
      const formData: ContactFormData = {
        name: values.name,
        email: values.email,
        subject: values.subject,
        message: values.message
      };
      
      const success = await submitContactForm(formData);
      if (success) {
        setFormSubmitted(true);
        toast.success("Mensagem enviada com sucesso!", {
          description: "Entraremos em contato em breve.",
        });
        form.reset();
      }
      
      // Scroll to top after submission
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Erro ao enviar mensagem", {
        description: "Por favor tente novamente mais tarde.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <BackgroundGradient>
        <div className="container mx-auto px-4 py-24">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-400 via-purple-500 to-indigo-600 bg-clip-text text-transparent">
              Entre em Contato
            </h1>
            <p className="text-gv-gray max-w-2xl mx-auto text-lg">
              Transformamos suas ideias em soluções digitais inovadoras. Fale conosco e descubra como podemos ajudar.
            </p>
          </div>

          <div className="grid md:grid-cols-12 gap-8 lg:gap-12">
            {/* Info Section */}
            <div className="md:col-span-5 space-y-6">
              <div className="bg-gradient-to-br from-indigo-900/30 to-purple-900/20 backdrop-blur-sm p-8 rounded-2xl border border-indigo-500/20 shadow-xl h-full">
                <h2 className="text-2xl md:text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                  Informações de Contato
                </h2>
                
                <div className="space-y-8">
                  <div className="flex items-start space-x-5">
                    <div className="shrink-0">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-purple-500/30">
                        <Mail className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-white">Email</h3>
                      <p className="text-indigo-200">contato.gvsoftware@gmail.com</p>
                      <a href="mailto:contato.gvsoftware@gmail.com" className="inline-block mt-3 text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors">
                        Enviar email →
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-5">
                    <div className="shrink-0">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-purple-500/30">
                        <Phone className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-white">Telefone</h3>
                      <p className="text-indigo-200">(11) 95432-1234</p>
                      <a href="tel:+5511954321234" className="inline-block mt-3 text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors">
                        Ligar agora →
                      </a>
                    </div>
                  </div>
                  
                  <div className="bg-indigo-900/30 p-6 rounded-xl border border-indigo-500/30 mt-12">
                    <h3 className="text-xl font-semibold mb-4 text-white">Horário de Atendimento</h3>
                    <div className="space-y-2 text-indigo-200">
                      <div className="flex justify-between">
                        <span>Segunda - Sexta:</span>
                        <span className="font-medium text-white">9:00 - 18:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sábado:</span>
                        <span className="font-medium text-white">10:00 - 14:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Domingo:</span>
                        <span className="font-medium text-white">Fechado</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Form Section */}
            <div className="md:col-span-7">
              <div className="bg-gradient-to-br from-indigo-900/30 to-purple-900/20 backdrop-blur-sm p-8 rounded-2xl border border-indigo-500/20 shadow-xl">
                {formSubmitted ? (
                  <div className="text-center py-12">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 text-white shadow-lg shadow-green-500/30 mb-6">
                      <CheckCircle className="h-10 w-10" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Mensagem Enviada!</h2>
                    <p className="text-indigo-200 mb-8 text-lg">
                      Agradecemos seu contato! Nossa equipe responderá o mais breve possível.
                    </p>
                    <Button 
                      onClick={() => setFormSubmitted(false)} 
                      className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-lg shadow-indigo-600/30 px-8 py-6 text-lg font-medium rounded-xl transition-all duration-300 hover:scale-105"
                    >
                      Enviar nova mensagem
                    </Button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl md:text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                      Envie-nos uma mensagem
                    </h2>
                    
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-white font-medium">Nome</FormLabel>
                                <FormControl>
                                  <Input 
                                    placeholder="Seu nome"
                                    className="border-indigo-500/30 bg-indigo-900/20 backdrop-blur-sm text-white focus:ring-indigo-500 focus:border-indigo-500 h-12 rounded-xl" 
                                    {...field} 
                                  />
                                </FormControl>
                                <FormMessage className="text-pink-400" />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-white font-medium">Email</FormLabel>
                                <FormControl>
                                  <Input 
                                    placeholder="seu.email@exemplo.com"
                                    className="border-indigo-500/30 bg-indigo-900/20 backdrop-blur-sm text-white focus:ring-indigo-500 focus:border-indigo-500 h-12 rounded-xl" 
                                    {...field} 
                                  />
                                </FormControl>
                                <FormMessage className="text-pink-400" />
                              </FormItem>
                            )}
                          />
                        </div>
                        
                        <FormField
                          control={form.control}
                          name="subject"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-white font-medium">Assunto</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="Assunto da mensagem" 
                                  className="border-indigo-500/30 bg-indigo-900/20 backdrop-blur-sm text-white focus:ring-indigo-500 focus:border-indigo-500 h-12 rounded-xl" 
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage className="text-pink-400" />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-white font-medium">Mensagem</FormLabel>
                              <FormControl>
                                <Textarea 
                                  placeholder="Digite sua mensagem..." 
                                  rows={6}
                                  className="border-indigo-500/30 bg-indigo-900/20 backdrop-blur-sm text-white focus:ring-indigo-500 focus:border-indigo-500 min-h-[150px] resize-none rounded-xl" 
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage className="text-pink-400" />
                            </FormItem>
                          )}
                        />
                        
                        <div className="flex items-center justify-between pt-4">
                          <div className="text-sm text-indigo-200 flex items-center">
                            <AlertCircle className="h-4 w-4 mr-1" />
                            <span>Todos os campos são obrigatórios</span>
                          </div>
                          
                          <Button 
                            type="submit" 
                            disabled={isSubmitting}
                            className="px-8 py-6 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium text-lg rounded-xl shadow-lg shadow-indigo-600/30 transition-all duration-300 hover:scale-105"
                            size="lg"
                          >
                            {isSubmitting ? (
                              <span className="flex items-center">
                                <span className="animate-spin mr-2">●</span>
                                Enviando...
                              </span>
                            ) : (
                              <span className="flex items-center">
                                <SendHorizontal className="h-5 w-5 mr-2" />
                                Enviar mensagem
                              </span>
                            )}
                          </Button>
                        </div>
                      </form>
                    </Form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </BackgroundGradient>
      <Footer />
    </div>
  );
};

export default Contact;
