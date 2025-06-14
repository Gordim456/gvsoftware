
import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "Quanto tempo leva para desenvolver um projeto?",
    answer: "O tempo varia de acordo com a complexidade. Projetos simples levam 2-4 semanas, enquanto sistemas mais complexos podem levar 2-3 meses."
  },
  {
    question: "Vocês oferecem suporte após a entrega?",
    answer: "Sim! Oferecemos 3 meses de suporte gratuito após a entrega, incluindo correções de bugs e pequenos ajustes."
  },
  {
    question: "Como funciona o processo de desenvolvimento?",
    answer: "Seguimos metodologia ágil: análise de requisitos, prototipagem, desenvolvimento iterativo, testes e entrega com treinamento."
  },
  {
    question: "Quais tecnologias vocês utilizam?",
    answer: "React, Node.js, Python, TypeScript, banco de dados modernos e as melhores práticas de desenvolvimento web."
  }
];

const QuickFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gv-darker">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Perguntas <span className="gradient-text">Frequentes</span>
          </h2>
          <p className="text-gv-gray text-lg">
            Esclarecemos as principais dúvidas sobre nossos serviços
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-gv-dark border border-gray-800 rounded-lg p-6 hover:border-indigo-500/50 transition-colors"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left"
              >
                <h3 className="text-lg font-semibold pr-4">{faq.question}</h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="mt-4 pt-4 border-t border-gray-700">
                  <p className="text-gv-gray leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <p className="text-gv-gray mb-4">Não encontrou sua resposta?</p>
          <a 
            href="/contact" 
            className="text-indigo-400 hover:text-indigo-300 font-medium transition-colors"
          >
            Entre em contato conosco →
          </a>
        </div>
      </div>
    </section>
  );
};

export default QuickFAQ;
