
import React from 'react';
import { motion } from 'framer-motion';
import { Star, ChartLine, TrendingUp } from 'lucide-react';

const TestimonialCard = ({ name, role, company, content, rating }: { 
  name: string, 
  role: string, 
  company: string, 
  content: string,
  rating: number 
}) => {
  return (
    <motion.div 
      className="bg-gv-dark p-8 rounded-xl border border-gray-800 hover:border-indigo-500/30 transition-all duration-300"
      whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(79, 70, 229, 0.2)" }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
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
    </motion.div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ana Silva",
      role: "Gerente de Marketing",
      company: "TechSmart",
      content: "A GV Software transformou completamente nossa presença online. O novo site aumentou nossas conversões em 40% e a experiência do usuário é simplesmente incrível!",
      rating: 5
    },
    {
      name: "Ricardo Mendes",
      role: "CEO",
      company: "Innova Solutions",
      content: "Trabalhamos com a GV no desenvolvimento do nosso aplicativo. A equipe foi extremamente profissional, cumprindo todos os prazos e superando nossas expectativas.",
      rating: 5
    },
    {
      name: "Carla Ferreira",
      role: "Diretora de Produtos",
      company: "Nexus Group",
      content: "O sistema de gestão desenvolvido pela GV Software revolucionou nossos processos internos, economizando tempo e recursos. Recomendo fortemente!",
      rating: 4
    }
  ];

  return (
    <section className="py-20 bg-gv-darker relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob animation-delay-2000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            className="w-16 h-16 mx-auto bg-indigo-500 bg-opacity-20 rounded-full flex items-center justify-center mb-6"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            <ChartLine className="w-8 h-8 text-indigo-400" />
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">O Que Nossos <span className="gradient-text">Clientes Dizem</span></h2>
          <p className="text-gv-gray max-w-2xl mx-auto">
            Veja como nossos serviços têm transformado negócios e criado experiências digitais excepcionais.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              role={testimonial.role}
              company={testimonial.company}
              content={testimonial.content}
              rating={testimonial.rating}
            />
          ))}
        </div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 text-indigo-400 bg-indigo-500/10 px-6 py-3 rounded-full">
            <TrendingUp className="h-5 w-5" />
            <span className="font-semibold">98% dos nossos clientes recomendam nossos serviços</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
