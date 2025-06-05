
import { MessageSquare, HelpCircle, Calculator, Rocket, Calendar, ArrowRight } from "lucide-react";
import { ChatOption } from "./ChatBotTypes";

interface ChatBotOptionsProps {
  onSelectOption: (option: ChatOption) => void;
  userName: string;
}

const ChatBotOptions = ({ onSelectOption, userName }: ChatBotOptionsProps) => {
  const options: ChatOption[] = [
    {
      id: 'live_chat',
      icon: '💬',
      title: 'Falar com Atendente',
      description: 'Chat ao vivo com nossa equipe',
      type: 'live_chat'
    },
    {
      id: 'faq',
      icon: '🤖',
      title: 'Perguntas Frequentes',
      description: 'Respostas rápidas e automáticas',
      type: 'faq'
    },
    {
      id: 'quote',
      icon: '📋',
      title: 'Solicitar Orçamento',
      description: 'Receba uma proposta personalizada',
      type: 'quote'
    },
    {
      id: 'services',
      icon: '🚀',
      title: 'Nossos Serviços',
      description: 'Conheça nossas soluções',
      type: 'services'
    },
    {
      id: 'meeting',
      icon: '📞',
      title: 'Agendar Reunião',
      description: 'Marque uma conversa conosco',
      type: 'meeting'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Bot Welcome Message */}
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-600 
                      rounded-full flex items-center justify-center flex-shrink-0">
          <MessageSquare className="w-4 h-4 text-white" />
        </div>
        <div className="bg-white rounded-2xl rounded-tl-md p-4 shadow-lg border border-gray-100 
                      max-w-[300px] animate-scale-in">
          <p className="text-gray-800 font-medium">
            Ótimo, {userName}! 🎉 Como posso te ajudar hoje?
          </p>
        </div>
      </div>

      {/* Options Grid */}
      <div className="space-y-3">
        {options.map((option, index) => (
          <button
            key={option.id}
            onClick={() => onSelectOption(option)}
            className="w-full bg-gradient-to-r from-gray-50 to-white border border-gray-200 
                     rounded-xl p-4 text-left hover:shadow-lg hover:border-purple-300 
                     transition-all duration-300 group animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{option.icon}</span>
                <div>
                  <h4 className="font-semibold text-gray-800 group-hover:text-purple-600 
                               transition-colors">
                    {option.title}
                  </h4>
                  <p className="text-sm text-gray-600">{option.description}</p>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-purple-500 
                                   group-hover:translate-x-1 transition-all" />
            </div>
          </button>
        ))}
      </div>

      {/* Business Hours Info */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
        <div className="flex items-center gap-2 text-blue-700">
          <Calendar className="w-4 h-4" />
          <span className="text-sm font-medium">
            Horário de Atendimento: Seg-Sex 9h às 18h
          </span>
        </div>
      </div>
    </div>
  );
};

export default ChatBotOptions;
