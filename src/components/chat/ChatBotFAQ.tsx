
import * as React from "react";
import { ChevronDown, ChevronUp, ArrowLeft, Clock, CheckCircle } from "lucide-react";

interface ChatBotFAQProps {
  onBack: () => void;
  userName: string;
}

const ChatBotFAQ: React.FC<ChatBotFAQProps> = ({ onBack, userName }) => {
  const [openFAQ, setOpenFAQ] = React.useState<number | null>(null);

  const faqs = [
    {
      question: "Quanto tempo leva para desenvolver um site?",
      answer: "O tempo varia de acordo com a complexidade. Sites simples: 2-3 semanas. Sites complexos com funcionalidades avançadas: 4-8 semanas. Sempre fornecemos cronograma detalhado no início do projeto."
    },
    {
      question: "Vocês desenvolvem aplicativos mobile?",
      answer: "Sim! Desenvolvemos apps nativos para iOS e Android, além de aplicações híbridas. Nosso portfólio inclui o app Bebidas ON, que revolucionou o delivery de bebidas."
    },
    {
      question: "Qual é o investimento para um projeto?",
      answer: "Os valores variam conforme escopo e complexidade. Sites institucionais a partir de R$ 2.500. E-commerce a partir de R$ 5.000. Apps mobile a partir de R$ 8.000. Entre em contato para orçamento personalizado!"
    },
    {
      question: "Vocês oferecem suporte após a entrega?",
      answer: "Sim! Oferecemos 3 meses de suporte gratuito após a entrega. Depois disso, temos planos de manutenção mensal com preços acessíveis para garantir que tudo funcione perfeitamente."
    },
    {
      question: "Posso acompanhar o desenvolvimento do projeto?",
      answer: "Claro! Você terá acesso a uma área cliente onde pode acompanhar o progresso, fazer comentários e aprovar cada etapa. Mantemos comunicação constante via WhatsApp e reuniões semanais."
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <button
          onClick={onBack}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <ArrowLeft className="w-5 h-5 text-gray-600" />
        </button>
        <div className="flex items-start gap-3 flex-1">
          <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-600 
                        rounded-full flex items-center justify-center flex-shrink-0">
            <CheckCircle className="w-4 h-4 text-white" />
          </div>
          <div className="bg-white rounded-2xl rounded-tl-md p-4 shadow-lg border border-gray-100">
            <p className="text-gray-800 font-medium">
              Aqui estão as perguntas mais frequentes, {userName}! 🤖
            </p>
          </div>
        </div>
      </div>

      {/* FAQ List */}
      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-xl overflow-hidden 
                     shadow-sm hover:shadow-md transition-shadow"
          >
            <button
              onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
              className="w-full p-4 text-left flex items-center justify-between 
                       hover:bg-gray-50 transition-colors"
            >
              <span className="font-medium text-gray-800 pr-4">{faq.question}</span>
              {openFAQ === index ? (
                <ChevronUp className="w-5 h-5 text-purple-500 flex-shrink-0" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
              )}
            </button>
            
            {openFAQ === index && (
              <div className="px-4 pb-4 border-t border-gray-100">
                <p className="text-gray-600 leading-relaxed mt-3">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Contact Option */}
      <div className="bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 
                    rounded-xl p-4">
        <div className="flex items-center gap-3">
          <Clock className="w-5 h-5 text-purple-600" />
          <div>
            <p className="font-medium text-purple-800">Não encontrou sua resposta?</p>
            <p className="text-sm text-purple-600">
              Clique em "Falar com Atendente" para chat ao vivo!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBotFAQ;
