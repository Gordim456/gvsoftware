
import React, { useState } from "react";
import { MessageSquare, X, Send, User, Mail, Phone, MessageCircle, Sparkles } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.phone && formData.subject) {
      localStorage.setItem('chatbot-contact', JSON.stringify(formData));
      setIsSubmitted(true);
    }
  };

  const resetForm = () => {
    setFormData({ name: "", email: "", phone: "", subject: "" });
    setIsSubmitted(false);
  };

  return (
    <>
      {!isOpen && (
        <div className="fixed bottom-8 right-8 z-50">
          <button
            onClick={() => setIsOpen(true)}
            className="bg-gradient-to-br from-purple-600 via-blue-600 to-blue-700 
                     text-white p-4 rounded-full shadow-lg hover:shadow-xl 
                     transition-all duration-300 hover:scale-110
                     group relative animate-bounce"
          >
            <MessageSquare className="w-6 h-6" />
            <span className="absolute -top-12 right-0 bg-white px-4 py-2 rounded-full 
                         text-sm font-medium text-blue-600 shadow-lg opacity-0 
                         group-hover:opacity-100 transition-opacity duration-300 
                         whitespace-nowrap">
              Em que posso ajudar hoje? <Sparkles className="w-4 h-4 inline-block ml-1" />
            </span>
          </button>
        </div>
      )}

      {isOpen && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50">
          <div className="fixed bottom-0 right-0 w-full md:w-[400px] h-full md:h-[600px] 
                       bg-white shadow-2xl transition-all duration-300 rounded-t-[2rem]
                       animate-[slideIn_0.3s_ease-out] overflow-hidden">
            
            {/* Header */}
            <div className="flex items-center justify-between p-4 bg-gradient-to-br 
                          from-purple-600 via-blue-600 to-blue-700 text-white 
                          rounded-t-[2rem]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center 
                              justify-center backdrop-blur-sm">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold">Contato GV Software</h3>
                  <span className="text-xs text-white/80">Resposta rápida</span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="h-[calc(100%-140px)] overflow-y-auto p-6">
              {!isSubmitted ? (
                <div className="space-y-6">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-purple-500 to-blue-600 
                                  rounded-full flex items-center justify-center mb-4">
                      <MessageSquare className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-bold text-gray-800 text-xl">Entre em Contato!</h4>
                    <p className="text-sm text-gray-500 mt-2">
                      Preencha seus dados e entraremos em contato
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="relative">
                      <User className="absolute left-3 top-3 w-5 h-5 text-blue-500" />
                      <input
                        type="text"
                        placeholder="Nome completo"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl 
                                 focus:outline-none focus:ring-2 focus:ring-blue-500/20 
                                 focus:border-blue-500 transition-all"
                        required
                      />
                    </div>

                    <div className="relative">
                      <Mail className="absolute left-3 top-3 w-5 h-5 text-blue-500" />
                      <input
                        type="email"
                        placeholder="Seu email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl 
                                 focus:outline-none focus:ring-2 focus:ring-blue-500/20 
                                 focus:border-blue-500 transition-all"
                        required
                      />
                    </div>

                    <div className="relative">
                      <Phone className="absolute left-3 top-3 w-5 h-5 text-blue-500" />
                      <input
                        type="tel"
                        placeholder="Telefone"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl 
                                 focus:outline-none focus:ring-2 focus:ring-blue-500/20 
                                 focus:border-blue-500 transition-all"
                        required
                      />
                    </div>

                    <div className="relative">
                      <MessageCircle className="absolute left-3 top-3 w-5 h-5 text-blue-500" />
                      <input
                        type="text"
                        placeholder="Assunto"
                        value={formData.subject}
                        onChange={(e) => setFormData({...formData, subject: e.target.value})}
                        className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl 
                                 focus:outline-none focus:ring-2 focus:ring-blue-500/20 
                                 focus:border-blue-500 transition-all"
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-purple-600 to-blue-600 
                               text-white py-3 rounded-xl hover:shadow-lg transition-all 
                               duration-300 flex items-center justify-center gap-2"
                    >
                      <Send className="w-5 h-5" />
                      Enviar Mensagem
                    </button>
                  </form>
                </div>
              ) : (
                <div className="text-center space-y-6">
                  <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">✅</span>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-bold text-gray-800 mb-2">
                      Obrigado, {formData.name}!
                    </h4>
                    <p className="text-gray-600">
                      Recebemos sua mensagem e entraremos em contato em breve através do email {formData.email}.
                    </p>
                  </div>

                  <button
                    onClick={resetForm}
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 
                             text-white py-3 rounded-xl hover:shadow-lg transition-all duration-300"
                  >
                    Nova Mensagem
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
