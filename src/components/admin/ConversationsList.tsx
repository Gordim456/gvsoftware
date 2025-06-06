
import { useState, useMemo } from "react";
import { MessageSquare, Clock, Trash2, Search, Settings } from "lucide-react";
import { Conversation } from "../chat/ChatBotTypes";
import { ScrollArea } from "../ui/scroll-area";

// Hook personalizado para debounce
const useDebounce = (value: string, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useState(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  });

  return debouncedValue;
};

interface ConversationsListProps {
  conversations: Conversation[];
  selectedConversation: string | null;
  onSelectConversation: (id: string) => void;
  searchTerm: string;
  onSearchChange: (term: string) => void;
  filterStatus: 'all' | 'active' | 'waiting';
  onFilterChange: (status: 'all' | 'active' | 'waiting') => void;
  isLoading: boolean;
  onRefresh: () => void;
  onDeleteConversation: (id: string) => void;
}

const ConversationsList = ({
  conversations,
  selectedConversation,
  onSelectConversation,
  searchTerm,
  onSearchChange,
  filterStatus,
  onFilterChange,
  isLoading,
  onRefresh,
  onDeleteConversation
}: ConversationsListProps) => {
  // Debounce search para melhor performance
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

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

  return (
    <div className="xl:col-span-1 bg-gray-800/50 backdrop-blur-lg rounded-xl sm:rounded-2xl p-3 sm:p-6 border border-gray-700/50">
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <h2 className="text-lg sm:text-xl font-bold flex items-center gap-2 sm:gap-3">
          <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-400" />
          <span className="hidden sm:inline">Conversas</span>
          <span className="bg-indigo-600 text-white text-xs px-2 py-1 rounded-full">
            {filteredConversations.length}
          </span>
        </h2>
        <button
          onClick={onRefresh}
          className="text-indigo-400 hover:text-indigo-300 p-2 rounded-lg hover:bg-gray-700/50 transition-colors"
          title="Atualizar conversas"
        >
          <Settings className="w-4 h-4" />
        </button>
      </div>

      {/* Filtros */}
      <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Buscar..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-2 sm:py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl 
                     focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white placeholder-gray-400 text-sm sm:text-base"
          />
        </div>

        <div className="flex gap-1 sm:gap-2">
          {['all', 'active', 'waiting'].map((status) => (
            <button
              key={status}
              onClick={() => onFilterChange(status as any)}
              className={`px-2 sm:px-3 py-1 sm:py-2 rounded-lg text-xs font-medium transition-colors flex-1 ${
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
      <ScrollArea className="h-[300px] sm:h-[500px]">
        <div className="space-y-2 sm:space-y-3 pr-2">
          {isLoading ? (
            <div className="text-center py-8 text-gray-400">
              <div className="animate-spin w-6 h-6 border-2 border-indigo-400 border-t-transparent rounded-full mx-auto mb-2"></div>
              <p className="text-sm">Carregando...</p>
            </div>
          ) : filteredConversations.length === 0 ? (
            <div className="text-center py-8 text-gray-400">
              <MessageSquare className="w-8 h-8 sm:w-12 sm:h-12 mx-auto mb-4 opacity-50" />
              <p className="text-sm">Nenhuma conversa encontrada</p>
              <button
                onClick={onRefresh}
                className="mt-2 text-indigo-400 hover:text-indigo-300 text-xs sm:text-sm underline"
              >
                Tentar novamente
              </button>
            </div>
          ) : (
            filteredConversations.map((conversation) => (
              <div
                key={conversation.id}
                className={`p-3 sm:p-4 rounded-xl cursor-pointer transition-all duration-200 group ${
                  selectedConversation === conversation.id
                    ? 'bg-indigo-600/20 border-2 border-indigo-500'
                    : 'bg-gray-700/30 hover:bg-gray-600/50 border-2 border-transparent'
                }`}
                onClick={() => onSelectConversation(conversation.id)}
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="font-semibold text-white truncate flex-1 text-sm sm:text-base">
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
                        onDeleteConversation(conversation.id);
                      }}
                      className="opacity-0 group-hover:opacity-100 text-red-400 hover:text-red-300 
                               transition-all p-1 rounded"
                    >
                      <Trash2 className="w-3 h-3" />
                    </button>
                  </div>
                </div>
                
                <div className="text-xs sm:text-sm text-gray-300 mb-2 truncate">
                  📧 {conversation.user_email || 'Email não informado'}
                </div>
                
                <div className="text-xs sm:text-sm text-indigo-300 mb-3 font-medium truncate">
                  {conversation.subject || 'Assunto não informado'}
                </div>
                
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <Clock className="w-3 h-3" />
                  <span className="truncate">
                    {conversation.updated_at ? new Date(conversation.updated_at).toLocaleString('pt-BR') : 'Data não disponível'}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      </ScrollArea>
    </div>
  );
};

export default ConversationsList;
