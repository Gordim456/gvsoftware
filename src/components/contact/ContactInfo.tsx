
import React from 'react';
import { Mail, Phone } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="bg-gradient-to-br from-indigo-900/30 to-purple-900/20 backdrop-blur-sm p-8 rounded-2xl border border-indigo-500/20 shadow-xl">
      <div className="space-y-8">
        <div className="flex items-start space-x-5">
          <div className="shrink-0">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg">
              <Mail className="w-6 h-6 text-white" />
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
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg">
              <Phone className="w-6 h-6 text-white" />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-white">Telefone</h3>
            <p className="text-indigo-200">(17) 99785-3416</p>
            <a href="tel:+5517997853416" className="inline-block mt-3 text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors">
              Ligar agora →
            </a>
          </div>
        </div>
      </div>
      
      <div className="bg-indigo-900/30 p-6 rounded-xl border border-indigo-500/30 mt-8">
        <h3 className="text-xl font-semibold mb-4 text-white">Horário de Atendimento</h3>
        <div className="space-y-2 text-indigo-200">
          <div className="flex justify-between">
            <span>Segunda - Sexta:</span>
            <span className="font-medium text-white">9:00 - 18:00</span>
          </div>
          <div className="flex justify-between">
            <span>Sábado:</span>
            <span className="font-medium text-white">Fechado</span>
          </div>
          <div className="flex justify-between">
            <span>Domingo:</span>
            <span className="font-medium text-white">Fechado</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
