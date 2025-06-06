
import { useState, useEffect } from "react";
import { MessageCircle, X, Bot, Sparkles, Zap } from "lucide-react";
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
        <div className="fixed bottom-6 right-6 z-50">
          {/* Mensagem de ajuda */}
          <div className="absolute -top-16 right-0 bg-gradient-to-r from-indigo-600 to-purple-600 
                       px-4 py-3 rounded-2xl text-white shadow-xl transform transition-all 
                       duration-300 hover:scale-105 border border-white/20 backdrop-blur-sm
                       animate-pulse">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 animate-pulse" />
              <span className="font-medium text-sm">Em que posso ajudar hoje?</span>
            </div>
            <div className="absolute bottom-0 right-8 w-0 h-0 border-l-[8px] border-r-[8px] border-t-[8px] 
                          border-l-transparent border-r-transparent border-t-indigo-600"></div>
          </div>

          {/* Botão do Chatbot com animações */}
          <div className="relative">
            {/* Anéis de pulso */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 animate-ping opacity-75"></div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 animate-ping opacity-50" style={{animationDelay: '1s'}}></div>
            
            {/* Botão principal */}
            <button
              onClick={() => setIsOpen(true)}
              className="relative bg-gradient-to-r from-indigo-600 to-purple-600 
                       text-white p-3 rounded-full shadow-2xl hover:shadow-indigo-500/50 
                       transition-all duration-300 hover:scale-110 group
                       border-2 border-white/20 animate-bounce"
              style={{ width: '60px', height: '60px' }}
            >
              <Zap className="w-6 h-6 relative z-10 mx-auto animate-pulse" />
            </button>

            {/* Indicador online */}
            <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white shadow-lg animate-pulse">
              <div className="w-1.5 h-1.5 bg-white rounded-full mx-auto mt-0.5"></div>
            </div>
          </div>
        </div>
      )}

      {isOpen && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 md:bg-transparent animate-fadeIn">
          <div className="fixed bottom-0 right-0 w-full md:w-[380px] h-full md:h-[580px] 
                       bg-white shadow-2xl transition-all duration-500 rounded-t-3xl md:rounded-3xl
                       md:bottom-6 md:right-6 overflow-hidden flex flex-col border-2 border-indigo-200
                       animate-slideIn transform">
            
            {/* Header Moderno */}
            <div className="relative flex items-center justify-between p-4 
                          bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700
                          text-white flex-shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-xl flex items-center 
                              justify-center backdrop-blur-sm animate-pulse">
                  <Bot className="w-5 h-5 text-white" />
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
                                  rounded-3xl flex items-center justify-center shadow-2xl animate-bounce">
                      <Sparkles className="w-8 h-8 text-white" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-bold text-gray-800 text-xl animate-fadeIn">
                        Olá! 👋
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed animate-fadeIn" style={{animationDelay: '0.2s'}}>
                        Sou o assistente inteligente da<br/>
                        <span className="font-bold text-gradient-purple">GV Software</span><br/>
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
