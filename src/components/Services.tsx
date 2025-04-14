
import { Code, Layout, Database, PenTool, Settings, BarChart } from 'lucide-react';

const ServicesCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => {
  return (
    <div className="bg-gv-darker p-6 rounded-lg border border-gray-800 hover:border-gv-primary transition-all duration-300 group">
      <div className="mb-4 bg-opacity-10 bg-indigo-500 p-3 rounded-md w-fit group-hover:bg-gv-primary group-hover:bg-opacity-100 transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gv-gray">{description}</p>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      icon: <Code className="w-6 h-6 text-gv-primary group-hover:text-white transition-colors duration-300" />,
      title: "Desenvolvimento Web",
      description: "Desenvolvemos websites modernos, responsivos e otimizados para motores de busca."
    },
    {
      icon: <Layout className="w-6 h-6 text-gv-primary group-hover:text-white transition-colors duration-300" />,
      title: "Aplicações Web",
      description: "Criamos aplicações web robustas, escaláveis e seguras para o seu negócio."
    },
    {
      icon: <Database className="w-6 h-6 text-gv-primary group-hover:text-white transition-colors duration-300" />,
      title: "Banco de Dados",
      description: "Estruturamos e otimizamos bancos de dados para suportar suas aplicações."
    },
    {
      icon: <PenTool className="w-6 h-6 text-gv-primary group-hover:text-white transition-colors duration-300" />,
      title: "UI/UX Design",
      description: "Projetamos interfaces intuitivas e experiências de usuário que encantam."
    },
    {
      icon: <Settings className="w-6 h-6 text-gv-primary group-hover:text-white transition-colors duration-300" />,
      title: "Manutenção e Suporte",
      description: "Oferecemos suporte técnico e manutenção contínua para suas aplicações."
    },
    {
      icon: <BarChart className="w-6 h-6 text-gv-primary group-hover:text-white transition-colors duration-300" />,
      title: "Consultoria em TI",
      description: "Ajudamos sua empresa a tomar as melhores decisões tecnológicas."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gv-darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossos <span className="gradient-text">Serviços</span></h2>
          <p className="text-gv-gray max-w-2xl mx-auto">
            Oferecemos uma ampla gama de serviços de desenvolvimento de software para atender às suas necessidades.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServicesCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
