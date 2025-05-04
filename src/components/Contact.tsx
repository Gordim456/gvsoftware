
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { MapPin, Mail, Phone, CheckCircle, SendHorizontal } from 'lucide-react';
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
          
          <div className="max-w-md mx-auto text-center bg-gv-dark p-8 rounded-lg border border-gray-800">
            <div className="mb-6">
              <div className="mx-auto w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                <CheckCircle className="w-8 h-8" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-4">Mensagem Enviada!</h3>
            <p className="text-gv-gray mb-6">
              Obrigado por entrar em contato. Responderemos o mais breve possível.
            </p>
            <Button onClick={() => setFormSubmitted(false)} className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-lg">
              Enviar Nova Mensagem
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 bg-gv-darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Entre em <span className="gradient-text">Contato</span></h2>
          <p className="text-gv-gray max-w-2xl mx-auto">
            Estamos prontos para atender às suas necessidades de desenvolvimento de software.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="col-span-1 space-y-8">
            <div className="bg-gv-dark p-6 rounded-lg border border-gray-800">
              <div className="flex gap-4 items-start">
                <div className="bg-indigo-500 bg-opacity-20 p-3 rounded-md">
                  <MapPin className="w-6 h-6 text-indigo-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Localização</h3>
                  <p className="text-gv-gray">Recife, PE, Brasil</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gv-dark p-6 rounded-lg border border-gray-800">
              <div className="flex gap-4 items-start">
                <div className="bg-indigo-500 bg-opacity-20 p-3 rounded-md">
                  <Mail className="w-6 h-6 text-indigo-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Email</h3>
                  <p className="text-gv-gray">contato@gvsoftware.tech</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gv-dark p-6 rounded-lg border border-gray-800">
              <div className="flex gap-4 items-start">
                <div className="bg-indigo-500 bg-opacity-20 p-3 rounded-md">
                  <Phone className="w-6 h-6 text-indigo-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Telefone</h3>
                  <p className="text-gv-gray">(81) 99999-9999</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-span-1 lg:col-span-2">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="bg-gv-dark p-8 rounded-lg border border-gray-800">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nome</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Seu nome"
                            className="w-full border border-gray-700 bg-gv-darker focus:ring-indigo-400 focus:border-indigo-400"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-red-500" />
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
                          <Input
                            placeholder="seu@email.com"
                            type="email"
                            className="w-full border border-gray-700 bg-gv-darker focus:ring-indigo-400 focus:border-indigo-400"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-red-500" />
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className="mb-6">
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Assunto</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Como podemos ajudar?"
                            className="w-full border border-gray-700 bg-gv-darker focus:ring-indigo-400 focus:border-indigo-400"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-red-500" />
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className="mb-6">
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Mensagem</FormLabel>
                        <FormControl>
                          <Textarea
                            rows={5}
                            placeholder="Descreva sua necessidade em detalhes..."
                            className="w-full border border-gray-700 bg-gv-darker focus:ring-indigo-400 focus:border-indigo-400"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-red-500" />
                      </FormItem>
                    )}
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-3 shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 transition-all duration-300"
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
