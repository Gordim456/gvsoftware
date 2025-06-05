
import { useState, useEffect } from "react";
import { MessageSquare, X, Bot, Sparkles } from "lucide-react";
import { FormData, ChatStep, ChatOption } from "./ChatBotTypes";
import ChatBotForm from "./ChatBotForm";
import ChatBotOptions from "./ChatBotOptions";
import ChatBotFAQ from "./ChatBotFAQ";
import ChatBotLiveChat from "./ChatBotLiveChat";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState<ChatStep>('welcome');
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: ""
  });
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    if (isOpen && showWelcome && currentStep === 'welcome') {
      const timer = setTimeout(() => {
        setShowWelcome(false);
        setCurrentStep('form');
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isOpen, showWelcome, currentStep]);

  const handleFormComplete = () => {
    localStorage.setItem('chatbot-contact', JSON.stringify(formData));
    setCurrentStep('options');
  };

  const handleSelectOption = (option: ChatOption) => {
    switch (option.type) {
      case 'live_chat':
        setCurrentStep('chat');
        break;
      case 'faq':
        setCurrentStep('faq');
        break;
      case 'quote':
        // Para orçamento, podemos redirecionar para o formulário de contato
        window.open('/contact', '_blank');
        break;
      case 'services':
        // Para serviços, podemos redirecionar para a página de serviços
        window.open('/services', '_blank');
        break;
      case 'meeting':
        // Para reunião, podemos abrir um link do Calendly ou similar
        alert('Em breve! Por enquanto, entre em contato pelo WhatsApp: (11) 99999-9999');
        break;
    }
  };

  const resetChat = () => {
    setFormData({ name: "", email: "", phone: "", subject: "" });
    setCurrentStep('welcome');
    setShowWelcome(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => {
      if (currentStep !== 'welcome') {
        resetChat();
      }
    }, 300);
  };

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
                Como posso ajudar hoje?
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
                       animate-[slideIn_0.5s_ease-out] overflow-hidden flex flex-col">
            
            {/* Header */}
            <div className="relative flex items-center justify-between p-6 
                          bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 
                          text-white rounded-t-3xl flex-shrink-0">
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
                    IA + Humano
                  </div>
                </div>
              </div>
              
              <button
                onClick={handleClose}
                className="text-white/80 hover:text-white transition-colors relative z-10
                         hover:bg-white/10 p-2 rounded-full"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-hidden">
              {currentStep === 'welcome' && showWelcome && (
                <div className="h-full flex items-center justify-center p-6 bg-gradient-to-b from-gray-50 to-white">
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
                        Sou o assistente inteligente da GV Software.<br/>
                        Vou te ajudar de forma rápida e personalizada!
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 'form' && (
                <div className="h-full overflow-y-auto p-6 bg-gradient-to-b from-gray-50 to-white">
                  <ChatBotForm 
                    formData={formData}
                    setFormData={setFormData}
                    onComplete={handleFormComplete}
                  />
                </div>
              )}

              {currentStep === 'options' && (
                <div className="h-full overflow-y-auto p-6 bg-gradient-to-b from-gray-50 to-white">
                  <ChatBotOptions 
                    onSelectOption={handleSelectOption}
                    userName={formData.name}
                  />
                </div>
              )}

              {currentStep === 'faq' && (
                <div className="h-full overflow-y-auto p-6 bg-gradient-to-b from-gray-50 to-white">
                  <ChatBotFAQ 
                    onBack={() => setCurrentStep('options')}
                    userName={formData.name}
                  />
                </div>
              )}

              {currentStep === 'chat' && (
                <ChatBotLiveChat 
                  onBack={() => setCurrentStep('options')}
                  userName={formData.name}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
