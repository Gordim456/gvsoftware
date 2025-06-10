import React, { useState, useRef, useEffect } from 'react';
import { Send, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ChatService } from '@/services/chatService';

interface Message {
  id: string;
  type: 'user' | 'bot' | 'admin';
  content: string;
  timestamp: string;
  sender_name: string;
  is_read: boolean;
}

interface ChatBotLiveChatProps {
  conversationId: string;
  userName: string;
  onClose: () => void;
  onBack?: () => void;
}

const ChatBotLiveChat: React.FC<ChatBotLiveChatProps> = ({ 
  conversationId, 
  userName, 
  onClose,
  onBack 
}) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    loadMessages();
    
    // Polling para novas mensagens a cada 2 segundos
    const interval = setInterval(() => {
      checkForNewMessages();
    }, 2000);

    return () => clearInterval(interval);
  }, [conversationId]);

  const loadMessages = async () => {
    try {
      const data = await ChatService.getMessages(conversationId);
      setMessages(data);
    } catch (error) {
      console.error('Erro ao carregar mensagens:', error);
    }
  };

  const checkForNewMessages = async () => {
    if (messages.length === 0) return;
    
    try {
      const lastMessage = messages[messages.length - 1];
      const newMessages = await ChatService.pollForNewMessages(
        conversationId,
        lastMessage.timestamp
      );
      
      if (newMessages.length > 0) {
        setMessages(prev => [...prev, ...newMessages]);
      }
    } catch (error) {
      console.error('Erro ao verificar novas mensagens:', error);
    }
  };

  const handleSendMessage = async () => {
    if (!newMessage.trim() || isLoading) return;

    const messageContent = newMessage.trim();
    setNewMessage('');
    setIsLoading(true);

    try {
      const messageData = {
        conversation_id: conversationId,
        type: 'user' as const,
        content: messageContent,
        sender_name: userName
      };

      const sentMessage = await ChatService.sendMessage(messageData);
      
      // Adicionar mensagem enviada à lista imediatamente
      const newMsg: Message = {
        id: sentMessage.id,
        type: sentMessage.type,
        content: sentMessage.content,
        timestamp: sentMessage.timestamp,
        sender_name: sentMessage.sender_name,
        is_read: sentMessage.is_read
      };

      setMessages(prev => [...prev, newMsg]);

    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const formatTime = (timestamp: string) => {
    return new Date(timestamp).toLocaleTimeString('pt-BR', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-2xl border border-gray-200 max-w-md w-full h-96 flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-4 rounded-t-lg flex justify-between items-center">
        <div>
          <h3 className="font-semibold">Chat com Suporte</h3>
          <p className="text-sm opacity-90">Estamos aqui para ajudar!</p>
        </div>
        <Button
          onClick={onClose}
          variant="ghost"
          size="icon"
          className="text-white hover:bg-white/20 h-8 w-8"
        >
          <X className="w-4 h-4" />
        </Button>
      </div>

      {/* Messages */}
      <div className="flex-1 p-4 overflow-y-auto space-y-3">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-xs px-3 py-2 rounded-lg ${
                message.type === 'user'
                  ? 'bg-indigo-600 text-white'
                  : message.type === 'admin'
                  ? 'bg-green-100 text-green-800 border border-green-200'
                  : 'bg-gray-100 text-gray-800'
              }`}
            >
              {message.type === 'admin' && (
                <div className="text-xs font-semibold mb-1 text-green-600">
                  {message.sender_name} (Suporte)
                </div>
              )}
              <p className="text-sm">{message.content}</p>
              <p className="text-xs opacity-70 mt-1">
                {formatTime(message.timestamp)}
              </p>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex gap-2">
          <Input
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Digite sua mensagem..."
            disabled={isLoading}
            className="flex-1"
          />
          <Button
            onClick={handleSendMessage}
            disabled={!newMessage.trim() || isLoading}
            className="bg-indigo-600 hover:bg-indigo-700"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatBotLiveChat;
