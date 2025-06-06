
import { useState } from "react";
import { User, Mail, Phone, Target, ArrowRight, CheckCircle, Sparkles } from "lucide-react";
import { FormData } from "./ChatBotTypes";

interface ChatBotFormProps {
  formData: FormData;
  setFormData: (data: FormData) => void;
  onComplete: () => void;
}

const ChatBotForm = ({ formData, setFormData, onComplete }: ChatBotFormProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [emailError, setEmailError] = useState("");

  const steps = [
    {
      question: "Como posso te chamar?",
      field: "name" as keyof FormData,
      placeholder: "Seu nome...",
      icon: User,
      type: "text"
    },
    {
      question: "Qual seu melhor email?",
      field: "email" as keyof FormData,
      placeholder: "seu@email.com",
      icon: Mail,
      type: "email"
    },
    {
      question: "Seu WhatsApp?",
      field: "phone" as keyof FormData,
      placeholder: "(17) 99999-9999",
      icon: Phone,
      type: "tel"
    },
    {
      question: "O que você precisa?",
      field: "subject" as keyof FormData,
      placeholder: "Site, app, sistema...",
      icon: Target,
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

    if (currentField === 'email') {
      if (!validateEmail(currentValue)) {
        setEmailError("Email inválido");
        return;
      }
      setEmailError("");
    }

    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete();
    }
  };

  const currentField = steps[currentStep]?.field;
  const currentValue = currentField ? formData[currentField] : "";
  const CurrentIcon = steps[currentStep]?.icon;
  const progress = ((currentStep + 1) / steps.length) * 100;

  return (
    <div className="p-4 space-y-6">
      {/* Progress */}
      <div className="space-y-2">
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-indigo-500 to-purple-600 h-2 rounded-full 
                     transition-all duration-500"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="flex justify-between text-xs text-gray-500">
          <span>Etapa {currentStep + 1} de {steps.length}</span>
          <span>{Math.round(progress)}%</span>
        </div>
      </div>

      {/* Bot Message */}
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-600 
                      rounded-full flex items-center justify-center flex-shrink-0">
          <Sparkles className="w-4 h-4 text-white" />
        </div>
        <div className="bg-gray-100 rounded-2xl rounded-tl-md p-4 max-w-[250px]">
          <p className="text-gray-800 font-medium text-sm">
            {steps[currentStep]?.question}
          </p>
        </div>
      </div>

      {/* User Input */}
      <div className="flex items-end gap-3 justify-end">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl rounded-br-md 
                      p-4 max-w-[280px]">
          <div className="space-y-4">
            <div className="relative">
              {CurrentIcon && (
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                  <CurrentIcon className="w-4 h-4 text-white/90" />
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
                className="w-full pl-10 pr-3 py-3 bg-white/20 border border-white/40 
                         rounded-xl text-white placeholder-white/80 backdrop-blur-sm
                         focus:outline-none focus:ring-2 focus:ring-white/30 
                         focus:border-white/60 transition-all text-sm"
                required
                autoFocus
              />
            </div>
            
            {emailError && (
              <div className="text-red-100 text-xs bg-red-500/30 px-3 py-2 rounded-lg">
                {emailError}
              </div>
            )}
            
            <button
              onClick={handleNext}
              disabled={!currentValue.trim() || !!emailError}
              className="w-full bg-white/20 hover:bg-white/30 text-white py-3 rounded-xl 
                       transition-all duration-300 flex items-center justify-center gap-2
                       disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-sm
                       border border-white/40 hover:border-white/60 font-medium text-sm"
            >
              {currentStep === steps.length - 1 ? (
                <>
                  <CheckCircle className="w-4 h-4" />
                  Começar
                </>
              ) : (
                <>
                  Próximo
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </div>
        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
          <User className="w-4 h-4 text-gray-600" />
        </div>
      </div>
    </div>
  );
};

export default ChatBotForm;
