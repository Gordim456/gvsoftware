
import React from 'react';
import { Mail, Phone } from 'lucide-react';

const ContactInfo = () => {
  return (
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
  );
};

export default ContactInfo;
