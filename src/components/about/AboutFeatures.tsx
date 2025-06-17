
import { CheckCircle } from 'lucide-react';

const AboutFeatures = () => {
  const featureItems = [
    {
      title: "Equipe especializada",
      description: "Desenvolvedores experientes e especializados em tecnologias modernas"
    },
    {
      title: "Metodologias ágeis",
      description: "Desenvolvimento eficiente com resultados consistentes e de qualidade"
    },
    {
      title: "Foco na qualidade",
      description: "Código limpo e testado seguindo as melhores práticas de desenvolvimento"
    },
    {
      title: "Comunicação transparente",
      description: "Acompanhamento contínuo e suporte dedicado durante todo o projeto"
    }
  ];

  return (
    <div className="space-y-4 mt-2">
      {featureItems.map((item, index) => (
        <div 
          key={index}
          className="flex items-start gap-4 p-3 rounded-lg hover:bg-white/5 transition-all duration-300 hover:translate-x-1"
        >
          <div className="bg-gradient-to-br from-indigo-500 to-indigo-700 p-2 rounded-full">
            <CheckCircle className="w-5 h-5 text-white" />
          </div>
          <div>
            <h4 className="font-semibold text-lg">{item.title}</h4>
            <p className="text-gv-gray">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutFeatures;
