
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { Mail, Phone, CheckCircle, SendHorizontal } from 'lucide-react';
import { submitContactForm, ContactFormData } from '@/services/contactService';

// Define o schema com regras de validação
const formSchema = z.object({
  name: z.string().min(2, { message: "Nome deve ter pelo menos 2 caracteres" }).max(50),
  email: z.string().email({ message: "Email inválido" }),
  subject: z.string().min(3, { message: "Assunto deve ter pelo menos 3 caracteres" }).max(100),
  message: z.string().min(10, { message: "Mensagem deve ter pelo menos 10 caracteres" }).max(1000)
});

// Tipo para os valores do formulário
type FormValues = z.infer<typeof formSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Inicializa o formulário com validação zod
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      // Garante que todos os campos obrigatórios estejam presentes
      const formData: ContactFormData = {
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message
      };
      
      const success = await submitContactForm(formData);
      
      if (success) {
        setFormSubmitted(true);
        toast.success("Mensagem enviada", {
          description: "Entraremos em contato em breve!",
        });
        form.reset();
      }
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      toast.error("Erro ao enviar mensagem", {
        description: "Por favor tente novamente.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (formSubmitted) {
    return (
      <section id="contact" className="py-20 bg-gv-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Entre em <span className="gradient-text">Contato</span></h2>
            <p className="text-gv-gray max-w-2xl mx-auto">
              Estamos prontos para atender às suas necessidades de desenvolvimento de software.
            </p>
          </div>
          
          <div className="max-w-md mx-auto text-center bg-gradient-to-br from-indigo-900/30 to-purple-900/20 backdrop-blur-sm p-10 rounded-2xl border border-indigo-500/20 shadow-xl">
            <div className="mb-6">
              <div className="mx-auto w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 text-white rounded-full flex items-center justify-center shadow-lg shadow-green-500/30">
                <CheckCircle className="w-10 h-10" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-white">Mensagem Enviada!</h3>
            <p className="text-indigo-200 mb-8">
              Obrigado por entrar em contato. Responderemos o mais breve possível.
            </p>
            <Button 
              onClick={() => setFormSubmitted(false)} 
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-lg shadow-indigo-600/30 px-8 py-6 text-lg font-medium rounded-xl transition-all duration-300 hover:scale-105"
            >
              Enviar Nova Mensagem
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 bg-gv-darker relative overflow-hidden">
      {/* Animated background gradients */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-600 rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Entre em <span className="bg-gradient-to-r from-indigo-400 via-purple-500 to-indigo-600 bg-clip-text text-transparent">Contato</span></h2>
          <p className="text-gv-gray max-w-2xl mx-auto text-lg">
            Estamos prontos para transformar suas ideias em soluções digitais de alto impacto.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-gradient-to-br from-indigo-900/30 to-purple-900/20 backdrop-blur-sm p-8 rounded-2xl border border-indigo-500/20 shadow-xl transform transition-all duration-300 hover:translate-y-[-5px]">
              <div className="space-y-8">
                <div className="flex items-start space-x-5">
                  <div className="shrink-0">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-purple-500/30">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">Email</h3>
                    <p className="text-indigo-200">contato@gvsoftware.tech</p>
                    <a href="mailto:contato@gvsoftware.tech" className="inline-block mt-3 text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors">
                      Enviar email →
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-5">
                  <div className="shrink-0">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-purple-500/30">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">Telefone</h3>
                    <p className="text-indigo-200">(81) 99999-9999</p>
                    <a href="tel:+5581999999999" className="inline-block mt-3 text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors">
                      Ligar agora →
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-indigo-900/30 to-purple-900/20 backdrop-blur-sm p-8 rounded-2xl border border-indigo-500/20 shadow-xl">
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
          
          <div className="lg:col-span-3">
            <Form {...form}>
              <form 
                onSubmit={form.handleSubmit(onSubmit)} 
                className="bg-gradient-to-br from-indigo-900/30 to-purple-900/20 backdrop-blur-sm p-8 md:p-10 rounded-2xl border border-indigo-500/20 shadow-xl"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
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
                            placeholder="seu@email.com"
                            type="email"
                            className="border-indigo-500/30 bg-indigo-900/20 backdrop-blur-sm text-white focus:ring-indigo-500 focus:border-indigo-500 h-12 rounded-xl"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-pink-400" />
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className="mb-8">
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white font-medium">Assunto</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Como podemos ajudar?"
                            className="border-indigo-500/30 bg-indigo-900/20 backdrop-blur-sm text-white focus:ring-indigo-500 focus:border-indigo-500 h-12 rounded-xl"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-pink-400" />
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className="mb-8">
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white font-medium">Mensagem</FormLabel>
                        <FormControl>
                          <Textarea
                            rows={5}
                            placeholder="Descreva sua necessidade em detalhes..."
                            className="border-indigo-500/30 bg-indigo-900/20 backdrop-blur-sm text-white focus:ring-indigo-500 focus:border-indigo-500 min-h-[150px] resize-none rounded-xl"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-pink-400" />
                      </FormItem>
                    )}
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full font-medium flex items-center justify-center gap-2 text-lg h-14 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-lg shadow-indigo-600/30 transition-all duration-300 hover:scale-[1.02]"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <span className="animate-spin mr-2">●</span>
                      Enviando...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      <SendHorizontal className="w-5 h-5 mr-2" />
                      Enviar Mensagem
                    </span>
                  )}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
