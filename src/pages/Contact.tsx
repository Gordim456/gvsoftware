
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
import { AlertCircle, CheckCircle, Mail, Phone, MapPin } from 'lucide-react';
import SocialIcons from '../components/SocialIcons';

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
            <h1 className="text-4xl font-bold mb-4 from-indigo-600 to-purple-600 bg-gradient-to-r bg-clip-text text-transparent">
              Entre em Contato
            </h1>
            <p className="text-gv-gray max-w-2xl mx-auto">
              Precisa de ajuda com seu projeto de software? Preencha o formulário abaixo e entraremos em contato o mais breve possível.
            </p>
          </div>

          <div className="grid md:grid-cols-12 gap-12">
            {/* Info Section */}
            <div className="md:col-span-4 space-y-8">
              <div className="bg-gv-dark border border-gray-800 rounded-xl p-8 h-full">
                <h2 className="text-2xl font-bold mb-6 from-indigo-600 to-purple-500 bg-gradient-to-r bg-clip-text text-transparent">
                  Informações de Contato
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-indigo-500 mt-1 mr-3" />
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-gv-gray">contato.gvsoftware@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-indigo-500 mt-1 mr-3" />
                    <div>
                      <h3 className="font-medium">Telefone</h3>
                      <p className="text-gv-gray">(11) 95432-1234</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-indigo-500 mt-1 mr-3" />
                    <div>
                      <h3 className="font-medium">Endereço</h3>
                      <p className="text-gv-gray">São Paulo, SP - Brasil</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-800">
                  <h3 className="font-medium mb-4">Redes Sociais</h3>
                  <SocialIcons />
                </div>
              </div>
            </div>
            
            {/* Form Section */}
            <div className="md:col-span-8">
              <div className="bg-gv-dark border border-gray-800 rounded-xl p-8">
                {formSubmitted ? (
                  <div className="text-center py-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
                      <CheckCircle className="h-8 w-8 text-green-600" />
                    </div>
                    <h2 className="text-2xl font-bold mb-3">Mensagem Enviada!</h2>
                    <p className="text-gv-gray mb-6">
                      Obrigado pelo contato! Responderemos o mais breve possível.
                    </p>
                    <Button onClick={() => setFormSubmitted(false)}>
                      Enviar outra mensagem
                    </Button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold mb-6">Envie-nos uma mensagem</h2>
                    
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Nome</FormLabel>
                                <FormControl>
                                  <Input placeholder="Seu nome" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                  <Input placeholder="seu.email@exemplo.com" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        
                        <FormField
                          control={form.control}
                          name="subject"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Assunto</FormLabel>
                              <FormControl>
                                <Input placeholder="Assunto da mensagem" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Mensagem</FormLabel>
                              <FormControl>
                                <Textarea 
                                  placeholder="Digite sua mensagem..." 
                                  rows={6}
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <div className="flex items-center justify-between pt-2">
                          <div className="text-sm text-gv-gray flex items-center">
                            <AlertCircle className="h-4 w-4 mr-1" />
                            <span>Todos os campos são obrigatórios</span>
                          </div>
                          <Button 
                            type="submit" 
                            disabled={isSubmitting}
                            className="px-6"
                          >
                            {isSubmitting ? (
                              <span className="flex items-center">
                                <span className="animate-spin mr-2">●</span>
                                Enviando...
                              </span>
                            ) : (
                              <span className="flex items-center">
                                <Mail className="h-4 w-4 mr-2" />
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
