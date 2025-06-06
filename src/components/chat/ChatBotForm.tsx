
import { useState } from "react";
import { User, Mail, Phone, MessageCircle, ArrowRight, CheckCircle, Sparkles, Zap, Target } from "lucide-react";
import { FormData, AUTO_MESSAGES } from "./ChatBotTypes";

interface ChatBotFormProps {
  formData: FormData;
  setFormData: (data: FormData) => void;
  onComplete: () => void;
}

const ChatBotForm = ({ formData, setFormData, onComplete }: ChatBotFormProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [emailError, setEmailError] = useState("");

  const steps = [
    {
      question: "Olá! ✨ Que alegria ter você aqui na GV Software! Como posso te chamar?",
      field: "name" as keyof FormData,
      placeholder: "Seu nome...",
      icon: User,
      type: "text",
      subtitle: "Vamos personalizar nossa conversa! 😊"
    },
    {
      question: "Perfeito! 🎯 Qual é seu melhor email para contato?",
      field: "email" as keyof FormData,
      placeholder: "seu@email.com",
      icon: Mail,
      type: "email",
      subtitle: "Assim posso te enviar propostas e atualizações!"
    },
    {
      question: "Excelente! 📱 E seu WhatsApp? (Nosso canal preferido de comunicação)",
      field: "phone" as keyof FormData,
      placeholder: "(17) 99999-9999",
      icon: Phone,
      type: "tel",
      subtitle: "Para conversas mais rápidas e diretas! 🚀"
    },
    {
      question: "Agora vamos ao que interessa! 💼 Sobre o que você gostaria de conversar?",
      field: "subject" as keyof FormData,
      placeholder: "Site, app, sistema, e-commerce, consultoria...",
      icon: Target,
      type: "text",
      subtitle: "Conte-me sobre seu projeto dos sonhos! ✨"
    }
  ];

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleNext = () => {
    const currentField = steps[currentStep]?.field;
    const currentValue = currentField ? formData[currentField] : "";

    // Validação específica para email
    if (currentField === 'email') {
      if (!validateEmail(currentValue)) {
        setEmailError("Ops! 😅 Por favor, insira um email válido (exemplo: nome@email.com)");
        return;
      }
      setEmailError("");
    }

    if (currentStep < steps.length - 1) {
      setIsTyping(true);
      setTimeout(() => {
        setCurrentStep(currentStep + 1);
        setIsTyping(false);
      }, 1200);
    } else {
      onComplete();
    }
  };

  const currentField = steps[currentStep]?.field;
  const currentValue = currentField ? formData[currentField] : "";
  const CurrentIcon = steps[currentStep]?.icon;
  const currentProgress = ((currentStep + 1) / steps.length) * 100;

  return (
    <div className="space-y-8">
      {/* Progress Bar Modernizado */}
      <div className="relative">
        <div className="w-full bg-gradient-to-r from-gray-100 to-gray-200 rounded-full h-4 overflow-hidden shadow-inner">
          <div 
            className="bg-gradient-to-r from-purple-500 via-pink-500 to-blue-600 h-4 rounded-full 
                     transition-all duration-1000 ease-out relative overflow-hidden shadow-lg"
            style={{ width: `${currentProgress}%` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/40 to-transparent 
                          animate-pulse rounded-full"></div>
            <div className="absolute right-0 top-0 h-full w-8 bg-white/20 blur-sm 
                          animate-[shimmer_2s_infinite] rounded-full"></div>
          </div>
        </div>
        <div className="flex justify-between mt-3">
          <span className="text-sm font-bold text-purple-600">
            Etapa {currentStep + 1} de {steps.length}
          </span>
          <span className="text-sm font-medium text-gray-600">
            {Math.round(currentProgress)}% completo 🎯
          </span>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="space-y-6">
        {/* Bot Message */}
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 via-pink-500 to-blue-600 
                        rounded-2xl flex items-center justify-center flex-shrink-0 shadow-xl
                        animate-pulse hover:animate-none transition-all">
            <Sparkles className="w-6 h-6 text-white animate-spin" style={{animationDuration: '3s'}} />
          </div>
          <div className="bg-white rounded-3xl rounded-tl-lg p-6 shadow-2xl border border-gray-100 
                        max-w-[350px] animate-scale-in relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-blue-50/50 rounded-3xl"></div>
            <div className="relative z-10">
              {isTyping ? (
                <div className="space-y-3">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce"></div>
                    <div className="w-3 h-3 bg-pink-400 rounded-full animate-bounce" 
                         style={{animationDelay: '0.2s'}}></div>
                    <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce" 
                         style={{animationDelay: '0.4s'}}></div>
                  </div>
                  <p className="text-gray-500 text-sm">Preparando próxima pergunta...</p>
                </div>
              ) : (
                <div className="space-y-3">
                  <p className="text-gray-800 font-bold text-lg leading-relaxed">
                    {steps[currentStep]?.question}
                  </p>
                  <p className="text-purple-600 text-sm font-medium">
                    {steps[currentStep]?.subtitle}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* User Input */}
        {!isTyping && (
          <div className="flex items-end gap-4 justify-end">
            <div className="bg-gradient-to-br from-purple-600 via-pink-600 to-blue-700 rounded-3xl rounded-br-lg 
                          p-6 shadow-2xl max-w-[350px] animate-scale-in relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl"></div>
              
              <div className="space-y-5 relative z-10">
                <div className="relative">
                  {CurrentIcon && (
                    <div className="absolute left-5 top-1/2 transform -translate-y-1/2 z-10">
                      <CurrentIcon className="w-6 h-6 text-white/90" />
                    </div>
                  )}
                  <input
                    type={steps[currentStep]?.type}
                    placeholder={steps[currentStep]?.placeholder}
                    value={currentValue}
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        [currentField]: e.target.value
                      });
                      if (emailError) setEmailError("");
                    }}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter' && currentValue.trim()) {
                        handleNext();
                      }
                    }}
                    className="w-full pl-16 pr-5 py-5 bg-white/20 border-3 border-white/40 
                             rounded-2xl text-white placeholder-white/80 backdrop-blur-lg
                             focus:outline-none focus:ring-4 focus:ring-white/30 
                             focus:border-white/60 transition-all font-medium text-lg
                             hover:bg-white/25"
                    required
                    autoFocus
                  />
                </div>
                
                {emailError && (
                  <div className="text-red-100 text-sm bg-red-500/30 px-4 py-3 rounded-xl border border-red-300/40
                                backdrop-blur-sm font-medium">
                    {emailError}
                  </div>
                )}
                
                <button
                  onClick={handleNext}
                  disabled={!currentValue.trim() || !!emailError}
                  className="w-full bg-white/30 hover:bg-white/40 text-white py-5 rounded-2xl 
                           transition-all duration-300 flex items-center justify-center gap-4
                           disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-lg
                           border-2 border-white/40 hover:border-white/60 font-bold text-lg
                           hover:shadow-2xl hover:scale-105 transform"
                >
                  {currentStep === steps.length - 1 ? (
                    <>
                      <CheckCircle className="w-6 h-6" />
                      Vamos começar! 🚀
                    </>
                  ) : (
                    <>
                      Próxima pergunta
                      <ArrowRight className="w-6 h-6" />
                    </>
                  )}
                </button>
              </div>
            </div>
            <div className="w-12 h-12 bg-gradient-to-br from-gray-300 to-gray-400 rounded-2xl 
                          flex items-center justify-center shadow-xl">
              <User className="w-6 h-6 text-gray-600" />
            </div>
          </div>
        )}
      </div>

      {/* Dicas de Progresso */}
      <div className="bg-gradient-to-r from-purple-50 to-blue-50 border-2 border-purple-200 
                    rounded-2xl p-5 text-center">
        <div className="flex items-center justify-center gap-3 text-purple-700">
          <Zap className="w-5 h-5 animate-pulse" />
          <span className="text-sm font-bold">
            {currentStep === 0 && "Vamos nos conhecer melhor! 😊"}
            {currentStep === 1 && "Seu email é seguro conosco! 🔒"}
            {currentStep === 2 && "WhatsApp é nosso canal favorito! 💚"}
            {currentStep === 3 && "Última pergunta, estamos quase lá! 🏁"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ChatBotForm;
