import React, { useState, useEffect } from "react";
import { MessageCircle, X, Sparkles, Zap } from "lucide-react";
import { FormData, ChatStep, ChatOption, AUTO_MESSAGES } from "./ChatBotTypes";
import ChatBotForm from "./ChatBotForm";
import ChatBotOptions from "./ChatBotOptions";
import ChatBotFAQ from "./ChatBotFAQ";
import ChatBotLiveChat from "./ChatBotLiveChat";
import { ChatService } from "../../services/chatService";

// Componente do ícone de robô 3D moderno
const RobotIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <div className={`${className} relative flex items-center justify-center`}>
    <svg viewBox="0 0 100 100" className="w-full h-full">
      {/* Antena */}
      <circle cx="50" cy="15" r="3" fill="#ffffff" opacity="0.9" />
      <line x1="50" y1="18" x2="50" y2="30" stroke="#ffffff" strokeWidth="2" opacity="0.8" />
      
      {/* Gradientes */}
      <defs>
        <linearGradient id="robotGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8b5cf6" />
          <stop offset="50%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
        <linearGradient id="robotFace" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1e1b4b" />
          <stop offset="100%" stopColor="#312e81" />
        </linearGradient>
      </defs>
      
      {/* Cabeça */}
      <rect x="25" y="30" width="50" height="35" rx="8" fill="url(#robotGradient)" />
      
      {/* Tela do rosto */}
      <rect x="30" y="35" width="40" height="25" rx="5" fill="url(#robotFace)" />
      
      {/* Olhos */}
      <circle cx="40" cy="45" r="4" fill="#ffffff" />
      <circle cx="60" cy="45" r="4" fill="#ffffff" />
      <circle cx="40" cy="45" r="2" fill="#3b82f6" className="animate-pulse" />
      <circle cx="60" cy="45" r="2" fill="#3b82f6" className="animate-pulse" />
      
      {/* Boca */}
      <rect x="45" y="52" width="10" height="3" rx="1.5" fill="#ffffff" opacity="0.8" />
      
      {/* Corpo */}
      <rect x="35" y="65" width="30" height="25" rx="6" fill="url(#robotGradient)" opacity="0.9" />
      
      {/* Botões no corpo */}
      <circle cx="45" cy="75" r="2" fill="#ffffff" opacity="0.7" />
      <circle cx="55" cy="75" r="2" fill="#ffffff" opacity="0.7" />
      
      {/* Braços */}
      <circle cx="20" cy="70" r="6" fill="url(#robotGradient)" opacity="0.8" />
      <circle cx="80" cy="70" r="6" fill="url(#robotGradient)" opacity="0.8" />
      
      {/* Brilho na cabeça */}
      <ellipse cx="45" cy="35" rx="8" ry="4" fill="#ffffff" opacity="0.3" />
    </svg>
  </div>
);

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState<ChatStep>('welcome');
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: ""
  });
  const [showWelcome, setShowWelcome] = useState(true);
  const [conversationId, setConversationId] = useState<string | null>(null);

  // Carregar estado salvo quando componente monta
  useEffect(() => {
    const savedData = localStorage.getItem('chatbot-data');
    if (savedData) {
      try {
        const parsed = JSON.parse(savedData);
        setFormData(parsed.formData || formData);
        setCurrentStep(parsed.currentStep || 'welcome');
        setConversationId(parsed.conversationId || null);
        setShowWelcome(parsed.currentStep === 'welcome');
      } catch (error) {
        console.log('Erro ao carregar dados salvos do chatbot');
      }
    }
  }, []);

  // Salvar estado sempre que houver mudanças
  useEffect(() => {
    const dataToSave = {
      formData,
      currentStep,
      conversationId,
      timestamp: Date.now()
    };
    localStorage.setItem('chatbot-data', JSON.stringify(dataToSave));
  }, [formData, currentStep, conversationId]);

  useEffect(() => {
    if (isOpen && showWelcome && currentStep === 'welcome') {
      const timer = setTimeout(() => {
        setShowWelcome(false);
        setCurrentStep('form');
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [isOpen, showWelcome, currentStep]);

  const handleFormComplete = async () => {
    try {
      const conversation = await ChatService.createConversation({
        user_name: formData.name,
        user_email: formData.email,
        user_phone: formData.phone,
        subject: formData.subject
      });

      if (conversation) {
        setConversationId(conversation.id);
        
        await ChatService.sendMessage({
          conversation_id: conversation.id,
          type: 'bot',
          content: AUTO_MESSAGES.welcome,
          sender_name: 'GV Assistant'
        });
      }
    } catch (error) {
      console.error('Erro ao criar conversa:', error);
    }

    setCurrentStep('options');
  };

  const handleSelectOption = async (option: ChatOption) => {
    if (conversationId && option.auto_message) {
      try {
        await ChatService.sendMessage({
          conversation_id: conversationId,
          type: 'bot',
          content: option.auto_message,
          sender_name: 'GV Assistant'
        });
      } catch (error) {
        console.error('Erro ao enviar mensagem automática:', error);
      }
    }

    switch (option.type) {
      case 'live_chat':
        setCurrentStep('chat');
        break;
      case 'faq':
        setCurrentStep('faq');
        break;
      case 'quote':
        if (conversationId) {
          await ChatService.sendMessage({
            conversation_id: conversationId,
            type: 'user',
            content: `Usuário clicou em: ${option.title}`,
            sender_name: formData.name
          });
        }
        window.location.href = '/contact';
        break;
      case 'services':
        if (conversationId) {
          await ChatService.sendMessage({
            conversation_id: conversationId,
            type: 'user',
            content: `Usuário clicou em: ${option.title}`,
            sender_name: formData.name
          });
        }
        window.location.href = '/services';
        break;
      case 'meeting':
        if (conversationId) {
          await ChatService.sendMessage({
            conversation_id: conversationId,
            type: 'user',
            content: `Usuário solicitou: ${option.title}`,
            sender_name: formData.name
          });
          
          await ChatService.sendMessage({
            conversation_id: conversationId,
            type: 'bot',
            content: 'Perfeito! Vou te direcionar para o WhatsApp onde podemos agendar sua reunião. WhatsApp: (17) 99785-3416',
            sender_name: 'GV Assistant'
          });
        }
        window.open('https://wa.me/5517997853416?text=Olá! Gostaria de agendar uma reunião para falar sobre meu projeto.', '_blank');
        break;
    }
  };

  const resetChat = () => {
    setFormData({ name: "", email: "", phone: "", subject: "" });
    setCurrentStep('welcome');
    setShowWelcome(true);
    setConversationId(null);
    localStorage.removeItem('chatbot-data');
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-50">
          {/* Mensagem de ajuda sincronizada com o ícone */}
          <div className="absolute -top-12 -left-28 bg-white shadow-2xl border border-gray-200
                       px-3 py-2 rounded-2xl text-gray-800 transform transition-all 
                       duration-300 hover:scale-105 backdrop-blur-sm animate-gentle-bounce">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
              <span className="font-medium text-xs text-gray-700">Em que posso ajudar hoje? 🤖</span>
            </div>
            <div className="absolute bottom-0 right-5 w-0 h-0 border-l-[8px] border-r-[8px] border-t-[8px] 
                          border-l-transparent border-r-transparent border-t-white"></div>
          </div>

          {/* Botão do Chatbot moderno - AUMENTADO */}
          <div className="relative">
            {/* Anéis de pulso suaves */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 
                          animate-ping opacity-20"></div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 
                          animate-ping opacity-15" style={{animationDelay: '1s'}}></div>
            
            {/* Botão principal moderno - AUMENTADO de 48px para 56px */}
            <button
              onClick={() => setIsOpen(true)}
              className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 
                       text-white p-3 rounded-full shadow-2xl hover:shadow-indigo-500/25 
                       transition-all duration-500 hover:scale-110 group
                       border-2 border-white/30 animate-gentle-bounce hover:animate-none
                       backdrop-blur-sm"
              style={{ width: '56px', height: '56px' }}
            >
              {/* Gradiente interno */}
              <div className="absolute inset-1 bg-gradient-to-br from-white/20 to-transparent 
                            rounded-full opacity-50"></div>
              
              {/* Ícone do robô 3D */}
              <RobotIcon className="w-7 h-7 relative z-10 mx-auto group-hover:scale-110 
                                  transition-transform duration-300" />
              
              {/* Efeito de brilho */}
              <div className="absolute top-2 left-2 w-3 h-3 bg-white/40 rounded-full blur-sm 
                            group-hover:w-3.5 group-hover:h-3.5 transition-all duration-300"></div>
            </button>

            {/* Indicador online moderno */}
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-500 
                          rounded-full border-2 border-white shadow-lg animate-pulse">
              <div className="w-0.5 h-0.5 bg-white rounded-full mx-auto mt-0.5"></div>
            </div>
          </div>
        </div>
      )}

      {isOpen && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50 md:bg-transparent animate-fadeIn">
          <div className="fixed bottom-0 right-0 w-full md:w-[360px] h-full md:h-[520px] 
                       bg-white shadow-2xl transition-all duration-500 rounded-t-3xl md:rounded-3xl
                       md:bottom-6 md:right-6 overflow-hidden flex flex-col border border-gray-200
                       animate-slideIn transform">
            
            {/* Header Moderno */}
            <div className="relative flex items-center justify-between p-4 
                          bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700
                          text-white flex-shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center 
                              justify-center backdrop-blur-sm">
                  <RobotIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-base">GV Assistant</h3>
                  <div className="flex items-center gap-2 text-xs text-white/90">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                    Online • Sempre pronto para ajudar
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <button
                  onClick={resetChat}
                  className="text-white/80 hover:text-white transition-colors
                           hover:bg-white/10 p-1.5 rounded-lg text-xs font-medium"
                  title="Nova conversa"
                >
                  🔄
                </button>
                
                <button
                  onClick={handleClose}
                  className="text-white/80 hover:text-white transition-colors
                           hover:bg-white/10 p-1.5 rounded-lg"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Content com animações */}
            <div className="flex-1 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
              {currentStep === 'welcome' && showWelcome && (
                <div className="h-full flex items-center justify-center p-6 animate-form">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-r from-indigo-500 to-purple-600 
                                  rounded-3xl flex items-center justify-center shadow-2xl animate-float">
                      <RobotIcon className="w-8 h-8 text-white" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-bold text-gray-800 text-xl animate-fadeIn">
                        Olá! 👋
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed animate-fadeIn" style={{animationDelay: '0.2s'}}>
                        Sou o assistente inteligente da<br/>
                        <span className="font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">GV Software</span><br/>
                        Como posso te ajudar hoje?
                      </p>
                    </div>
                    <div className="flex items-center justify-center gap-1">
                      <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce"></div>
                      <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce" 
                           style={{animationDelay: '0.2s'}}></div>
                      <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce" 
                           style={{animationDelay: '0.4s'}}></div>
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 'form' && (
                <div className="h-full overflow-y-auto animate-form">
                  <ChatBotForm 
                    formData={formData}
                    setFormData={setFormData}
                    onComplete={handleFormComplete}
                  />
                </div>
              )}

              {currentStep === 'options' && (
                <div className="h-full overflow-y-auto animate-form">
                  <ChatBotOptions 
                    onSelectOption={handleSelectOption}
                    userName={formData.name}
                  />
                </div>
              )}

              {currentStep === 'faq' && (
                <div className="h-full overflow-y-auto animate-form">
                  <ChatBotFAQ 
                    onBack={() => setCurrentStep('options')}
                    userName={formData.name}
                  />
                </div>
              )}

              {currentStep === 'chat' && (
                <ChatBotLiveChat 
                  conversationId={conversationId}
                  userName={formData.name}
                  onClose={handleClose}
                  onBack={() => setCurrentStep('options')}
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
