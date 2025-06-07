
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    document.title = 'FAQ | GV Software - Perguntas Frequentes';
  }, []);

  const faqs = [
    {
      question: 'Quanto tempo leva para desenvolver um projeto?',
      answer: 'O tempo varia dependendo da complexidade do projeto. Um site simples pode levar 2-4 semanas, enquanto aplicações mais complexas podem levar 2-6 meses. Fornecemos um cronograma detalhado após a análise inicial.'
    },
    {
      question: 'Qual é o processo de desenvolvimento?',
      answer: 'Nosso processo inclui: 1) Análise e planejamento, 2) Design e prototipagem, 3) Desenvolvimento, 4) Testes, 5) Deploy e 6) Suporte pós-lançamento. Mantemos comunicação constante durante todas as fases.'
    },
    {
      question: 'Vocês oferecem suporte após a entrega?',
      answer: 'Sim! Oferecemos suporte técnico e manutenção após a entrega. Incluímos 3 meses de suporte gratuito e oferecemos planos de manutenção contínua conforme necessário.'
    },
    {
      question: 'Como funciona o orçamento?',
      answer: 'Fazemos uma análise detalhada do seu projeto e fornecemos um orçamento fixo sem surpresas. O pagamento pode ser dividido em etapas conforme o progresso do desenvolvimento.'
    },
    {
      question: 'Quais tecnologias vocês utilizam?',
      answer: 'Trabalhamos com tecnologias modernas como React, Next.js, Node.js, TypeScript, Python, React Native, Flutter e muito mais. Escolhemos a stack mais adequada para cada projeto.'
    },
    {
      question: 'Vocês desenvolvem aplicativos mobile?',
      answer: 'Sim! Desenvolvemos aplicativos nativos e híbridos para iOS e Android usando React Native, Flutter e outras tecnologias modernas.'
    },
    {
      question: 'Como garantem a qualidade do código?',
      answer: 'Seguimos as melhores práticas de desenvolvimento, fazemos code review, testes automatizados e utilizamos ferramentas de qualidade de código para garantir um produto robusto e escalável.'
    },
    {
      question: 'Posso fazer alterações durante o desenvolvimento?',
      answer: 'Sim, mas recomendamos definir bem os requisitos inicialmente. Pequenas alterações podem ser acomodadas, mas mudanças significativas podem impactar prazo e orçamento.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent">
              Perguntas <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">Frequentes</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Encontre respostas para as dúvidas mais comuns sobre nossos serviços.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div 
                  key={index}
                  className="bg-gradient-to-br from-slate-900/80 to-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-slate-800/30 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                    {openIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                    )}
                  </button>
                  
                  {openIndex === index && (
                    <motion.div 
                      className="px-6 pb-6"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Contact CTA */}
            <motion.div 
              className="mt-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
            >
              <div className="bg-gradient-to-br from-indigo-900/50 to-purple-900/50 backdrop-blur-sm p-8 rounded-3xl border border-indigo-700/50">
                <h3 className="text-2xl font-bold mb-4">Não encontrou sua resposta?</h3>
                <p className="text-gray-300 mb-6">
                  Entre em contato conosco e teremos prazer em esclarecer suas dúvidas.
                </p>
                <a 
                  href="/contact"
                  className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40"
                >
                  Fale Conosco
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
