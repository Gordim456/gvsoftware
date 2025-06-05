
import { useState, useRef, useEffect } from "react";
import { ArrowLeft, Send, User, Clock, CheckCircle } from "lucide-react";
import { ChatMessage } from "./ChatBotTypes";

interface ChatBotLiveChatProps {
  onBack: () => void;
  userName: string;
}

const ChatBotLiveChat = ({ onBack, userName }: ChatBotLiveChatProps) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [isConnecting, setIsConnecting] = useState(true);
  const [isOnline, setIsOnline] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Simulate connection process
    const timer = setTimeout(() => {
      setIsConnecting(false);
      const currentHour = new Date().getHours();
      const isBusinessHours = currentHour >= 9 && currentHour < 18;
      
      setIsOnline(isBusinessHours);
      
      const welcomeMessage: ChatMessage = {
        id: Date.now().toString(),
        type: 'bot',
        content: isBusinessHours 
          ? `Olá ${userName}! Você está conectado com nossa equipe. Como posso ajudar?`
          : `Olá ${userName}! No momento estamos fora do horário de atendimento (9h às 18h). Deixe sua mensagem que responderemos em breve!`,
        timestamp: new Date()
      };
      
      setMessages([welcomeMessage]);
    }, 2000);

    return () => clearTimeout(timer);
  }, [userName]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      type: 'user',
      content: newMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setNewMessage("");

    // Simulate bot response
    setTimeout(() => {
      const botResponse: ChatMessage = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: isOnline 
          ? "Recebemos sua mensagem! Um de nossos especialistas responderá em instantes."
          : "Sua mensagem foi registrada! Entraremos em contato no próximo horário comercial.",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center gap-3 p-4 border-b border-gray-200">
        <button
          onClick={onBack}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <ArrowLeft className="w-5 h-5 text-gray-600" />
        </button>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-600 
                        rounded-full flex items-center justify-center">
            <User className="w-5 h-5 text-white" />
          </div>
          <div>
            <h4 className="font-semibold text-gray-800">Suporte GV Software</h4>
            <div className="flex items-center gap-2 text-sm">
              <div className={`w-2 h-2 rounded-full ${isOnline ? 'bg-green-400' : 'bg-yellow-400'}`}></div>
              <span className="text-gray-600">
                {isConnecting ? 'Conectando...' : isOnline ? 'Online' : 'Fora do horário'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
        {isConnecting ? (
          <div className="flex justify-center items-center h-full">
            <div className="text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600 mx-auto mb-4"></div>
              <p className="text-gray-600">Conectando com nossa equipe...</p>
            </div>
          </div>
        ) : (
          <>
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex items-start gap-2 max-w-[280px] ${
                  message.type === 'user' ? 'flex-row-reverse' : 'flex-row'
                }`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    message.type === 'user' 
                      ? 'bg-gray-300' 
                      : 'bg-gradient-to-br from-purple-500 to-blue-600'
                  }`}>
                    {message.type === 'user' ? (
                      <User className="w-4 h-4 text-gray-600" />
                    ) : (
                      <CheckCircle className="w-4 h-4 text-white" />
                    )}
                  </div>
                  <div className={`rounded-2xl p-3 ${
                    message.type === 'user'
                      ? 'bg-gradient-to-br from-purple-500 to-blue-600 text-white rounded-br-md'
                      : 'bg-white text-gray-800 rounded-tl-md shadow-sm border border-gray-100'
                  }`}>
                    <p className="text-sm">{message.content}</p>
                    <span className={`text-xs mt-1 block ${
                      message.type === 'user' ? 'text-white/70' : 'text-gray-500'
                    }`}>
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </>
        )}
      </div>

      {/* Input */}
      {!isConnecting && (
        <div className="p-4 border-t border-gray-200 bg-white">
          <div className="flex gap-2">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Digite sua mensagem..."
              className="flex-1 px-4 py-3 border border-gray-300 rounded-xl 
                       focus:outline-none focus:ring-2 focus:ring-purple-500 
                       focus:border-purple-500"
            />
            <button
              onClick={handleSendMessage}
              disabled={!newMessage.trim()}
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white 
                       px-4 py-3 rounded-xl hover:from-purple-700 hover:to-blue-700 
                       transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
          
          {!isOnline && (
            <div className="flex items-center gap-2 mt-2 text-sm text-yellow-600">
              <Clock className="w-4 h-4" />
              <span>Fora do horário. Suas mensagens serão respondidas em breve.</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ChatBotLiveChat;
