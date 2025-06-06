
import { useState, useEffect } from "react";
import { MessageSquare, X, Bot, Sparkles, MessageCircle } from "lucide-react";
import { FormData, ChatStep, ChatOption, AUTO_MESSAGES } from "./ChatBotTypes";
import ChatBotForm from "./ChatBotForm";
import ChatBotOptions from "./ChatBotOptions";
import ChatBotFAQ from "./ChatBotFAQ";
import ChatBotLiveChat from "./ChatBotLiveChat";
import { ChatService } from "../../services/chatService";

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
        <div className="fixed bottom-8 right-8 z-50">
          {/* Botão do Chatbot com animações */}
          <div className="relative">
            {/* Anéis de pulso */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 animate-pulse-ring opacity-75"></div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 animate-pulse-ring opacity-50" style={{animationDelay: '1s'}}></div>
            
            {/* Botão principal */}
            <button
              onClick={() => setIsOpen(true)}
              className="relative bg-gradient-to-r from-indigo-600 to-purple-600 
                       text-white p-4 rounded-full shadow-2xl hover:shadow-indigo-500/50 
                       transition-all duration-300 hover:scale-110 group
                       border-2 border-white/20 animate-bounce-soft animate-glow"
              style={{ width: '70px', height: '70px' }}
            >
              <MessageSquare className="w-8 h-8 relative z-10 mx-auto" />
            </button>

            {/* Tooltip com mensagem */}
            <div className="absolute -top-16 right-0 bg-gray-900/95 backdrop-blur-sm px-4 py-3 rounded-2xl 
                         text-sm font-medium text-white shadow-2xl
                         opacity-0 group-hover:opacity-100 transition-all duration-300 
                         whitespace-nowrap border border-gray-700 transform group-hover:scale-105">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-indigo-400 animate-pulse" />
                <span className="text-gradient-purple font-bold">Em que posso ajudar hoje?</span>
              </div>
              <div className="absolute bottom-0 right-6 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] 
                            border-l-transparent border-r-transparent border-t-gray-900/95"></div>
            </div>

            {/* Indicador online */}
            <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white shadow-lg animate-pulse">
              <div className="w-2 h-2 bg-white rounded-full mx-auto mt-1"></div>
            </div>
          </div>
        </div>
      )}

      {isOpen && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 md:bg-transparent animate-fadeIn">
          <div className="fixed bottom-0 right-0 w-full md:w-[420px] h-full md:h-[650px] 
                       bg-white shadow-2xl transition-all duration-500 rounded-t-3xl md:rounded-3xl
                       md:bottom-8 md:right-8 overflow-hidden flex flex-col border-2 border-indigo-200
                       animate-slideIn transform">
            
            {/* Header Moderno */}
            <div className="relative flex items-center justify-between p-5 
                          bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700
                          text-white flex-shrink-0">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center 
                              justify-center backdrop-blur-sm animate-pulse-ring">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">GV Assistant</h3>
                  <div className="flex items-center gap-2 text-sm text-white/90">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    Online • Sempre pronto para ajudar
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <button
                  onClick={resetChat}
                  className="text-white/80 hover:text-white transition-colors
                           hover:bg-white/10 p-2 rounded-lg text-sm font-medium"
                  title="Nova conversa"
                >
                  🔄
                </button>
                
                <button
                  onClick={handleClose}
                  className="text-white/80 hover:text-white transition-colors
                           hover:bg-white/10 p-2 rounded-lg"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Content com animações */}
            <div className="flex-1 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
              {currentStep === 'welcome' && showWelcome && (
                <div className="h-full flex items-center justify-center p-8 animate-form">
                  <div className="text-center space-y-6">
                    <div className="w-20 h-20 mx-auto bg-gradient-to-r from-indigo-500 to-purple-600 
                                  rounded-3xl flex items-center justify-center shadow-2xl animate-bounce-soft">
                      <Sparkles className="w-10 h-10 text-white" />
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-bold text-gray-800 text-2xl animate-fadeIn">
                        Olá! 👋
                      </h4>
                      <p className="text-gray-600 text-base leading-relaxed animate-fadeIn" style={{animationDelay: '0.2s'}}>
                        Sou o assistente inteligente da<br/>
                        <span className="font-bold text-gradient-purple">GV Software</span><br/>
                        Como posso te ajudar hoje?
                      </p>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce" 
                           style={{animationDelay: '0.2s'}}></div>
                      <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce" 
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
                  onBack={() => setCurrentStep('options')}
                  userName={formData.name}
                  conversationId={conversationId}
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
