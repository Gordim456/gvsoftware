
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
    <div className="p-6 space-y-8 animate-form">
      {/* Progress com animação */}
      <div className="space-y-3">
        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden shadow-inner">
          <div 
            className="bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-600 h-3 rounded-full 
                     transition-all duration-700 ease-out shadow-lg animate-glow"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="flex justify-between text-sm text-gray-600 font-medium">
          <span>Etapa {currentStep + 1} de {steps.length}</span>
          <span className="text-indigo-600 font-bold">{Math.round(progress)}%</span>
        </div>
      </div>

      {/* Bot Message com animação */}
      <div className="flex items-start gap-4 animate-fadeIn">
        <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-600 
                      rounded-full flex items-center justify-center flex-shrink-0 animate-pulse-ring">
          <Sparkles className="w-5 h-5 text-white" />
        </div>
        <div className="bg-gradient-to-r from-gray-100 to-gray-50 rounded-3xl rounded-tl-lg p-5 max-w-[280px] 
                      shadow-lg border border-gray-200">
          <p className="text-gray-800 font-semibold text-base">
            {steps[currentStep]?.question}
          </p>
        </div>
      </div>

      {/* User Input com animações */}
      <div className="flex items-end gap-4 justify-end animate-slideIn">
        <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 rounded-3xl rounded-br-lg 
                      p-6 max-w-[320px] shadow-2xl transform hover:scale-[1.02] transition-all duration-300">
          <div className="space-y-5">
            <div className="relative group">
              {CurrentIcon && (
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10">
                  <CurrentIcon className="w-5 h-5 text-white/90 group-focus-within:text-white transition-colors" />
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
                className="w-full pl-12 pr-4 py-4 bg-white/20 border-2 border-white/40 
                         rounded-2xl text-white placeholder-white/80 backdrop-blur-sm
                         focus:outline-none focus:ring-4 focus:ring-white/30 
                         focus:border-white/70 transition-all text-base font-medium
                         hover:bg-white/25 focus:scale-[1.02]"
                required
                autoFocus
              />
            </div>
            
            {emailError && (
              <div className="text-red-100 text-sm bg-red-500/40 px-4 py-3 rounded-xl border border-red-400/50 
                            backdrop-blur-sm animate-fadeIn">
                ⚠️ {emailError}
              </div>
            )}
            
            <button
              onClick={handleNext}
              disabled={!currentValue.trim() || !!emailError}
              className="w-full bg-white/25 hover:bg-white/35 text-white py-4 rounded-2xl 
                       transition-all duration-300 flex items-center justify-center gap-3
                       disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-sm
                       border-2 border-white/50 hover:border-white/70 font-bold text-base
                       hover:scale-[1.02] active:scale-[0.98] group shadow-lg"
            >
              {currentStep === steps.length - 1 ? (
                <>
                  <CheckCircle className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  Vamos começar!
                </>
              ) : (
                <>
                  Próximo
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </div>
        </div>
        <div className="w-10 h-10 bg-gradient-to-r from-gray-300 to-gray-400 rounded-full 
                      flex items-center justify-center shadow-lg">
          <User className="w-5 h-5 text-gray-700" />
        </div>
      </div>
    </div>
  );
};

export default ChatBotForm;
