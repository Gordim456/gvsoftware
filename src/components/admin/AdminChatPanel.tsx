
import { useState, useEffect } from "react";
import { ArrowLeft, Send, User, Shield, MessageSquare } from "lucide-react";
import { ChatService } from "../../services/chatService";
import { Conversation, ChatMessage } from "../chat/ChatBotTypes";

const AdminChatPanel = ({ onBack }: { onBack: () => void }) => {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [selectedConversation, setSelectedConversation] = useState<string | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    loadConversations();
  }, []);

  useEffect(() => {
    if (selectedConversation) {
      loadMessages(selectedConversation);
    }
  }, [selectedConversation]);

  const loadConversations = async () => {
    const data = await ChatService.getConversations();
    setConversations(data);
  };

  const loadMessages = async (conversationId: string) => {
    const data = await ChatService.getMessages(conversationId);
    setMessages(data);
  };

  const sendMessage = async () => {
    if (!newMessage.trim() || !selectedConversation) return;

    const message = await ChatService.sendMessage({
      conversation_id: selectedConversation,
      type: 'admin',
      content: newMessage,
      sender_name: 'Suporte GV'
    });

    if (message) {
      setMessages(prev => [...prev, message]);
      setNewMessage("");
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <button
            onClick={onBack}
            className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-3">
            <Shield className="w-8 h-8 text-indigo-400" />
            <div>
              <h1 className="text-2xl font-bold">Painel Admin - Chat ao Vivo</h1>
              <p className="text-gray-400">Gerenciar conversas em tempo real</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-200px)]">
          {/* Lista de Conversas */}
          <div className="bg-gray-800 rounded-xl p-4">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <MessageSquare className="w-5 h-5" />
              Conversas Ativas
            </h2>
            <div className="space-y-2 overflow-y-auto max-h-[600px]">
              {conversations.map((conversation) => (
                <button
                  key={conversation.id}
                  onClick={() => setSelectedConversation(conversation.id)}
                  className={`w-full text-left p-3 rounded-lg transition-colors ${
                    selectedConversation === conversation.id
                      ? 'bg-indigo-600'
                      : 'bg-gray-700 hover:bg-gray-600'
                  }`}
                >
                  <div className="font-medium">{conversation.user_name}</div>
                  <div className="text-sm text-gray-300">{conversation.subject}</div>
                  <div className="text-xs text-gray-400 mt-1">
                    {new Date(conversation.updated_at).toLocaleString()}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Chat */}
          <div className="lg:col-span-2 bg-gray-800 rounded-xl flex flex-col">
            {selectedConversation ? (
              <>
                {/* Header da Conversa */}
                <div className="p-4 border-b border-gray-700">
                  <div className="font-semibold">
                    {conversations.find(c => c.id === selectedConversation)?.user_name}
                  </div>
                  <div className="text-sm text-gray-400">
                    {conversations.find(c => c.id === selectedConversation)?.user_email}
                  </div>
                </div>

                {/* Mensagens */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.type === 'admin' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`flex items-start gap-2 max-w-[80%] ${
                        message.type === 'admin' ? 'flex-row-reverse' : 'flex-row'
                      }`}>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          message.type === 'admin' 
                            ? 'bg-indigo-600' 
                            : message.type === 'bot'
                            ? 'bg-purple-600'
                            : 'bg-gray-600'
                        }`}>
                          {message.type === 'admin' ? (
                            <Shield className="w-4 h-4" />
                          ) : (
                            <User className="w-4 h-4" />
                          )}
                        </div>
                        <div className={`rounded-xl p-3 ${
                          message.type === 'admin'
                            ? 'bg-indigo-600 text-white'
                            : 'bg-gray-700 text-white'
                        }`}>
                          <p className="text-sm">{message.content}</p>
                          <span className="text-xs opacity-70 mt-1 block">
                            {new Date(message.timestamp).toLocaleTimeString()}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Input */}
                <div className="p-4 border-t border-gray-700">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                      placeholder="Digite sua resposta..."
                      className="flex-1 px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg 
                               focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"
                    />
                    <button
                      onClick={sendMessage}
                      disabled={!newMessage.trim()}
                      className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg 
                               transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Send className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex-1 flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <MessageSquare className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>Selecione uma conversa para começar</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminChatPanel;
