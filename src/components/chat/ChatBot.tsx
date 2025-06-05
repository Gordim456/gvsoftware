
import { useState, useEffect } from "react";
import { MessageSquare, X, Send, User, Mail, Phone, MessageCircle, Sparkles, Bot, CheckCircle, ArrowRight } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);

  const steps = [
    {
      question: "Olá! 👋 Qual é o seu nome?",
      field: "name" as keyof FormData,
      placeholder: "Digite seu nome completo",
      icon: User,
      type: "text"
    },
    {
      question: "Perfeito! Qual é o seu email?",
      field: "email" as keyof FormData,
      placeholder: "seu@email.com",
      icon: Mail,
      type: "email"
    },
    {
      question: "Ótimo! Qual é o seu telefone?",
      field: "phone" as keyof FormData,
      placeholder: "(11) 99999-9999",
      icon: Phone,
      type: "tel"
    },
    {
      question: "Por último, sobre o que você gostaria de falar?",
      field: "subject" as keyof FormData,
      placeholder: "Desenvolvimento de site, app, sistema...",
      icon: MessageCircle,
      type: "text"
    }
  ];

  useEffect(() => {
    if (isOpen && showWelcome) {
      const timer = setTimeout(() => {
        setShowWelcome(false);
        setIsTyping(true);
        setTimeout(() => setIsTyping(false), 1000);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [isOpen, showWelcome]);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setIsTyping(true);
      setTimeout(() => {
        setCurrentStep(currentStep + 1);
        setIsTyping(false);
      }, 800);
    } else {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.phone && formData.subject) {
      localStorage.setItem('chatbot-contact', JSON.stringify(formData));
      setIsSubmitted(true);
    }
  };

  const resetForm = () => {
    setFormData({ name: "", email: "", phone: "", subject: "" });
    setCurrentStep(0);
    setIsSubmitted(false);
    setShowWelcome(true);
  };

  const currentField = steps[currentStep]?.field;
  const currentValue = currentField ? formData[currentField] : "";
  const CurrentIcon = steps[currentStep]?.icon;

  return (
    <div>
      {!isOpen && (
        <div className="fixed bottom-8 right-8 z-50">
          <button
            onClick={() => setIsOpen(true)}
            className="relative bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 
                     text-white p-4 rounded-full shadow-2xl hover:shadow-purple-500/25 
                     transition-all duration-500 hover:scale-110 group
                     animate-pulse hover:animate-none"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-blue-400 
                          rounded-full opacity-20 animate-ping"></div>
            <MessageSquare className="w-6 h-6 relative z-10" />
            
            <div className="absolute -top-16 right-0 bg-white px-4 py-3 rounded-2xl 
                         text-sm font-medium text-gray-700 shadow-xl opacity-0 
                         group-hover:opacity-100 transition-all duration-300 
                         whitespace-nowrap border border-gray-100">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-purple-500 animate-pulse" />
                Em que posso ajudar hoje?
              </div>
              <div className="absolute bottom-0 right-6 w-0 h-0 border-l-8 border-r-8 border-t-8 
                            border-l-transparent border-r-transparent border-t-white"></div>
            </div>
          </button>
        </div>
      )}

      {isOpen && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50">
          <div className="fixed bottom-0 right-0 w-full md:w-[420px] h-full md:h-[650px] 
                       bg-white shadow-2xl transition-all duration-500 rounded-t-3xl
                       animate-[slideIn_0.5s_ease-out] overflow-hidden">
            
            {/* Header */}
            <div className="relative flex items-center justify-between p-6 
                          bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 
                          text-white rounded-t-3xl">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
              
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center 
                              justify-center backdrop-blur-sm border border-white/30">
                  <Bot className="w-6 h-6 animate-pulse" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">GV Assistant</h3>
                  <div className="flex items-center gap-2 text-sm text-white/90">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    Online agora
                  </div>
                </div>
              </div>
              
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors relative z-10
                         hover:bg-white/10 p-2 rounded-full"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="h-[calc(100%-140px)] overflow-y-auto p-6 bg-gradient-to-b from-gray-50 to-white">
              {!isSubmitted ? (
                <div className="space-y-6">
                  {showWelcome ? (
                    <div className="text-center space-y-4 animate-fade-in">
                      <div className="w-20 h-20 mx-auto bg-gradient-to-br from-purple-500 to-blue-600 
                                    rounded-full flex items-center justify-center shadow-lg">
                        <Sparkles className="w-10 h-10 text-white animate-pulse" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 text-2xl mb-2">
                          Bem-vindo! ✨
                        </h4>
                        <p className="text-gray-600 leading-relaxed">
                          Sou o assistente da GV Software.<br/>
                          Vou te ajudar de forma rápida e inteligente!
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      {/* Progress Bar */}
                      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                        <div 
                          className="bg-gradient-to-r from-purple-500 to-blue-600 h-2 rounded-full 
                                   transition-all duration-500 ease-out"
                          style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
                        />
                      </div>

                      {/* Chat Messages */}
                      <div className="space-y-4">
                        {/* Bot Message */}
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-600 
                                        rounded-full flex items-center justify-center flex-shrink-0">
                            <Bot className="w-4 h-4 text-white" />
                          </div>
                          <div className="bg-white rounded-2xl rounded-tl-md p-4 shadow-lg border border-gray-100 
                                        max-w-[280px] animate-scale-in">
                            {isTyping ? (
                              <div className="flex gap-1">
                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                              </div>
                            ) : (
                              <p className="text-gray-800 font-medium">
                                {steps[currentStep]?.question}
                              </p>
                            )}
                          </div>
                        </div>

                        {/* User Input */}
                        {!isTyping && (
                          <div className="flex items-end gap-3 justify-end">
                            <div className="bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl rounded-br-md 
                                          p-4 shadow-lg max-w-[280px] animate-scale-in">
                              <div className="space-y-3">
                                <div className="relative">
                                  {CurrentIcon && <CurrentIcon className="absolute left-3 top-3 w-5 h-5 text-white/80" />}
                                  <input
                                    type={steps[currentStep]?.type}
                                    placeholder={steps[currentStep]?.placeholder}
                                    value={currentValue}
                                    onChange={(e) => setFormData({
                                      ...formData,
                                      [currentField]: e.target.value
                                    })}
                                    onKeyPress={(e) => {
                                      if (e.key === 'Enter' && currentValue.trim()) {
                                        handleNext();
                                      }
                                    }}
                                    className="w-full pl-12 pr-4 py-3 bg-white/20 border border-white/30 
                                             rounded-xl text-white placeholder-white/70 backdrop-blur-sm
                                             focus:outline-none focus:ring-2 focus:ring-white/50 
                                             focus:border-white/50 transition-all"
                                    required
                                    autoFocus
                                  />
                                </div>
                                
                                <button
                                  onClick={handleNext}
                                  disabled={!currentValue.trim()}
                                  className="w-full bg-white/20 hover:bg-white/30 text-white py-3 rounded-xl 
                                           transition-all duration-300 flex items-center justify-center gap-2
                                           disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-sm
                                           border border-white/30 hover:border-white/50"
                                >
                                  {currentStep === steps.length - 1 ? (
                                    <>
                                      <Send className="w-5 h-5" />
                                      Enviar
                                    </>
                                  ) : (
                                    <>
                                      Próximo
                                      <ArrowRight className="w-5 h-5" />
                                    </>
                                  )}
                                </button>
                              </div>
                            </div>
                            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                              <User className="w-4 h-4 text-gray-600" />
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="text-center space-y-6 animate-fade-in">
                  <div className="w-20 h-20 mx-auto bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-12 h-12 text-green-500" />
                  </div>
                  
                  <div>
                    <h4 className="text-2xl font-bold text-gray-800 mb-3">
                      Perfeito, {formData.name}! 🎉
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      Recebemos sua mensagem sobre <strong>{formData.subject}</strong>.
                      <br/>Entraremos em contato em breve através do email <strong>{formData.email}</strong>.
                    </p>
                  </div>

                  <button
                    onClick={resetForm}
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 
                             text-white py-4 rounded-xl hover:shadow-lg transition-all 
                             duration-300 font-medium"
                  >
                    Nova Conversa
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
