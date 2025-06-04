
import { useState } from "react";
import { MessageSquare, X, Send, Sparkles } from "lucide-react";

interface UserInfo {
  name: string;
  email: string;
  project: string;
  budget: string;
  timeline: string;
}

interface Question {
  id: keyof UserInfo;
  question: string;
  type: "text" | "select";
  options?: string[];
  placeholder?: string;
}

const questions: Question[] = [
  {
    id: "name",
    question: "Qual é o seu nome?",
    type: "text",
    placeholder: "Digite seu nome completo"
  },
  {
    id: "email",
    question: "Qual é o seu email?",
    type: "text",
    placeholder: "Digite seu email"
  },
  {
    id: "project",
    question: "Que tipo de projeto você precisa?",
    type: "select",
    options: [
      "Site Institucional",
      "E-commerce",
      "Sistema Web",
      "Aplicativo Mobile",
      "Landing Page",
      "Outro"
    ]
  },
  {
    id: "budget",
    question: "Qual é o seu orçamento aproximado?",
    type: "select",
    options: [
      "Até R$ 5.000",
      "R$ 5.000 - R$ 15.000",
      "R$ 15.000 - R$ 30.000",
      "R$ 30.000 - R$ 50.000",
      "Acima de R$ 50.000"
    ]
  },
  {
    id: "timeline",
    question: "Qual é o prazo desejado?",
    type: "select",
    options: [
      "Urgente (até 2 semanas)",
      "Rápido (1 mês)",
      "Normal (2-3 meses)",
      "Flexível (3+ meses)"
    ]
  }
];

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Partial<UserInfo>>({});
  const [currentAnswer, setCurrentAnswer] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);

  const handleAnswer = () => {
    if (!currentAnswer.trim()) return;

    const question = questions[currentQuestion];
    const newAnswers = { ...answers, [question.id]: currentAnswer };
    setAnswers(newAnswers);
    setCurrentAnswer("");

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setIsCompleted(true);
      // Save to localStorage or send to server
      localStorage.setItem('chatbot-lead', JSON.stringify(newAnswers));
    }
  };

  const handleSelect = (option: string) => {
    const question = questions[currentQuestion];
    const newAnswers = { ...answers, [question.id]: option };
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setIsCompleted(true);
      localStorage.setItem('chatbot-lead', JSON.stringify(newAnswers));
    }
  };

  const resetChat = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setCurrentAnswer("");
    setIsCompleted(false);
  };

  return (
    <>
      {!isOpen && (
        <div className="fixed bottom-8 right-8 z-50">
          <button
            onClick={() => setIsOpen(true)}
            className="bg-gradient-to-br from-purple-600 via-blue-600 to-blue-700 
                     text-white p-4 rounded-full shadow-lg hover:shadow-xl 
                     transition-all duration-300 hover:scale-110
                     group relative animate-bounce"
          >
            <MessageSquare className="w-6 h-6" />
            <span className="absolute -top-12 right-0 bg-white px-4 py-2 rounded-full 
                         text-sm font-medium text-blue-600 shadow-lg opacity-0 
                         group-hover:opacity-100 transition-opacity duration-300 
                         whitespace-nowrap">
              Em que posso ajudar hoje? <Sparkles className="w-4 h-4 inline-block ml-1" />
            </span>
          </button>
        </div>
      )}

      {isOpen && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50">
          <div className="fixed bottom-0 right-0 w-full md:w-[400px] h-full md:h-[600px] 
                       bg-white shadow-2xl transition-all duration-300 rounded-t-[2rem]
                       animate-[slideIn_0.3s_ease-out] overflow-hidden">
            
            {/* Header */}
            <div className="flex items-center justify-between p-4 bg-gradient-to-br 
                          from-purple-600 via-blue-600 to-blue-700 text-white 
                          rounded-t-[2rem]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center 
                              justify-center backdrop-blur-sm">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold">Chat GV Software</h3>
                  <span className="text-xs text-white/80">Resposta rápida</span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="h-[calc(100%-140px)] overflow-y-auto p-6">
              {!isCompleted ? (
                <div className="space-y-6">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-purple-500 to-blue-600 
                                  rounded-full flex items-center justify-center mb-4">
                      <MessageSquare className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-bold text-gray-800 text-xl">Vamos conversar!</h4>
                    <p className="text-sm text-gray-500 mt-2">
                      Pergunta {currentQuestion + 1} de {questions.length}
                    </p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-2xl">
                    <h5 className="text-lg font-medium text-gray-800 mb-4">
                      {questions[currentQuestion].question}
                    </h5>

                    {questions[currentQuestion].type === "text" ? (
                      <div className="space-y-4">
                        <input
                          type={questions[currentQuestion].id === "email" ? "email" : "text"}
                          value={currentAnswer}
                          onChange={(e) => setCurrentAnswer(e.target.value)}
                          placeholder={questions[currentQuestion].placeholder}
                          className="w-full p-4 bg-white border border-gray-200 rounded-xl 
                                   focus:outline-none focus:ring-2 focus:ring-blue-500/20 
                                   focus:border-blue-500 transition-all"
                          onKeyPress={(e) => e.key === 'Enter' && handleAnswer()}
                        />
                        <button
                          onClick={handleAnswer}
                          disabled={!currentAnswer.trim()}
                          className="w-full bg-gradient-to-r from-purple-600 to-blue-600 
                                   text-white py-3 rounded-xl hover:shadow-lg transition-all 
                                   duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          Continuar
                        </button>
                      </div>
                    ) : (
                      <div className="grid gap-3">
                        {questions[currentQuestion].options?.map((option) => (
                          <button
                            key={option}
                            onClick={() => handleSelect(option)}
                            className="p-4 text-left bg-white border border-gray-200 rounded-xl 
                                     hover:border-blue-500 hover:bg-blue-50 transition-all duration-200"
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Progress Bar */}
                  <div className="bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-purple-600 to-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                    />
                  </div>
                </div>
              ) : (
                <div className="text-center space-y-6">
                  <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">✅</span>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-bold text-gray-800 mb-2">
                      Obrigado, {answers.name}!
                    </h4>
                    <p className="text-gray-600">
                      Recebemos suas informações e entraremos em contato em breve através do email {answers.email}.
                    </p>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-xl text-sm text-blue-700">
                    <p className="font-medium mb-2">Resumo do seu projeto:</p>
                    <ul className="space-y-1">
                      <li>📋 Projeto: {answers.project}</li>
                      <li>💰 Orçamento: {answers.budget}</li>
                      <li>⏰ Prazo: {answers.timeline}</li>
                    </ul>
                  </div>

                  <button
                    onClick={resetChat}
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 
                             text-white py-3 rounded-xl hover:shadow-lg transition-all duration-300"
                  >
                    Nova Conversa
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
