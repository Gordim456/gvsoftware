
import React from 'react';
import { toast } from 'sonner';
import ContactBackground from './contact/ContactBackground';
import ContactLayout from './contact/ContactLayout';

const Contact: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = React.useState(false);

  const handleSubmitSuccess = () => {
    setFormSubmitted(true);
    toast.success("Mensagem enviada", {
      description: "Entraremos em contato em breve!",
    });
  };

  const handleReset = () => {
    setFormSubmitted(false);
  };

  return (
    <ContactBackground>
      <ContactLayout 
        isFormSubmitted={formSubmitted} 
        onSubmitSuccess={handleSubmitSuccess} 
        onReset={handleReset} 
      />
    </ContactBackground>
  );
};

export default Contact;
