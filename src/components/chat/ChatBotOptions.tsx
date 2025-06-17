
import { ArrowRight, Sparkles, Calendar } from "lucide-react";
import { ChatOption, AUTO_MESSAGES } from "./ChatBotTypes";

interface ChatBotOptionsProps {
  onSelectOption: (option: ChatOption) => void;
  userName: string;
}

const ChatBotOptions = ({ onSelectOption, userName }: ChatBotOptionsProps) => {
  const options: ChatOption[] = [
    {
      id: 'live_chat',
      icon: '💬',
      title: 'Chat ao Vivo',
      description: 'Fale direto com nossa equipe',
      type: 'live_chat',
      auto_message: AUTO_MESSAGES.live_chat_connecting
    },
    {
      id: 'faq',
      icon: '🤖',
      title: 'Perguntas Frequentes',
      description: 'Respostas rápidas',
      type: 'faq',
      auto_message: AUTO_MESSAGES.faq_intro
    },
    {
      id: 'quote',
      icon: '💼',
      title: 'Solicitar Orçamento',
      description: 'Proposta personalizada',
      type: 'quote',
      auto_message: AUTO_MESSAGES.quote
    },
    {
      id: 'services',
      icon: '🚀',
      title: 'Nossos Serviços',
      description: 'Conheça nossas soluções',
      type: 'services',
      auto_message: AUTO_MESSAGES.services
    },
    {
      id: 'meeting',
      icon: '📅',
      title: 'Agendar Reunião',
      description: 'Conversa personalizada',
      type: 'meeting',
      auto_message: AUTO_MESSAGES.meeting
    }
  ];

  return (
    <div className="p-4 space-y-4">
      {/* Bot Welcome */}
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-600 
                      rounded-full flex items-center justify-center flex-shrink-0">
          <Sparkles className="w-4 h-4 text-white" />
        </div>
        <div className="bg-gray-100 rounded-2xl rounded-tl-md p-4 max-w-[250px]">
          <p className="text-gray-800 font-medium text-sm">
            Ótimo, {userName}! 🎉<br/>
            Como posso te ajudar?
          </p>
        </div>
      </div>

      {/* Options */}
      <div className="space-y-2">
        {options.map((option, index) => (
          <button
            key={option.id}
            onClick={() => onSelectOption(option)}
            className="w-full bg-white border border-gray-200 
                     rounded-xl p-3 text-left hover:shadow-md hover:border-indigo-300 
                     transition-all duration-200 group"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="text-xl group-hover:scale-110 transition-transform">
                  {option.icon}
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 group-hover:text-indigo-700 
                               transition-colors text-sm">
                    {option.title}
                  </h4>
                  <p className="text-xs text-gray-600">
                    {option.description}
                  </p>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-indigo-500 
                                   group-hover:translate-x-1 transition-all flex-shrink-0" />
            </div>
          </button>
        ))}
      </div>

      {/* Info Cards */}
      <div className="space-y-2">
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-3">
          <div className="flex items-center gap-2 text-blue-800">
            <Calendar className="w-4 h-4" />
            <div>
              <p className="font-medium text-xs">Horário de Atendimento</p>
              <p className="text-xs">Segunda a Sexta • 9h às 18h</p>
            </div>
          </div>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-xl p-3 text-center">
          <p className="font-medium text-green-800 text-xs mb-1">📱 WhatsApp Direto</p>
          <p className="text-xs text-green-700">(17) 99785-3416</p>
        </div>
      </div>
    </div>
  );
};

export default ChatBotOptions;
