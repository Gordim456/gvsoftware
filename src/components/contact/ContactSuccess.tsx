
import React from 'react';
import { Button } from "@/components/ui/button";
import { CheckCircle } from 'lucide-react';

type ContactSuccessProps = {
  onReset: () => void;
};

const ContactSuccess = ({ onReset }: ContactSuccessProps) => {
  return (
    <div className="text-center py-6">
      <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 text-white shadow-lg shadow-green-500/30 mb-6">
        <CheckCircle className="h-10 w-10" />
      </div>
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Mensagem Enviada!</h2>
      <p className="text-indigo-200 mb-8 text-lg">
        Agradecemos seu contato! Nossa equipe responderá o mais breve possível.
      </p>
      <Button 
        onClick={onReset} 
        className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-lg shadow-indigo-600/30 px-8 py-6 text-lg font-medium rounded-xl transition-all duration-300 hover:scale-105"
      >
        Enviar nova mensagem
      </Button>
    </div>
  );
};

export default ContactSuccess;
