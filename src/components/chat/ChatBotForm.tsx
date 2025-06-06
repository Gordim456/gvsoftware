
import { useState } from "react";
import { User, Mail, Phone, MessageCircle, ArrowRight, CheckCircle, Sparkles } from "lucide-react";
import { FormData } from "./ChatBotTypes";

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
      question: "Olá! 👋 Que prazer ter você aqui! Como posso te chamar?",
      field: "name" as keyof FormData,
      placeholder: "Digite seu nome...",
      icon: User,
      type: "text"
    },
    {
      question: "Incrível! 🌟 Qual é o seu melhor email para contato?",
      field: "email" as keyof FormData,
      placeholder: "seuemail@exemplo.com",
      icon: Mail,
      type: "email"
    },
    {
      question: "Perfeito! 📱 E o seu WhatsApp para conversarmos melhor?",
      field: "phone" as keyof FormData,
      placeholder: "(17) 99999-9999",
      icon: Phone,
      type: "tel"
    },
    {
      question: "Quase lá! 🚀 Sobre o que você gostaria de conversar hoje?",
      field: "subject" as keyof FormData,
      placeholder: "Site, app, sistema, e-commerce...",
      icon: MessageCircle,
      type: "text"
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
        setEmailError("Por favor, insira um email válido (exemplo: nome@email.com)");
        return;
      }
      setEmailError("");
    }

    if (currentStep < steps.length - 1) {
      setIsTyping(true);
      setTimeout(() => {
        setCurrentStep(currentStep + 1);
        setIsTyping(false);
      }, 800);
    } else {
      onComplete();
    }
  };

  const currentField = steps[currentStep]?.field;
  const currentValue = currentField ? formData[currentField] : "";
  const CurrentIcon = steps[currentStep]?.icon;

  return (
    <div className="space-y-6">
      {/* Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden shadow-inner">
        <div 
          className="bg-gradient-to-r from-purple-500 via-pink-500 to-blue-600 h-3 rounded-full 
                   transition-all duration-700 ease-out relative overflow-hidden"
          style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent animate-pulse"></div>
        </div>
      </div>

      {/* Step indicator */}
      <div className="text-center">
        <span className="text-sm font-medium text-gray-500">
          Etapa {currentStep + 1} de {steps.length}
        </span>
      </div>

      {/* Chat Messages */}
      <div className="space-y-4">
        {/* Bot Message */}
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-600 
                        rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <div className="bg-white rounded-2xl rounded-tl-md p-5 shadow-lg border border-gray-100 
                        max-w-[300px] animate-scale-in">
            {isTyping ? (
              <div className="flex gap-1">
                <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce"></div>
                <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
              </div>
            ) : (
              <p className="text-gray-800 font-medium leading-relaxed">
                {steps[currentStep]?.question}
              </p>
            )}
          </div>
        </div>

        {/* User Input */}
        {!isTyping && (
          <div className="flex items-end gap-3 justify-end">
            <div className="bg-gradient-to-br from-purple-500 via-pink-500 to-blue-600 rounded-2xl rounded-br-md 
                          p-5 shadow-xl max-w-[300px] animate-scale-in">
              <div className="space-y-4">
                <div className="relative">
                  {CurrentIcon && <CurrentIcon className="absolute left-4 top-4 w-5 h-5 text-white/80" />}
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
                    className="w-full pl-14 pr-4 py-4 bg-white/20 border-2 border-white/30 
                             rounded-xl text-white placeholder-white/70 backdrop-blur-sm
                             focus:outline-none focus:ring-2 focus:ring-white/50 
                             focus:border-white/50 transition-all font-medium"
                    required
                    autoFocus
                  />
                </div>
                
                {emailError && (
                  <div className="text-red-200 text-sm bg-red-500/20 px-3 py-2 rounded-lg border border-red-300/30">
                    {emailError}
                  </div>
                )}
                
                <button
                  onClick={handleNext}
                  disabled={!currentValue.trim() || emailError}
                  className="w-full bg-white/25 hover:bg-white/35 text-white py-4 rounded-xl 
                           transition-all duration-300 flex items-center justify-center gap-3
                           disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-sm
                           border-2 border-white/30 hover:border-white/50 font-semibold
                           hover:shadow-lg hover:scale-105"
                >
                  {currentStep === steps.length - 1 ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      Vamos conversar! 🎉
                    </>
                  ) : (
                    <>
                      Próximo passo
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>
              </div>
            </div>
            <div className="w-10 h-10 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full flex items-center justify-center shadow-lg">
              <User className="w-5 h-5 text-gray-600" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatBotForm;
