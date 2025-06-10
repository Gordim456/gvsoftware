
import { User, Shield, MessageSquare, Send, Mail, Phone } from "lucide-react";
import { Conversation, ChatMessage } from "../chat/ChatBotTypes";
import { ScrollArea } from "../ui/scroll-area";

interface ChatPanelProps {
  selectedConversation: string | null;
  selectedConv: Conversation | undefined;
  messages: ChatMessage[];
  newMessage: string;
  onMessageChange: (message: string) => void;
  onSendMessage: () => void;
  onUpdateStatus: (conversationId: string, status: 'active' | 'closed' | 'waiting') => void;
  supportName: string;
  conversations: Conversation[];
}

const ChatPanel = ({
  selectedConversation,
  selectedConv,
  messages,
  newMessage,
  onMessageChange,
  onSendMessage,
  onUpdateStatus,
  supportName,
}: ChatPanelProps) => {
  return (
    <div className="xl:col-span-3 bg-gray-800/50 backdrop-blur-lg rounded-xl sm:rounded-2xl flex flex-col border border-gray-700/50">
      {selectedConversation && selectedConv ? (
        <>
          {/* Header da Conversa */}
          <div className="p-3 sm:p-6 border-b border-gray-700/50 bg-gradient-to-r from-gray-800/50 to-gray-700/50">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl 
                              flex items-center justify-center">
                  <User className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="font-bold text-lg sm:text-xl text-white truncate">
                    {selectedConv.user_name || 'Nome não informado'}
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-300">
                    <span className="flex items-center gap-1 truncate">
                      <Mail className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                      <span className="truncate">{selectedConv.user_email || 'Email não informado'}</span>
                    </span>
                    <span className="flex items-center gap-1 truncate">
                      <Phone className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                      <span className="truncate">{selectedConv.user_phone || 'Telefone não informado'}</span>
                    </span>
                  </div>
                  <div className="text-indigo-400 font-medium mt-1 text-sm sm:text-base truncate">
                    Assunto: {selectedConv.subject || 'Assunto não informado'}
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <select
                  value={selectedConv.status || 'waiting'}
                  onChange={(e) => onUpdateStatus(selectedConv.id, e.target.value as any)}
                  className="bg-gray-700 border border-gray-600 rounded-lg px-2 sm:px-3 py-1 sm:py-2 text-white text-xs sm:text-sm flex-1 sm:flex-none"
                >
                  <option value="waiting">Aguardando</option>
                  <option value="active">Ativa</option>
                  <option value="closed">Fechada</option>
                </select>
              </div>
            </div>
          </div>

          {/* Mensagens com ScrollArea */}
          <ScrollArea className="flex-1 bg-gradient-to-b from-gray-900/20 to-gray-800/20">
            <div className="p-3 sm:p-6 space-y-3 sm:space-y-4">
              {messages.length === 0 ? (
                <div className="text-center py-8 text-gray-400">
                  <MessageSquare className="w-8 h-8 sm:w-12 sm:h-12 mx-auto mb-4 opacity-50" />
                  <p className="text-sm sm:text-base">Nenhuma mensagem nesta conversa ainda</p>
                  <p className="text-xs sm:text-sm mt-2">Seja o primeiro a responder!</p>
                </div>
              ) : (
                messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.type === 'admin' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`flex items-start gap-2 sm:gap-3 max-w-[85%] sm:max-w-[80%] ${
                      message.type === 'admin' ? 'flex-row-reverse' : 'flex-row'
                    }`}>
                      <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0 ${
                        message.type === 'admin' 
                          ? 'bg-gradient-to-r from-indigo-600 to-purple-600' 
                          : message.type === 'bot'
                          ? 'bg-gradient-to-r from-purple-600 to-pink-600'
                          : 'bg-gradient-to-r from-gray-600 to-gray-700'
                      }`}>
                        {message.type === 'admin' ? (
                          <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                        ) : (
                          <User className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                        )}
                      </div>
                      <div className={`rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-lg ${
                        message.type === 'admin'
                          ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white'
                          : 'bg-white/10 backdrop-blur-sm text-white border border-gray-600/50'
                      }`}>
                        <p className="text-xs sm:text-sm leading-relaxed break-words">{message.content}</p>
                        <div className="flex items-center gap-2 mt-2">
                          <span className="text-xs opacity-70">
                            {message.sender_name || 'Usuário'}
                          </span>
                          <span className="text-xs opacity-70">
                            {message.timestamp ? new Date(message.timestamp).toLocaleTimeString('pt-BR') : 'Hora não disponível'}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </ScrollArea>

          {/* Input */}
          <div className="p-3 sm:p-6 border-t border-gray-700/50 bg-gradient-to-r from-gray-800/50 to-gray-700/50">
            <div className="flex gap-2 sm:gap-4">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => onMessageChange(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && onSendMessage()}
                placeholder={supportName ? "Digite sua resposta..." : "Configure seu nome primeiro..."}
                disabled={!supportName}
                className="flex-1 px-3 sm:px-4 py-2 sm:py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl 
                         focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white 
                         placeholder-gray-400 backdrop-blur-sm disabled:opacity-50 text-sm sm:text-base"
              />
              <button
                onClick={onSendMessage}
                disabled={!newMessage.trim() || !supportName}
                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 
                         hover:to-purple-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl 
                         transition-all disabled:opacity-50 disabled:cursor-not-allowed
                         flex items-center gap-2 font-medium shadow-lg"
              >
                <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="hidden sm:inline">Enviar</span>
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className="flex-1 flex items-center justify-center p-4">
          <div className="text-center text-gray-400">
            <MessageSquare className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-6 opacity-50" />
            <h3 className="text-lg sm:text-xl font-semibold mb-2">Selecione uma conversa</h3>
            <p className="text-sm sm:text-base">Escolha uma conversa da lista para começar a responder</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatPanel;
