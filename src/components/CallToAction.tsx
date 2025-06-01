
import { ArrowRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-indigo-900/50 to-purple-900/50 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 bg-indigo-500/20 px-4 py-2 rounded-full mb-6">
          <Star className="w-4 h-4 text-yellow-400" />
          <span className="text-indigo-300 font-medium">Projetos de Qualidade</span>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Pronto para transformar sua <span className="gradient-text">ideia em realidade?</span>
        </h2>
        
        <p className="text-xl text-gv-gray mb-8 max-w-2xl mx-auto">
          Entre em contato conosco hoje mesmo e descubra como podemos ajudar a impulsionar seu negócio com tecnologia de ponta.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact">
            <Button className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-xl font-medium text-lg flex items-center gap-3">
              Solicitar Orçamento
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
          
          <Link to="/portfolio">
            <Button variant="outline" className="px-8 py-4 border-2 border-indigo-500 text-indigo-300 hover:bg-indigo-500/10 rounded-xl font-medium text-lg">
              Ver Nosso Portfólio
            </Button>
          </Link>
        </div>
        
        <div className="flex justify-center items-center gap-8 mt-8 text-sm text-gv-gray">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>Resposta em 24h</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span>Orçamento Gratuito</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            <span>Suporte Completo</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
