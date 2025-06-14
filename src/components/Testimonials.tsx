
import * as React from 'react';
import { Star, ChartLine, TrendingUp } from 'lucide-react';

const TestimonialCard = ({ name, role, company, content, rating }: { 
  name: string, 
  role: string, 
  company: string, 
  content: string,
  rating: number 
}) => {
  return (
    <div className="bg-gv-dark p-8 rounded-xl border border-gray-800 hover:border-indigo-500/30 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/20 animate-fade-in">
      <div className="flex mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
        ))}
      </div>
      <p className="text-gv-gray mb-6 italic">&ldquo;{content}&rdquo;</p>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
          {name.charAt(0)}
        </div>
        <div>
          <h4 className="font-semibold">{name}</h4>
          <p className="text-sm text-gv-gray">{role}, {company}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const testimonial = {
    name: "Renan",
    role: "Fundador",
    company: "Bebidas ON",
    content: "A GV Software desenvolveu nosso aplicativo Bebidas ON com excelência. A solução criada revolucionou nosso negócio de delivery de bebidas, proporcionando uma experiência incrível para nossos clientes e otimizando nossos processos internos. Recomendo totalmente!",
    rating: 5
  };

  return (
    <section className="py-20 bg-gv-darker relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse" style={{animationDelay: '2s'}}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="w-16 h-16 mx-auto bg-indigo-500 bg-opacity-20 rounded-full flex items-center justify-center mb-6 animate-pulse">
            <ChartLine className="w-8 h-8 text-indigo-400" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">O Que Nossos <span className="gradient-text">Clientes Dizem</span></h2>
          <p className="text-gv-gray max-w-2xl mx-auto animate-fade-in">
            Veja como nossos serviços têm transformado negócios e criado experiências digitais excepcionais.
          </p>
        </div>
        
        <div className="flex justify-center">
          <div className="max-w-md">
            <TestimonialCard
              name={testimonial.name}
              role={testimonial.role}
              company={testimonial.company}
              content={testimonial.content}
              rating={testimonial.rating}
            />
          </div>
        </div>
        
        <div className="mt-16 text-center animate-fade-in" style={{animationDelay: '0.5s'}}>
          <div className="inline-flex items-center gap-2 text-indigo-400 bg-indigo-500/10 px-6 py-3 rounded-full">
            <TrendingUp className="h-5 w-5" />
            <span className="font-semibold">Aplicativo Bebidas ON - Transformando o delivery de bebidas</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
