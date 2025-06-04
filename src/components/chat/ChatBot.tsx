
import { useState } from "react";
import { MessageSquare, X, Send, Sparkles, Star, User, Mail, Briefcase } from "lucide-react";

interface UserInfo {
  firstName: string;
  email: string;
  projectType: string;
}

interface ChatMessage {
  text: string;
  isBot: boolean;
  timestamp: string;
  type?: 'text' | 'quick-actions';
}

interface Conversation {
  userInfo: UserInfo;
  messages: ChatMessage[];
  id?: number;
}

const quickActions = [
  { id: 'orcamento', text: '💰 Solicitar Orçamento', response: 'orcamento' },
  { id: 'portfolio', text: '🚀 Ver Projetos', response: 'portfolio' },
  { id: 'reuniao', text: '📅 Agendar Reunião', response: 'reuniao' },
  { id: 'horarios', text: '🕒 Horários de Atendimento', response: 'horarios' },
  { id: 'tecnologias', text: '⚡ Nossas Tecnologias', response: 'tecnologias' }
];

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const [showForm, setShowForm] = useState(true);
  const [formData, setFormData] = useState<UserInfo>({
    firstName: "",
    email: "",
    projectType: ""
  });
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");

  const saveToLocalStorage = (conversation: Conversation) => {
    const conversations = JSON.parse(localStorage.getItem('chatbot-conversations') || '[]');
    conversations.push(conversation);
    localStorage.setItem('chatbot-conversations', JSON.stringify(conversations));
  };

  const saveToServer = async (conversation: Conversation) => {
    try {
      const response = await fetch('http://localhost:3001/conversations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(conversation),
      });
      if (!response.ok) throw new Error('Erro ao salvar conversa');
    } catch (error) {
      console.error('Erro ao salvar no servidor:', error);
      saveToLocalStorage(conversation);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setUserInfo(formData);
    setShowForm(false);
    
    const welcomeMessage: ChatMessage = { 
      text: `👋 Olá ${formData.firstName}! Sou o assistente da GV Software.\n\n🚀 Como posso ajudar você hoje?`, 
      isBot: true,
      timestamp: new Date().toISOString(),
      type: 'quick-actions'
    };

    setMessages([welcomeMessage]);

    const conversation: Conversation = {
      userInfo: formData,
      messages: [welcomeMessage],
    };

    saveToServer(conversation).catch(() => saveToLocalStorage(conversation));
  };

  const handleQuickAction = (actionResponse: string) => {
    const responses = {
      orcamento: `💰 **Orçamento Personalizado**\n\n📋 Para criar um orçamento preciso, precisamos saber:\n• Tipo de projeto (${formData.projectType})\n• Prazo desejado\n• Funcionalidades principais\n• Orçamento estimado\n\n📞 **Próximos passos:**\n1. Envie mais detalhes pelo chat\n2. Agende uma reunião gratuita\n3. Receba proposta em 24h`,
      
      portfolio: `🚀 **Nossos Projetos**\n\n🏆 **Destaques:**\n• Sistema de Gestão Bebidas ON\n• Apps Mobile personalizados\n• E-commerce avançado\n• Dashboards interativos\n\n👉 Visite nossa página de portfólio para ver todos os projetos!`,
      
      reuniao: `📅 **Agendar Reunião**\n\n⏰ **Horários disponíveis:**\n• Segunda a Sexta: 9h às 18h\n• Duração: 30-60 minutos\n\n📞 **Formatos:**\n• Video chamada (preferido)\n• Presencial\n• Ligação telefônica\n\n✉️ Envie sua preferência de data/hora que entraremos em contato!`,
      
      horarios: `🕒 **Horário de Atendimento**\n\n**Segunda a Sexta:** 9h às 18h\n**Sábado:** Fechado\n**Domingo:** Fechado\n\n📞 **Contato de emergência:** (17) 99785-3416\n✉️ **Email:** contato.gvsoftware@gmail.com\n\n💬 Este chat funciona 24/7 para suas dúvidas!`,
      
      tecnologias: `⚡ **Nossas Tecnologias**\n\n💻 **Frontend:**\n• React, Next.js, Vue.js\n• TypeScript, Tailwind CSS\n\n⚙️ **Backend:**\n• Node.js, Python, Java\n• PostgreSQL, MongoDB\n\n📱 **Mobile:**\n• React Native, Flutter\n\n☁️ **Cloud:**\n• AWS, Google Cloud, Azure`
    };

    const botResponse: ChatMessage = {
      text: responses[actionResponse as keyof typeof responses] || "Como posso ajudar você?",
      isBot: true,
      timestamp: new Date().toISOString()
    };

    setMessages(prev => [...prev, botResponse]);
  };

  const handleChatSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || !userInfo) return;

    const userMessage: ChatMessage = {
      text: input,
      isBot: false,
      timestamp: new Date().toISOString()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput("");

    setTimeout(() => {
      let responseText = "";
      const lowercaseInput = input.toLowerCase();
      
      if (lowercaseInput.includes("preço") || lowercaseInput.includes("custo") || lowercaseInput.includes("valor") || lowercaseInput.includes("orçamento")) {
        responseText = `💰 **Orçamento Rápido**\n\nBaseado no seu projeto (${formData.projectType}), nossos preços variam:\n\n📊 **Estimativas:**\n• Landing Page: R$ 2.500 - R$ 5.000\n• Site completo: R$ 8.000 - R$ 15.000\n• Sistema web: R$ 15.000 - R$ 50.000\n• App mobile: R$ 20.000 - R$ 40.000\n\n✨ **Incluso:** Design, desenvolvimento, testes, entrega e 3 meses de suporte.\n\n📞 Quer um orçamento detalhado? Vamos agendar uma conversa!`;
      } 
      else if (lowercaseInput.includes("prazo") || lowercaseInput.includes("tempo")) {
        responseText = `⏱️ **Prazos de Entrega**\n\n🚀 **Cronograma típico:**\n• Landing Page: 1-2 semanas\n• Site institucional: 3-4 semanas\n• E-commerce: 6-8 semanas\n• Sistema complexo: 8-12 semanas\n• App mobile: 10-16 semanas\n\n⚡ **Entrega rápida disponível** com metodologia ágil e entregas semanais!\n\n📅 Precisa de algo urgente? Fale conosco!`;
      }
      else if (lowercaseInput.includes("reunião") || lowercaseInput.includes("conversar") || lowercaseInput.includes("agendar")) {
        responseText = `📅 **Vamos Conversar!**\n\n🎯 **Na reunião discutiremos:**\n• Seus objetivos\n• Soluções técnicas\n• Cronograma\n• Investimento\n\n📞 **Agende agora:**\n• WhatsApp: (17) 99785-3416\n• Email: contato.gvsoftware@gmail.com\n\n💬 Ou me informe sua preferência de horário que eu organizo tudo!`;
      }
      else {
        responseText = `Obrigado pela mensagem, ${userInfo.firstName}! 👨‍💻\n\n📞 Nossa equipe entrará em contato em até 2h úteis através do email ${userInfo.email}.\n\n🔥 **Enquanto isso:**\n• Explore nosso portfólio\n• Veja nossos cases de sucesso\n• Agende uma reunião gratuita\n\n💬 Posso ajudar com mais alguma coisa?`;
      }

      const botResponse: ChatMessage = {
        text: responseText,
        isBot: true,
        timestamp: new Date().toISOString(),
        type: 'quick-actions'
      };

      setMessages(prev => {
        const updatedMessages = [...prev, botResponse];
        
        const conversation: Conversation = {
          userInfo,
          messages: updatedMessages,
        };
        
        saveToServer(conversation).catch(() => saveToLocalStorage(conversation));
        
        return updatedMessages;
      });
    }, 800);
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
                  <h3 className="font-semibold flex items-center gap-2">
                    Chat GV Software
                    <Star className="w-4 h-4 text-yellow-300" />
                  </h3>
                  <span className="text-xs text-white/80 flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                    Resposta rápida
                  </span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors p-2
                         hover:rotate-90 duration-300 rounded-full hover:bg-white/10"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="h-[calc(100%-140px)] overflow-y-auto p-4 space-y-4 
                          bg-gradient-to-b from-blue-50/50 to-white">
              {showForm ? (
                <form onSubmit={handleFormSubmit} className="space-y-6 bg-white p-6 
                                                           rounded-2xl shadow-sm">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-purple-500 to-blue-600 
                                  rounded-full flex items-center justify-center mb-4 shadow-lg">
                      <MessageSquare className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-bold text-gray-800 text-xl">Vamos conversar!</h4>
                    <p className="text-sm text-gray-500 mt-2">
                      Preencha os dados abaixo para iniciarmos:
                    </p>
                  </div>
                  
                  <div className="space-y-5">
                    <div className="relative">
                      <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                        <User className="w-4 h-4 text-purple-600" />
                        Seu nome *
                      </label>
                      <input
                        type="text"
                        placeholder="Digite seu nome"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl
                                 focus:outline-none focus:ring-2 focus:ring-purple-500/20 
                                 focus:border-purple-500 transition-all text-gray-700
                                 placeholder:text-gray-400"
                        required
                      />
                    </div>
                    
                    <div className="relative">
                      <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                        <Mail className="w-4 h-4 text-blue-600" />
                        Seu email *
                      </label>
                      <input
                        type="email"
                        placeholder="Digite seu email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl 
                                 focus:outline-none focus:ring-2 focus:ring-blue-500/20 
                                 focus:border-blue-500 transition-all text-gray-700
                                 placeholder:text-gray-400"
                        required
                      />
                    </div>
                    
                    <div className="relative">
                      <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                        <Briefcase className="w-4 h-4 text-indigo-600" />
                        Tipo de projeto *
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl 
                                 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 
                                 focus:border-indigo-500 transition-all text-gray-700"
                        required
                      >
                        <option value="" className="text-gray-400">Selecione o tipo de projeto</option>
                        <option value="site">🌐 Site Institucional</option>
                        <option value="ecommerce">🛒 E-commerce</option>
                        <option value="app">📱 App Mobile</option>
                        <option value="sistema">⚙️ Sistema Web</option>
                        <option value="outro">🎯 Outro</option>
                      </select>
                    </div>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 via-blue-600 to-blue-700 
                             text-white py-4 rounded-xl hover:shadow-lg transition-all duration-300 
                             font-medium flex items-center justify-center gap-3 text-lg
                             hover:scale-[1.02] hover:shadow-purple-500/25"
                  >
                    <MessageSquare className="w-5 h-5" />
                    <span>Iniciar Conversa</span>
                    <Sparkles className="w-5 h-5" />
                  </button>
                </form>
              ) : (
                <div className="space-y-4">
                  {messages.map((message, index) => (
                    <div
                      key={index}
                      className={`flex ${
                        message.isBot ? "justify-start" : "justify-end"
                      }`}
                    >
                      <div
                        className={`max-w-[85%] p-4 rounded-2xl ${
                          message.isBot
                            ? "bg-gradient-to-br from-blue-50 to-white text-gray-800 shadow-sm border border-blue-100"
                            : "bg-gradient-to-r from-purple-600 via-blue-600 to-blue-700 text-white"
                        }`}
                      >
                        <p className="whitespace-pre-line text-sm leading-relaxed">{message.text}</p>
                        
                        {message.type === 'quick-actions' && message.isBot && (
                          <div className="mt-3 flex flex-wrap gap-2">
                            {quickActions.map((action) => (
                              <button
                                key={action.id}
                                onClick={() => handleQuickAction(action.response)}
                                className="text-xs px-3 py-1.5 bg-blue-100 text-blue-700 rounded-full 
                                         hover:bg-blue-200 transition-colors border border-blue-200"
                              >
                                {action.text}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Input */}
            {!showForm && (
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-100">
                <form onSubmit={handleChatSubmit}>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder="Digite sua mensagem..."
                      className="flex-1 p-3 bg-gray-50 border border-gray-200 rounded-xl 
                               focus:outline-none focus:ring-2 focus:ring-blue-500/20 
                               focus:border-blue-500 transition-all text-sm"
                    />
                    <button
                      type="submit"
                      className="p-3 bg-gradient-to-r from-purple-600 via-blue-600 to-blue-700 
                               text-white rounded-xl hover:shadow-lg transition-all duration-300 
                               disabled:opacity-50"
                      disabled={!input.trim()}
                    >
                      <Send className="w-5 h-5" />
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
