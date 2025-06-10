
import * as React from 'react';
import { Code, Smartphone, PenTool, Settings } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: "Sistema de Gestão Bebidas ON",
    description: "Sistema completo para controle de estoque e vendas",
    image: "/lovable-uploads/61ef491d-1126-436c-be67-fd525f729623.png"
  },
  {
    icon: Smartphone,
    title: "Aplicativos Mobile",
    description: "Desenvolvimento de apps iOS e Android",
    image: "/lovable-uploads/9805566a-c46b-4db7-8637-f74f6a89da91.png"
  },
  {
    icon: PenTool,
    title: "Design UI/UX",
    description: "Design de interfaces intuitivas e modernas",
    image: "/lovable-uploads/9805566a-c46b-4db7-8637-f74f6a89da91.png"
  },
  {
    icon: Settings,
    title: "Consultoria Técnica",
    description: "Assessoria especializada em tecnologia",
    image: "/lovable-uploads/9805566a-c46b-4db7-8637-f74f6a89da91.png"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-12 bg-gv-darker relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nossos <span className="gradient-text">Serviços</span>
          </h2>
          <p className="text-gv-gray max-w-2xl mx-auto text-lg">
            Oferecemos soluções completas para impulsionar o seu negócio.
          </p>
        </div>
      
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group rounded-xl overflow-hidden transition-transform duration-200 hover:scale-[1.02] will-change-transform"
            >
              <div className="relative h-[220px] overflow-hidden rounded-xl">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/80 to-purple-900/80"></div>
                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-gray-200">{service.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
