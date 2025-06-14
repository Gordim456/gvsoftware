
import React, { useState } from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { submitContactForm, ContactFormData } from '@/services/contactService';
import { CheckCircle, AlertCircle, SendHorizontal } from 'lucide-react';

// Schema de validação do formulário atualizado
const formSchema = z.object({
  name: z.string().min(2, { message: "O nome deve ter pelo menos 2 caracteres." }),
  lastName: z.string().min(2, { message: "O sobrenome deve ter pelo menos 2 caracteres." }),
  phone: z.string().min(10, { message: "Insira um número de telefone válido." }),
  email: z.string().email({ message: "Email inválido." }),
  subject: z.string().min(5, { message: "O assunto deve ter pelo menos 5 caracteres." }),
  message: z.string().min(10, { message: "A mensagem deve ter pelo menos 10 caracteres." }),
});

type ContactFormProps = {
  onSuccess: () => void;
};

const ContactForm: React.FC<ContactFormProps> = ({ onSuccess }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      lastName: "",
      phone: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    try {
      const formData: ContactFormData = {
        name: values.name,
        lastName: values.lastName,
        phone: values.phone,
        email: values.email,
        subject: values.subject,
        message: values.message
      };
      
      const success = await submitContactForm(formData);
      if (success) {
        form.reset();
        onSuccess();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
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
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white font-medium">Sobrenome</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Seu sobrenome"
                    className="border-indigo-500/30 bg-indigo-900/20 backdrop-blur-sm text-white focus:ring-indigo-500 focus:border-indigo-500 h-12 rounded-xl" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage className="text-pink-400" />
              </FormItem>
            )}
          />
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
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
          
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white font-medium">Telefone</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="(00) 00000-0000"
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
  );
};

export default ContactForm;
