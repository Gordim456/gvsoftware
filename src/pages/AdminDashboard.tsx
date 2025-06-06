
import { useState, useEffect, useCallback, useMemo } from "react";
import { ArrowLeft, Send, User, Shield, MessageSquare, Clock, Mail, Phone, Trash2, Search, Settings } from "lucide-react";
import { ChatService } from "../services/chatService";
import { Conversation, ChatMessage } from "../components/chat/ChatBotTypes";
import { ScrollArea } from "../components/ui/scroll-area";

// Componente do ícone de robô 3D moderno - MESMO DO CHATBOT
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

// Hook personalizado para debounce
const useDebounce = (value: string, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

const AdminDashboard = ({ onBack }: { onBack: () => void }) => {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [selectedConversation, setSelectedConversation] = useState<string | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState<'all' | 'active' | 'waiting'>('all');
  const [isLoading, setIsLoading] = useState(true);
  const [supportName, setSupportName] = useState("");
  const [showSupportNameModal, setShowSupportNameModal] = useState(false);

  // Debounce search para melhor performance
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  // Carregar nome do suporte salvo
  useEffect(() => {
    const savedSupportName = localStorage.getItem('admin-support-name');
    if (savedSupportName) {
      setSupportName(savedSupportName);
    } else {
      setShowSupportNameModal(true);
    }
  }, []);

  // Carregar conversas quando o componente monta
  useEffect(() => {
    console.log('AdminDashboard montado, carregando conversas...');
    loadConversations();
  }, []);

  useEffect(() => {
    if (selectedConversation) {
      console.log('Conversa selecionada:', selectedConversation);
      loadMessages(selectedConversation);
    }
  }, [selectedConversation]);

  const loadConversations = useCallback(async () => {
    try {
      console.log('Iniciando carregamento de conversas...');
      setIsLoading(true);
      const data = await ChatService.getConversations();
      console.log('Conversas carregadas:', data);
      console.log('Número de conversas:', data?.length || 0);
      setConversations(data || []);
    } catch (error) {
      console.error('Erro ao carregar conversas:', error);
      setConversations([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const loadMessages = useCallback(async (conversationId: string) => {
    try {
      console.log('Carregando mensagens para conversa:', conversationId);
      const data = await ChatService.getMessages(conversationId);
      console.log('Mensagens carregadas:', data);
      console.log('Número de mensagens:', data?.length || 0);
      setMessages(data || []);
    } catch (error) {
      console.error('Erro ao carregar mensagens:', error);
      setMessages([]);
    }
  }, []);

  const sendMessage = useCallback(async () => {
    if (!newMessage.trim() || !selectedConversation || !supportName.trim()) {
      if (!supportName.trim()) {
        setShowSupportNameModal(true);
      }
      return;
    }

    try {
      console.log('Enviando mensagem do admin:', {
        conversationId: selectedConversation,
        content: newMessage,
        timestamp: new Date().toISOString()
      });

      const message = await ChatService.sendMessage({
        conversation_id: selectedConversation,
        type: 'admin',
        content: newMessage,
        sender_name: supportName
      });

      console.log('Mensagem enviada com sucesso:', message);

      if (message) {
        setMessages(prev => [...prev, message]);
        setNewMessage("");
        // Atualizar status da conversa para ativa
        await updateConversationStatus(selectedConversation, 'active');
        
        console.log('Status da conversa atualizado para "active"');
      }
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
    }
  }, [newMessage, selectedConversation, supportName]);

  const saveSupportName = useCallback(() => {
    if (supportName.trim()) {
      localStorage.setItem('admin-support-name', supportName.trim());
      setShowSupportNameModal(false);
    }
  }, [supportName]);

  const changeSupportName = useCallback(() => {
    setShowSupportNameModal(true);
  }, []);

  const updateConversationStatus = useCallback(async (conversationId: string, status: 'active' | 'closed' | 'waiting') => {
    try {
      await ChatService.updateConversationStatus(conversationId, status);
      setConversations(prev => 
        prev.map(conv => 
          conv.id === conversationId 
            ? { ...conv, status } 
            : conv
        )
      );
    } catch (error) {
      console.error('Erro ao atualizar status:', error);
    }
  }, []);

  const deleteConversation = useCallback(async (conversationId: string) => {
    if (!confirm('Tem certeza que deseja excluir esta conversa?')) return;
    
    try {
      // Deletar do Supabase
      await ChatService.deleteConversation(conversationId);
      
      // Atualizar estado local
      setConversations(prev => prev.filter(conv => conv.id !== conversationId));
      
      if (selectedConversation === conversationId) {
        setSelectedConversation(null);
        setMessages([]);
      }
      
      console.log('Conversa excluída com sucesso');
    } catch (error) {
      console.error('Erro ao excluir conversa:', error);
      alert('Erro ao excluir conversa. Tente novamente.');
    }
  }, [selectedConversation]);

  // Memoizar conversas filtradas para evitar re-renderização desnecessária
  const filteredConversations = useMemo(() => {
    return conversations.filter(conv => {
      const matchesSearch = conv.user_name?.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
                           conv.user_email?.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
                           conv.subject?.toLowerCase().includes(debouncedSearchTerm.toLowerCase());
      
      const matchesFilter = filterStatus === 'all' || conv.status === filterStatus;
      
      return matchesSearch && matchesFilter;
    });
  }, [conversations, debouncedSearchTerm, filterStatus]);

  const selectedConv = useMemo(() => 
    conversations.find(c => c.id === selectedConversation), 
    [conversations, selectedConversation]
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      {/* Modal para nome do suporte */}
      {showSupportNameModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-800 rounded-2xl p-6 w-full max-w-md border border-gray-700">
            <h3 className="text-xl font-bold mb-4 text-center">Configure seu nome</h3>
            <p className="text-gray-300 text-sm mb-4 text-center">
              Digite seu nome para aparecer nas conversas com os clientes
            </p>
            <input
              type="text"
              value={supportName}
              onChange={(e) => setSupportName(e.target.value)}
              placeholder="Ex: João Silva"
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl 
                       focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white 
                       placeholder-gray-400 mb-4"
              onKeyPress={(e) => e.key === 'Enter' && saveSupportName()}
              autoFocus
            />
            <button
              onClick={saveSupportName}
              disabled={!supportName.trim()}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl 
                       transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-medium"
            >
              Salvar
            </button>
          </div>
        </div>
      )}

      <div className="max-w-8xl mx-auto p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <button
              onClick={onBack}
              className="p-3 hover:bg-white/10 rounded-xl transition-colors"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl 
                            flex items-center justify-center shadow-xl">
                <RobotIcon className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 
                             bg-clip-text text-transparent">
                  Painel Admin - GV Assistant
                </h1>
                <p className="text-gray-300">Gerenciar conversas e atendimento em tempo real</p>
              </div>
            </div>
          </div>
          
          {/* Info do suporte atual */}
          {supportName && (
            <div className="flex items-center gap-3 bg-gray-800/50 rounded-xl px-4 py-2 border border-gray-700/50">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                <Shield className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="text-sm text-gray-300">Logado como:</div>
                <div className="font-semibold text-white">{supportName}</div>
              </div>
              <button
                onClick={changeSupportName}
                className="text-gray-400 hover:text-white p-1 rounded"
                title="Alterar nome"
              >
                <Settings className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-6 h-[calc(100vh-200px)]">
          {/* Lista de Conversas */}
          <div className="xl:col-span-1 bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold flex items-center gap-3">
                <MessageSquare className="w-6 h-6 text-indigo-400" />
                Conversas
                <span className="bg-indigo-600 text-white text-xs px-2 py-1 rounded-full">
                  {filteredConversations.length}
                </span>
              </h2>
              <button
                onClick={loadConversations}
                className="text-indigo-400 hover:text-indigo-300 p-2 rounded-lg hover:bg-gray-700/50 transition-colors"
                title="Atualizar conversas"
              >
                <Settings className="w-4 h-4" />
              </button>
            </div>

            {/* Filtros */}
            <div className="space-y-4 mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Buscar conversas..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl 
                           focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white placeholder-gray-400"
                />
              </div>

              <div className="flex gap-2">
                {['all', 'active', 'waiting'].map((status) => (
                  <button
                    key={status}
                    onClick={() => setFilterStatus(status as any)}
                    className={`px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                      filterStatus === status
                        ? 'bg-indigo-600 text-white'
                        : 'bg-gray-700/50 text-gray-300 hover:bg-gray-600/50'
                    }`}
                  >
                    {status === 'all' ? 'Todas' : status === 'active' ? 'Ativas' : 'Aguardando'}
                  </button>
                ))}
              </div>
            </div>

            {/* Lista com ScrollArea otimizada */}
            <ScrollArea className="h-[500px]">
              <div className="space-y-3 pr-2">
                {isLoading ? (
                  <div className="text-center py-8 text-gray-400">
                    <div className="animate-spin w-6 h-6 border-2 border-indigo-400 border-t-transparent rounded-full mx-auto mb-2"></div>
                    Carregando...
                  </div>
                ) : filteredConversations.length === 0 ? (
                  <div className="text-center py-8 text-gray-400">
                    <MessageSquare className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <p>Nenhuma conversa encontrada</p>
                    <button
                      onClick={loadConversations}
                      className="mt-2 text-indigo-400 hover:text-indigo-300 text-sm underline"
                    >
                      Tentar novamente
                    </button>
                  </div>
                ) : (
                  filteredConversations.map((conversation) => (
                    <div
                      key={conversation.id}
                      className={`p-4 rounded-xl cursor-pointer transition-all duration-200 group ${
                        selectedConversation === conversation.id
                          ? 'bg-indigo-600/20 border-2 border-indigo-500'
                          : 'bg-gray-700/30 hover:bg-gray-600/50 border-2 border-transparent'
                      }`}
                      onClick={() => setSelectedConversation(conversation.id)}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div className="font-semibold text-white truncate flex-1">
                          {conversation.user_name || 'Nome não informado'}
                        </div>
                        <div className="flex items-center gap-2">
                          <div className={`w-2 h-2 rounded-full ${
                            conversation.status === 'active' ? 'bg-green-400' :
                            conversation.status === 'waiting' ? 'bg-yellow-400' : 'bg-gray-400'
                          }`}></div>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              deleteConversation(conversation.id);
                            }}
                            className="opacity-0 group-hover:opacity-100 text-red-400 hover:text-red-300 
                                     transition-all p-1 rounded"
                          >
                            <Trash2 className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                      
                      <div className="text-sm text-gray-300 mb-2 truncate">
                        📧 {conversation.user_email || 'Email não informado'}
                      </div>
                      
                      <div className="text-sm text-indigo-300 mb-3 font-medium">
                        {conversation.subject || 'Assunto não informado'}
                      </div>
                      
                      <div className="flex items-center gap-2 text-xs text-gray-400">
                        <Clock className="w-3 h-3" />
                        {conversation.updated_at ? new Date(conversation.updated_at).toLocaleString('pt-BR') : 'Data não disponível'}
                      </div>
                    </div>
                  ))
                )}
              </div>
            </ScrollArea>
          </div>

          {/* Chat com ScrollArea otimizada */}
          <div className="xl:col-span-3 bg-gray-800/50 backdrop-blur-lg rounded-2xl flex flex-col border border-gray-700/50">
            {selectedConversation && selectedConv ? (
              <>
                {/* Header da Conversa */}
                <div className="p-6 border-b border-gray-700/50 bg-gradient-to-r from-gray-800/50 to-gray-700/50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl 
                                    flex items-center justify-center">
                        <User className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="font-bold text-xl text-white">{selectedConv.user_name || 'Nome não informado'}</div>
                        <div className="flex items-center gap-4 text-sm text-gray-300">
                          <span className="flex items-center gap-1">
                            <Mail className="w-4 h-4" />
                            {selectedConv.user_email || 'Email não informado'}
                          </span>
                          <span className="flex items-center gap-1">
                            <Phone className="w-4 h-4" />
                            {selectedConv.user_phone || 'Telefone não informado'}
                          </span>
                        </div>
                        <div className="text-indigo-400 font-medium mt-1">
                          Assunto: {selectedConv.subject || 'Assunto não informado'}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <select
                        value={selectedConv.status || 'waiting'}
                        onChange={(e) => updateConversationStatus(selectedConv.id, e.target.value as any)}
                        className="bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white text-sm"
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
                  <div className="p-6 space-y-4">
                    {messages.length === 0 ? (
                      <div className="text-center py-8 text-gray-400">
                        <MessageSquare className="w-12 h-12 mx-auto mb-4 opacity-50" />
                        <p>Nenhuma mensagem nesta conversa ainda</p>
                        <p className="text-sm mt-2">Seja o primeiro a responder!</p>
                      </div>
                    ) : (
                      messages.map((message) => (
                        <div
                          key={message.id}
                          className={`flex ${message.type === 'admin' ? 'justify-end' : 'justify-start'}`}
                        >
                          <div className={`flex items-start gap-3 max-w-[80%] ${
                            message.type === 'admin' ? 'flex-row-reverse' : 'flex-row'
                          }`}>
                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center shadow-lg ${
                              message.type === 'admin' 
                                ? 'bg-gradient-to-r from-indigo-600 to-purple-600' 
                                : message.type === 'bot'
                                ? 'bg-gradient-to-r from-purple-600 to-pink-600'
                                : 'bg-gradient-to-r from-gray-600 to-gray-700'
                            }`}>
                              {message.type === 'admin' ? (
                                <Shield className="w-5 h-5 text-white" />
                              ) : (
                                <User className="w-5 h-5 text-white" />
                              )}
                            </div>
                            <div className={`rounded-2xl p-4 shadow-lg ${
                              message.type === 'admin'
                                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white'
                                : 'bg-white/10 backdrop-blur-sm text-white border border-gray-600/50'
                            }`}>
                              <p className="text-sm leading-relaxed">{message.content}</p>
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
                <div className="p-6 border-t border-gray-700/50 bg-gradient-to-r from-gray-800/50 to-gray-700/50">
                  <div className="flex gap-4">
                    <input
                      type="text"
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                      placeholder={supportName ? "Digite sua resposta..." : "Configure seu nome primeiro..."}
                      disabled={!supportName}
                      className="flex-1 px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl 
                               focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white 
                               placeholder-gray-400 backdrop-blur-sm disabled:opacity-50"
                    />
                    <button
                      onClick={sendMessage}
                      disabled={!newMessage.trim() || !supportName}
                      className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 
                               hover:to-purple-700 text-white px-6 py-3 rounded-xl 
                               transition-all disabled:opacity-50 disabled:cursor-not-allowed
                               flex items-center gap-2 font-medium shadow-lg"
                    >
                      <Send className="w-5 h-5" />
                      Enviar
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex-1 flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <MessageSquare className="w-16 h-16 mx-auto mb-6 opacity-50" />
                  <h3 className="text-xl font-semibold mb-2">Selecione uma conversa</h3>
                  <p>Escolha uma conversa da lista para começar a responder</p>
                  {conversations.length === 0 && !isLoading && (
                    <p className="text-sm mt-4 text-gray-500">
                      Parece que não há conversas ainda. Elas aparecerão aqui quando os clientes entrarem em contato.
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
