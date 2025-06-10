import { useState, useEffect, useCallback } from "react";
import { ArrowLeft } from "lucide-react";
import { ChatService } from "../services/chatService";
import { Conversation, ChatMessage } from "../components/chat/ChatBotTypes";
import { toast } from "sonner";
import AdminHeader from "../components/admin/AdminHeader";
import ConversationsList from "../components/admin/ConversationsList";
import ChatPanel from "../components/admin/ChatPanel";
import SupportNameModal from "../components/admin/SupportNameModal";
import NotificationSystem from "../components/admin/NotificationSystem";

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
      toast.error("Falha ao carregar conversas");
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
      toast.error("Falha ao carregar mensagens");
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
        
        toast.success("Sua resposta foi enviada com sucesso");
      }
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
      toast.error("Falha ao enviar mensagem");
    }
  }, [newMessage, selectedConversation, supportName]);

  const saveSupportName = useCallback((name: string) => {
    if (name.trim()) {
      localStorage.setItem('admin-support-name', name.trim());
      setSupportName(name.trim());
      setShowSupportNameModal(false);
      toast.success("Seu nome foi configurado com sucesso");
    }
  }, []);

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
      toast.success(`Conversa marcada como ${status === 'active' ? 'ativa' : status === 'closed' ? 'fechada' : 'aguardando'}`);
    } catch (error) {
      console.error('Erro ao atualizar status:', error);
      toast.error("Falha ao atualizar status da conversa");
    }
  }, []);

  const deleteConversation = useCallback(async (conversationId: string) => {
    if (!confirm('Tem certeza que deseja excluir esta conversa?')) return;
    
    try {
      await ChatService.deleteConversation(conversationId);
      
      setConversations(prev => prev.filter(conv => conv.id !== conversationId));
      
      if (selectedConversation === conversationId) {
        setSelectedConversation(null);
        setMessages([]);
      }
      
      console.log('Conversa excluída com sucesso');
      toast.success("A conversa foi removida com sucesso");
    } catch (error) {
      console.error('Erro ao excluir conversa:', error);
      toast.error("Falha ao excluir conversa");
    }
  }, [selectedConversation]);

  const selectedConv = conversations.find(c => c.id === selectedConversation);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <NotificationSystem />
      
      {showSupportNameModal && (
        <SupportNameModal
          supportName={supportName}
          setSupportName={setSupportName}
          onSave={saveSupportName}
          onClose={() => setShowSupportNameModal(false)}
        />
      )}

      <div className="max-w-8xl mx-auto p-3 sm:p-6">
        <AdminHeader 
          onBack={onBack}
          supportName={supportName}
          onChangeSupportName={changeSupportName}
        />

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-3 sm:gap-6 h-[calc(100vh-120px)] sm:h-[calc(100vh-200px)]">
          <ConversationsList
            conversations={conversations}
            selectedConversation={selectedConversation}
            onSelectConversation={setSelectedConversation}
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            filterStatus={filterStatus}
            onFilterChange={setFilterStatus}
            isLoading={isLoading}
            onRefresh={loadConversations}
            onDeleteConversation={deleteConversation}
          />

          <ChatPanel
            selectedConversation={selectedConversation}
            selectedConv={selectedConv}
            messages={messages}
            newMessage={newMessage}
            onMessageChange={setNewMessage}
            onSendMessage={sendMessage}
            onUpdateStatus={updateConversationStatus}
            supportName={supportName}
            conversations={conversations}
          />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
