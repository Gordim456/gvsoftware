
import { useState } from "react";
import { User, Mail, Phone, MessageCircle, ArrowRight, CheckCircle } from "lucide-react";
import { FormData } from "./ChatBotTypes";

interface ChatBotFormProps {
  formData: FormData;
  setFormData: (data: FormData) => void;
  onComplete: () => void;
}

const ChatBotForm = ({ formData, setFormData, onComplete }: ChatBotFormProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  const steps = [
    {
      question: "Olá! 👋 Qual é o seu nome?",
      field: "name" as keyof FormData,
      placeholder: "Digite seu nome completo",
      icon: User,
      type: "text"
    },
    {
      question: "Perfeito! Qual é o seu email?",
      field: "email" as keyof FormData,
      placeholder: "seu@email.com",
      icon: Mail,
      type: "email"
    },
    {
      question: "Ótimo! Qual é o seu telefone?",
      field: "phone" as keyof FormData,
      placeholder: "(11) 99999-9999",
      icon: Phone,
      type: "tel"
    },
    {
      question: "Por último, sobre o que você gostaria de falar?",
      field: "subject" as keyof FormData,
      placeholder: "Desenvolvimento de site, app, sistema...",
      icon: MessageCircle,
      type: "text"
    }
  ];

  const handleNext = () => {
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
      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
        <div 
          className="bg-gradient-to-r from-purple-500 to-blue-600 h-2 rounded-full 
                   transition-all duration-500 ease-out"
          style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
        />
      </div>

      {/* Chat Messages */}
      <div className="space-y-4">
        {/* Bot Message */}
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-600 
                        rounded-full flex items-center justify-center flex-shrink-0">
            <CheckCircle className="w-4 h-4 text-white" />
          </div>
          <div className="bg-white rounded-2xl rounded-tl-md p-4 shadow-lg border border-gray-100 
                        max-w-[280px] animate-scale-in">
            {isTyping ? (
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
              </div>
            ) : (
              <p className="text-gray-800 font-medium">
                {steps[currentStep]?.question}
              </p>
            )}
          </div>
        </div>

        {/* User Input */}
        {!isTyping && (
          <div className="flex items-end gap-3 justify-end">
            <div className="bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl rounded-br-md 
                          p-4 shadow-lg max-w-[280px] animate-scale-in">
              <div className="space-y-3">
                <div className="relative">
                  {CurrentIcon && <CurrentIcon className="absolute left-3 top-3 w-5 h-5 text-white/80" />}
                  <input
                    type={steps[currentStep]?.type}
                    placeholder={steps[currentStep]?.placeholder}
                    value={currentValue}
                    onChange={(e) => setFormData({
                      ...formData,
                      [currentField]: e.target.value
                    })}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter' && currentValue.trim()) {
                        handleNext();
                      }
                    }}
                    className="w-full pl-12 pr-4 py-3 bg-white/20 border border-white/30 
                             rounded-xl text-white placeholder-white/70 backdrop-blur-sm
                             focus:outline-none focus:ring-2 focus:ring-white/50 
                             focus:border-white/50 transition-all"
                    required
                    autoFocus
                  />
                </div>
                
                <button
                  onClick={handleNext}
                  disabled={!currentValue.trim()}
                  className="w-full bg-white/20 hover:bg-white/30 text-white py-3 rounded-xl 
                           transition-all duration-300 flex items-center justify-center gap-2
                           disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-sm
                           border border-white/30 hover:border-white/50"
                >
                  {currentStep === steps.length - 1 ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      Continuar
                    </>
                  ) : (
                    <>
                      Próximo
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>
              </div>
            </div>
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-gray-600" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatBotForm;
