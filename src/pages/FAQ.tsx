
import React, { useState, useEffect, useMemo } from 'react';
import { HelpCircle, Plus, Minus, Search } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Input } from '@/components/ui/input';
import SocialIcons from '@/components/SocialIcons';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const FAQ: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isVisible, setIsVisible] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  useEffect(() => {
    document.title = 'FAQ | GV Software';
    setIsVisible(true);
  }, []);

  const faqItems: FAQItem[] = useMemo(() => [
    {
      question: "Quanto tempo leva para desenvolver um site?",
      answer: "O prazo varia de acordo com a complexidade do projeto. Websites simples podem levar de 2 a 4 semanas, enquanto projetos mais complexos podem levar de 2 a 6 meses. Durante nossa consulta inicial, podemos fornecer uma estimativa mais precisa com base nas suas necessidades específicas.",
      category: "desenvolvimento"
    },
    {
      question: "Como funciona o processo de desenvolvimento?",
      answer: "Nosso processo inclui análise de requisitos, planejamento, design, desenvolvimento, testes e lançamento. Mantemos comunicação constante com o cliente durante todas as etapas para garantir que o produto final atenda exatamente às suas expectativas.",
      category: "desenvolvimento"
    },
    {
      question: "Qual é o investimento para um projeto?",
      answer: "O custo varia de acordo com as necessidades específicas do projeto. Trabalhamos com orçamentos personalizados após entender completamente os requisitos do cliente. Oferecemos opções flexíveis para atender a diferentes faixas de orçamento sem comprometer a qualidade.",
      category: "comercial"
    },
    {
      question: "Oferecem suporte após o lançamento?",
      answer: "Sim, oferecemos pacotes de manutenção e suporte contínuo para garantir que sua solução digital permaneça atualizada e funcionando perfeitamente. Nossos planos de suporte incluem atualizações de segurança, correções de bugs e pequenas melhorias.",
      category: "suporte"
    },
    {
      question: "O que é design responsivo?",
      answer: "Design responsivo é uma abordagem que faz com que seu site ou aplicativo se adapte automaticamente a diferentes tamanhos de tela e dispositivos. Isso garante que seus usuários tenham uma experiência ótima, independentemente de estarem usando um celular, tablet ou desktop.",
      category: "design"
    },
    {
      question: "Vocês desenvolvem aplicativos para iOS e Android?",
      answer: "Sim, desenvolvemos aplicativos nativos para iOS e Android, bem como soluções híbridas que funcionam em ambas as plataformas. A escolha da abordagem dependerá das suas necessidades específicas, orçamento e prazos.",
      category: "desenvolvimento"
    },
    {
      question: "Como é feito o pagamento dos projetos?",
      answer: "Normalmente dividimos os pagamentos em parcelas associadas a marcos do projeto. Isso inclui um pagamento inicial, pagamentos intermediários quando fases-chave são concluídas, e um pagamento final na entrega. Aceitamos diversas formas de pagamento e podemos adaptar o plano às suas necessidades.",
      category: "comercial"
    },
    {
      question: "Posso solicitar alterações após o início do projeto?",
      answer: "Sim, entendemos que projetos podem evoluir. Pequenas alterações geralmente são acomodadas sem custo adicional. Mudanças significativas no escopo podem exigir ajustes no orçamento e cronograma, que serão discutidos antes de qualquer implementação.",
      category: "desenvolvimento"
    }
  ], []);

  const categories = useMemo(() => ['all', 'desenvolvimento', 'design', 'comercial', 'suporte'], []);

  const filteredFAQs = useMemo(() => {
    return faqItems.filter(item => {
      const matchesSearch = item.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            item.answer.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [faqItems, searchTerm, selectedCategory]);

  const toggleFAQ = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className={`min-h-screen bg-gv-darker transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <Navbar />
      <SocialIcons />

      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
        <div className="absolute bottom-40 right-10 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <div className="w-16 h-16 mx-auto bg-indigo-500 bg-opacity-20 rounded-full flex items-center justify-center mb-6 animate-bounce-soft">
              <HelpCircle className="w-8 h-8 text-indigo-400" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Perguntas <span className="gradient-text">Frequentes</span></h2>
            <p className="text-gv-gray max-w-2xl mx-auto text-lg">
              Encontre respostas para as perguntas mais comuns sobre nossos serviços e processos.
            </p>
          </div>

          <div className="mb-12 flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Pesquisar perguntas..."
                className="pl-10 bg-gv-dark border-gray-700"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm capitalize ${
                    selectedCategory === category
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gv-dark text-gv-gray hover:bg-indigo-600/20'
                  } transition-colors`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4 animate-fade-in">
            {filteredFAQs.length > 0 ? (
              filteredFAQs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-gv-dark border border-gray-800 rounded-xl overflow-hidden"
                >
                  <button
                    className="w-full px-6 py-4 text-left flex justify-between items-center"
                    onClick={() => toggleFAQ(index)}
                  >
                    <h3 className="font-medium text-lg pr-4">{faq.question}</h3>
                    <div className="bg-indigo-500/20 p-2 rounded-full">
                      {expandedIndex === index ? (
                        <Minus className="w-5 h-5 text-indigo-400" />
                      ) : (
                        <Plus className="w-5 h-5 text-indigo-400" />
                      )}
                    </div>
                  </button>
                  <div 
                    className={`px-6 transition-all ease-in-out ${
                      expandedIndex === index ? 'py-4 border-t border-gray-800 max-h-[500px]' : 'max-h-0 overflow-hidden'
                    }`}
                    style={{ transitionProperty: 'max-height, padding', transitionDuration: '300ms' }}
                  >
                    <p className="text-gv-gray">{faq.answer}</p>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-12 bg-gv-dark border border-gray-800 rounded-xl">
                <p className="text-gv-gray text-lg">
                  Nenhuma pergunta encontrada para sua pesquisa. Tente outros termos ou entre em contato conosco.
                </p>
              </div>
            )}
          </div>

          <div className="mt-16 text-center animate-fade-in">
            <p className="text-gv-gray mb-4">Ainda tem dúvidas?</p>
            <a 
              href="/contact" 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg transition-all duration-300"
            >
              Entre em contato conosco
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
