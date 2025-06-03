
import { Code, Smartphone, PenTool, Settings } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: "Desenvolvimento Web",
    description: "Criamos soluções web modernas e responsivas",
    image: "/lovable-uploads/61ef491d-1126-436c-be67-fd525f729623.png"
  },
  {
    icon: Smartphone,
    title: "Aplicativos Mobile",
    description: "Desenvolvimento de apps iOS e Android",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
  },
  {
    icon: PenTool,
    title: "Design UI/UX",
    description: "Design de interfaces intuitivas e modernas",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
  },
  {
    icon: Settings,
    title: "Consultoria Técnica",
    description: "Assessoria especializada em tecnologia",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-16 bg-gv-darker relative">
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-indigo-600/10 rounded-full blur-2xl"></div>
      <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-600/10 rounded-full blur-2xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nossos <span className="gradient-text">Serviços</span>
          </h2>
          <p className="text-gv-gray max-w-2xl mx-auto text-lg">
            Oferecemos soluções completas para impulsionar o seu negócio.
          </p>
        </div>
      
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group rounded-xl overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              <div className="relative h-[250px] overflow-hidden rounded-xl">
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
