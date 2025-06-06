
import { useState, useEffect } from 'react';
import { Ticket, MessageSquare, Clock, CheckCircle, AlertCircle, Plus } from 'lucide-react';
import { EncryptionService } from '../../utils/encryption';
import { analytics } from '../../utils/analytics';

interface TicketData {
  id: string;
  title: string;
  description: string;
  priority: 'low' | 'medium' | 'high' | 'urgent';
  status: 'open' | 'in_progress' | 'resolved' | 'closed';
  category: string;
  user_name: string;
  user_email: string;
  created_at: string;
  updated_at: string;
  messages: TicketMessage[];
}

interface TicketMessage {
  id: string;
  content: string;
  sender_type: 'user' | 'admin';
  sender_name: string;
  timestamp: string;
}

const TicketSystem = () => {
  const [tickets, setTickets] = useState<TicketData[]>([]);
  const [selectedTicket, setSelectedTicket] = useState<TicketData | null>(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    loadTickets();
    analytics.trackPageView('/tickets');
  }, []);

  const loadTickets = () => {
    try {
      const cachedTickets = EncryptionService.decryptLocalStorage('tickets');
      if (cachedTickets && Array.isArray(cachedTickets)) {
        setTickets(cachedTickets);
      }
    } catch (error) {
      console.error('Erro ao carregar tickets:', error);
    }
  };

  const saveTickets = (updatedTickets: TicketData[]) => {
    try {
      EncryptionService.encryptLocalStorage('tickets', updatedTickets);
      setTickets(updatedTickets);
    } catch (error) {
      console.error('Erro ao salvar tickets:', error);
    }
  };

  const createTicket = (ticketData: Omit<TicketData, 'id' | 'created_at' | 'updated_at' | 'messages'>) => {
    const newTicket: TicketData = {
      ...ticketData,
      id: Date.now().toString(),
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      messages: []
    };

    const updatedTickets = [newTicket, ...tickets];
    saveTickets(updatedTickets);
    analytics.trackEvent('ticket_created', { priority: ticketData.priority, category: ticketData.category });
  };

  const updateTicketStatus = (ticketId: string, status: TicketData['status']) => {
    const updatedTickets = tickets.map(ticket =>
      ticket.id === ticketId
        ? { ...ticket, status, updated_at: new Date().toISOString() }
        : ticket
    );
    saveTickets(updatedTickets);
    analytics.trackAdminAction('ticket_status_updated', { ticketId, status });
  };

  const addMessage = (ticketId: string, content: string, senderType: 'user' | 'admin', senderName: string) => {
    const newMessage: TicketMessage = {
      id: Date.now().toString(),
      content,
      sender_type: senderType,
      sender_name: senderName,
      timestamp: new Date().toISOString()
    };

    const updatedTickets = tickets.map(ticket =>
      ticket.id === ticketId
        ? {
            ...ticket,
            messages: [...ticket.messages, newMessage],
            updated_at: new Date().toISOString()
          }
        : ticket
    );

    saveTickets(updatedTickets);
    analytics.trackEvent('ticket_message_sent', { ticketId, senderType });
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'urgent': return 'text-red-500 bg-red-500/10';
      case 'high': return 'text-orange-500 bg-orange-500/10';
      case 'medium': return 'text-yellow-500 bg-yellow-500/10';
      default: return 'text-green-500 bg-green-500/10';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'open': return <AlertCircle className="w-4 h-4" />;
      case 'in_progress': return <Clock className="w-4 h-4" />;
      case 'resolved': return <CheckCircle className="w-4 h-4" />;
      case 'closed': return <CheckCircle className="w-4 h-4" />;
      default: return <Ticket className="w-4 h-4" />;
    }
  };

  return (
    <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl border border-gray-700/50 p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <Ticket className="w-6 h-6 text-indigo-400" />
          <h2 className="text-xl font-bold text-white">Sistema de Tickets</h2>
        </div>
        <button
          onClick={() => setShowCreateModal(true)}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg 
                   transition-colors flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          Novo Ticket
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Lista de Tickets */}
        <div className="lg:col-span-1 space-y-3 max-h-96 overflow-y-auto">
          {tickets.map((ticket) => (
            <div
              key={ticket.id}
              onClick={() => setSelectedTicket(ticket)}
              className={`p-4 rounded-xl cursor-pointer transition-all border ${
                selectedTicket?.id === ticket.id
                  ? 'bg-indigo-600/20 border-indigo-500'
                  : 'bg-gray-700/50 border-gray-600/50 hover:bg-gray-600/50'
              }`}
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-medium text-white truncate">{ticket.title}</h3>
                <span className={`px-2 py-1 rounded-lg text-xs ${getPriorityColor(ticket.priority)}`}>
                  {ticket.priority}
                </span>
              </div>
              <p className="text-sm text-gray-300 mb-3 line-clamp-2">{ticket.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-gray-400">
                  {getStatusIcon(ticket.status)}
                  <span className="text-xs">{ticket.status}</span>
                </div>
                <span className="text-xs text-gray-500">
                  {new Date(ticket.updated_at).toLocaleDateString()}
                </span>
              </div>
            </div>
          ))}
          
          {tickets.length === 0 && (
            <div className="text-center py-8 text-gray-400">
              <Ticket className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p>Nenhum ticket encontrado</p>
            </div>
          )}
        </div>

        {/* Detalhes do Ticket */}
        <div className="lg:col-span-2">
          {selectedTicket ? (
            <div className="bg-gray-700/30 rounded-xl p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{selectedTicket.title}</h3>
                  <p className="text-gray-300 mb-4">{selectedTicket.description}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <span>De: {selectedTicket.user_name}</span>
                    <span>Email: {selectedTicket.user_email}</span>
                    <span>Categoria: {selectedTicket.category}</span>
                  </div>
                </div>
                <select
                  value={selectedTicket.status}
                  onChange={(e) => updateTicketStatus(selectedTicket.id, e.target.value as any)}
                  className="bg-gray-600 border border-gray-500 rounded-lg px-3 py-1 text-white text-sm"
                >
                  <option value="open">Aberto</option>
                  <option value="in_progress">Em Andamento</option>
                  <option value="resolved">Resolvido</option>
                  <option value="closed">Fechado</option>
                </select>
              </div>

              {/* Mensagens */}
              <div className="space-y-3 mb-4 max-h-64 overflow-y-auto">
                {selectedTicket.messages.map((message) => (
                  <div
                    key={message.id}
                    className={`p-3 rounded-lg ${
                      message.sender_type === 'admin'
                        ? 'bg-indigo-600/20 ml-8'
                        : 'bg-gray-600/30 mr-8'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-white">{message.sender_name}</span>
                      <span className="text-xs text-gray-400">
                        {new Date(message.timestamp).toLocaleString()}
                      </span>
                    </div>
                    <p className="text-gray-300 text-sm">{message.content}</p>
                  </div>
                ))}
              </div>

              {/* Input de nova mensagem */}
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Digite sua resposta..."
                  className="flex-1 px-4 py-2 bg-gray-600 border border-gray-500 rounded-lg 
                           focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter' && newMessage.trim()) {
                      addMessage(selectedTicket.id, newMessage, 'admin', 'Suporte GV');
                      setNewMessage('');
                    }
                  }}
                />
                <button
                  onClick={() => {
                    if (newMessage.trim()) {
                      addMessage(selectedTicket.id, newMessage, 'admin', 'Suporte GV');
                      setNewMessage('');
                    }
                  }}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg 
                           transition-colors flex items-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  Responder
                </button>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-64 text-gray-400">
              <div className="text-center">
                <Ticket className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>Selecione um ticket para ver os detalhes</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Modal de criação de ticket */}
      {showCreateModal && (
        <CreateTicketModal
          onClose={() => setShowCreateModal(false)}
          onCreate={createTicket}
        />
      )}
    </div>
  );
};

const CreateTicketModal = ({ 
  onClose, 
  onCreate 
}: { 
  onClose: () => void; 
  onCreate: (ticket: any) => void; 
}) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    priority: 'medium' as const,
    category: '',
    user_name: '',
    user_email: '',
    status: 'open' as const
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.title && formData.description && formData.user_name && formData.user_email) {
      onCreate(formData);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gray-800 rounded-2xl p-6 w-full max-w-md border border-gray-700">
        <h3 className="text-xl font-bold mb-4 text-center text-white">Criar Novo Ticket</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Título do ticket"
            value={formData.title}
            onChange={(e) => setFormData({...formData, title: e.target.value})}
            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl 
                     focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"
            required
          />
          <textarea
            placeholder="Descrição detalhada"
            value={formData.description}
            onChange={(e) => setFormData({...formData, description: e.target.value})}
            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl 
                     focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white h-24"
            required
          />
          <div className="grid grid-cols-2 gap-3">
            <select
              value={formData.priority}
              onChange={(e) => setFormData({...formData, priority: e.target.value as any})}
              className="px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl 
                       focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"
            >
              <option value="low">Baixa</option>
              <option value="medium">Média</option>
              <option value="high">Alta</option>
              <option value="urgent">Urgente</option>
            </select>
            <input
              type="text"
              placeholder="Categoria"
              value={formData.category}
              onChange={(e) => setFormData({...formData, category: e.target.value})}
              className="px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl 
                       focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <input
              type="text"
              placeholder="Seu nome"
              value={formData.user_name}
              onChange={(e) => setFormData({...formData, user_name: e.target.value})}
              className="px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl 
                       focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"
              required
            />
            <input
              type="email"
              placeholder="Seu email"
              value={formData.user_email}
              onChange={(e) => setFormData({...formData, user_email: e.target.value})}
              className="px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl 
                       focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"
              required
            />
          </div>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-gray-600 hover:bg-gray-700 text-white py-3 rounded-xl 
                       transition-colors font-medium"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl 
                       transition-colors font-medium"
            >
              Criar Ticket
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TicketSystem;
