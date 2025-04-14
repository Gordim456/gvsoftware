
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { MapPin, Mail, Phone } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    }, 1500);
  };

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
                <div className="bg-gv-primary bg-opacity-20 p-3 rounded-md">
                  <MapPin className="w-6 h-6 text-gv-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Localização</h3>
                  <p className="text-gv-gray">Recife, PE, Brasil</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gv-dark p-6 rounded-lg border border-gray-800">
              <div className="flex gap-4 items-start">
                <div className="bg-gv-primary bg-opacity-20 p-3 rounded-md">
                  <Mail className="w-6 h-6 text-gv-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Email</h3>
                  <p className="text-gv-gray">contato@gvsoftware.tech</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gv-dark p-6 rounded-lg border border-gray-800">
              <div className="flex gap-4 items-start">
                <div className="bg-gv-primary bg-opacity-20 p-3 rounded-md">
                  <Phone className="w-6 h-6 text-gv-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Telefone</h3>
                  <p className="text-gv-gray">(81) 99999-9999</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-span-1 lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-gv-dark p-8 rounded-lg border border-gray-800">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
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
              
              <div className="mb-6">
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
              
              <div className="mb-6">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
