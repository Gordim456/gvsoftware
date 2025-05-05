
import { useState } from 'react';
import { toast } from 'sonner';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { BackgroundGradient } from '../components/BackgroundGradient';
import ContactForm from '../components/contact/ContactForm';
import ContactSuccess from '../components/contact/ContactSuccess';
import ContactInfo from '../components/contact/ContactInfo';

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSuccess = () => {
    setFormSubmitted(true);
    toast.success("Mensagem enviada com sucesso!", {
      description: "Entraremos em contato em breve.",
    });
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
              <ContactInfo />
            </div>
            
            {/* Form Section */}
            <div className="md:col-span-7">
              <div className="bg-gradient-to-br from-indigo-900/30 to-purple-900/20 backdrop-blur-sm p-8 rounded-2xl border border-indigo-500/20 shadow-xl">
                {formSubmitted ? (
                  <ContactSuccess onReset={() => setFormSubmitted(false)} />
                ) : (
                  <>
                    <h2 className="text-2xl md:text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                      Envie-nos uma mensagem
                    </h2>
                    <ContactForm onSuccess={handleSuccess} />
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
