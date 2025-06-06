
import { MessageSquare, HelpCircle, Calculator, Rocket, Calendar, ArrowRight, Sparkles } from "lucide-react";
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
      description: 'Fale direto com nossa equipe especializada',
      type: 'live_chat',
      auto_message: AUTO_MESSAGES.live_chat_connecting
    },
    {
      id: 'faq',
      icon: '🤖',
      title: 'Respostas Rápidas',
      description: 'Perguntas frequentes com IA inteligente',
      type: 'faq',
      auto_message: AUTO_MESSAGES.faq_intro
    },
    {
      id: 'quote',
      icon: '💼',
      title: 'Solicitar Orçamento',
      description: 'Proposta personalizada para seu projeto',
      type: 'quote',
      auto_message: AUTO_MESSAGES.quote
    },
    {
      id: 'services',
      icon: '🚀',
      title: 'Nossos Serviços',
      description: 'Conheça todas nossas soluções',
      type: 'services',
      auto_message: AUTO_MESSAGES.services
    },
    {
      id: 'meeting',
      icon: '📅',
      title: 'Agendar Reunião',
      description: 'Conversa personalizada sobre seu projeto',
      type: 'meeting',
      auto_message: AUTO_MESSAGES.meeting
    }
  ];

  return (
    <div className="space-y-8">
      {/* Bot Welcome Message */}
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-600 
                      rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
          <Sparkles className="w-5 h-5 text-white animate-pulse" />
        </div>
        <div className="bg-white rounded-2xl rounded-tl-md p-5 shadow-xl border border-gray-100 
                      max-w-[320px] animate-scale-in relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-blue-50/50"></div>
          <div className="relative z-10">
            <p className="text-gray-800 font-bold text-lg mb-2">
              Perfeito, {userName}! 🎉
            </p>
            <p className="text-gray-600 leading-relaxed">
              Agora escolha como posso te ajudar melhor hoje:
            </p>
          </div>
        </div>
      </div>

      {/* Options Grid */}
      <div className="space-y-4">
        {options.map((option, index) => (
          <button
            key={option.id}
            onClick={() => onSelectOption(option)}
            className="w-full bg-gradient-to-r from-white to-gray-50 border-2 border-gray-200 
                     rounded-2xl p-5 text-left hover:shadow-2xl hover:border-purple-300 
                     transition-all duration-300 group animate-fade-in hover:scale-105
                     transform hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                  {option.icon}
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-800 group-hover:text-purple-700 
                               transition-colors text-lg mb-1">
                    {option.title}
                  </h4>
                  <p className="text-sm text-gray-600 group-hover:text-gray-700 leading-relaxed">
                    {option.description}
                  </p>
                </div>
              </div>
              <ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-purple-500 
                                   group-hover:translate-x-1 transition-all flex-shrink-0" />
            </div>
          </button>
        ))}
      </div>

      {/* Business Hours Info */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 
                    rounded-2xl p-5 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-transparent"></div>
        <div className="relative z-10 flex items-center gap-3 text-blue-800">
          <Calendar className="w-5 h-5 animate-pulse" />
          <div>
            <p className="font-bold text-sm mb-1">🕘 Horário de Atendimento</p>
            <p className="text-sm">Segunda a Sexta • 9h às 18h</p>
          </div>
        </div>
      </div>

      {/* WhatsApp Direct */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 
                    rounded-2xl p-5 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-100/50 to-transparent"></div>
        <div className="relative z-10 text-center">
          <p className="font-bold text-green-800 mb-2">📱 WhatsApp Direto</p>
          <p className="text-sm text-green-700">
            Prefere falar direto? Chama no WhatsApp: (17) 99785-3416
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChatBotOptions;
