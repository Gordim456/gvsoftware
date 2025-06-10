
import { useState, useEffect, useRef } from "react";
import { ArrowLeft, Send, User, Shield, MessageSquare } from "lucide-react";
import { ChatService } from "../../services/chatService";
import { ChatMessage } from "./ChatBotTypes";

interface ChatBotLiveChatProps {
  onBack: () => void;
  userName: string;
  conversationId: string | null;
}

const ChatBotLiveChat = ({ onBack, userName, conversationId }: ChatBotLiveChatProps) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const pollingIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Carregar mensagens iniciais
  useEffect(() => {
    if (conversationId) {
      loadMessages();
      startPolling();
    }

    return () => {
      if (pollingIntervalRef.current) {
        clearInterval(pollingIntervalRef.current);
      }
    };
  }, [conversationId]);

  // Auto scroll para baixo
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const loadMessages = async () => {
    if (!conversationId) return;
    
    try {
      const data = await ChatService.getMessages(conversationId);
      setMessages(data);
      console.log('Mensagens carregadas:', data.length);
    } catch (error) {
      console.error('Erro ao carregar mensagens:', error);
    }
  };

  // Sistema de polling para novas mensagens
  const startPolling = () => {
    pollingIntervalRef.current = setInterval(async () => {
      if (!conversationId || messages.length === 0) return;

      try {
        const lastMessage = messages[messages.length - 1];
        const newMessages = await ChatService.pollForNewMessages(
          conversationId, 
          lastMessage?.timestamp
        );

        if (newMessages.length > 0) {
          console.log('Novas mensagens recebidas via polling:', newMessages.length);
          setMessages(prev => [...prev, ...newMessages]);
        }
      } catch (error) {
        console.error('Erro no polling:', error);
      }
    }, 2000); // Verificar a cada 2 segundos
  };

  const sendMessage = async () => {
    if (!newMessage.trim() || !conversationId || isLoading) return;

    setIsLoading(true);
    try {
      console.log('Enviando mensagem do usuário:', newMessage);
      
      const message = await ChatService.sendMessage({
        conversation_id: conversationId,
        type: 'user',
        content: newMessage,
        sender_name: userName
      });

      if (message) {
        setMessages(prev => [...prev, message]);
        setNewMessage("");
        console.log('Mensagem do usuário enviada com sucesso');
      }
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-full flex flex-col animate-form">
      {/* Header */}
      <div className="p-4 border-b border-gray-200 bg-gradient-to-r from-indigo-50 to-purple-50">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-gray-600" />
          </button>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl 
                          flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Chat ao Vivo</h3>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                Conectado com suporte
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mensagens */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
        {messages.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            <MessageSquare className="w-12 h-12 mx-auto mb-4 opacity-50" />
            <p>Aguardando resposta do suporte...</p>
            <p className="text-xs mt-2">Suas mensagens aparecerão aqui</p>
          </div>
        ) : (
          messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`flex items-start gap-2 max-w-[80%] ${
                message.type === 'user' ? 'flex-row-reverse' : 'flex-row'
              }`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  message.type === 'admin' 
                    ? 'bg-indigo-600' 
                    : message.type === 'bot'
                    ? 'bg-purple-600'
                    : 'bg-gray-600'
                }`}>
                  {message.type === 'admin' ? (
                    <Shield className="w-4 h-4 text-white" />
                  ) : (
                    <User className="w-4 h-4 text-white" />
                  )}
                </div>
                <div className={`rounded-2xl p-3 ${
                  message.type === 'user'
                    ? 'bg-indigo-600 text-white'
                    : 'bg-white text-gray-800 border border-gray-200'
                }`}>
                  <p className="text-sm">{message.content}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs opacity-70">
                      {message.sender_name}
                    </span>
                    <span className="text-xs opacity-70">
                      {new Date(message.timestamp).toLocaleTimeString('pt-BR')}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 border-t border-gray-200 bg-white">
        <div className="flex gap-2">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && !e.shiftKey && sendMessage()}
            placeholder="Digite sua mensagem..."
            disabled={isLoading}
            className="flex-1 px-4 py-3 border border-gray-300 rounded-xl 
                     focus:outline-none focus:ring-2 focus:ring-indigo-500 
                     disabled:opacity-50 disabled:cursor-not-allowed"
          />
          <button
            onClick={sendMessage}
            disabled={!newMessage.trim() || isLoading}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl 
                     transition-colors disabled:opacity-50 disabled:cursor-not-allowed
                     flex items-center gap-2"
          >
            {isLoading ? (
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              <Send className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBotLiveChat;
