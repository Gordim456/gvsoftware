import { useState, useEffect } from "react";
import { MessageSquare, X, Bot, Sparkles } from "lucide-react";
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
  const [autoMessage, setAutoMessage] = useState<string>("");

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
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isOpen, showWelcome, currentStep]);

  const handleFormComplete = async () => {
    // Criar conversa no Supabase
    try {
      const conversation = await ChatService.createConversation({
        user_name: formData.name,
        user_email: formData.email,
        user_phone: formData.phone,
        subject: formData.subject
      });

      if (conversation) {
        setConversationId(conversation.id);
        
        // Enviar mensagem de boas-vindas automática
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
    // Enviar mensagem automática baseada na opção escolhida
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
        // Não abrir nova guia, usar a mesma página
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
        // Não abrir nova guia, usar a mesma página
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
        // Atualizar número do WhatsApp
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
    setAutoMessage("");
    localStorage.removeItem('chatbot-data');
  };

  const handleClose = () => {
    setIsOpen(false);
    // Não resetar o chat ao fechar, manter o estado
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
          <div className="fixed bottom-0 right-0 w-full md:w-[450px] h-full md:h-[700px] 
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
                  <h3 className="font-bold text-lg">GV Assistant ✨</h3>
                  <div className="flex items-center gap-2 text-sm text-white/90">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    IA + Humano • Suporte Real-time
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-2 relative z-10">
                {/* Botão de reset */}
                <button
                  onClick={resetChat}
                  className="text-white/80 hover:text-white transition-colors
                           hover:bg-white/10 p-2 rounded-full text-lg"
                  title="Nova conversa"
                >
                  🔄
                </button>
                
                <button
                  onClick={handleClose}
                  className="text-white/80 hover:text-white transition-colors
                           hover:bg-white/10 p-2 rounded-full"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-hidden">
              {currentStep === 'welcome' && showWelcome && (
                <div className="h-full flex items-center justify-center p-8 bg-gradient-to-b from-gray-50 to-white">
                  <div className="text-center space-y-6 animate-fade-in">
                    <div className="w-24 h-24 mx-auto bg-gradient-to-br from-purple-500 to-blue-600 
                                  rounded-full flex items-center justify-center shadow-2xl">
                      <Sparkles className="w-12 h-12 text-white animate-pulse" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 text-3xl mb-3">
                        Bem-vindo! ✨
                      </h4>
                      <p className="text-gray-600 leading-relaxed text-lg">
                        Sou o assistente inteligente da GV Software.<br/>
                        Vou te conectar com nossa equipe de forma<br/>
                        <span className="font-bold text-purple-600">rápida e personalizada!</span>
                      </p>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-purple-600">
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" 
                           style={{animationDelay: '0.2s'}}></div>
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" 
                           style={{animationDelay: '0.4s'}}></div>
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
