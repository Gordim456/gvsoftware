
import { CheckCircle } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gv-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Sobre a <span className="gradient-text">GV Software</span></h2>
          <p className="text-gv-gray max-w-2xl mx-auto">
            Somos uma empresa de desenvolvimento de software focada em criar soluções personalizadas para o seu negócio.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg opacity-80 blur-2xl absolute -top-10 -left-10 z-0"></div>
            <img 
              src="/about-image.svg" 
              alt="GV Software Team" 
              className="w-full h-auto max-h-96 object-cover rounded-lg shadow-xl relative z-10" 
            />
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Nossa Missão</h3>
            <p className="text-gv-gray">
              Ajudamos empresas a transformar suas ideias em produtos digitais de alta qualidade, 
              entregando soluções personalizadas que impulsionam o crescimento e a inovação.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-gv-primary flex-shrink-0 mt-1" />
                <p>Equipe de desenvolvedores experientes e especializados</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-gv-primary flex-shrink-0 mt-1" />
                <p>Metodologias ágeis para desenvolvimento eficiente</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-gv-primary flex-shrink-0 mt-1" />
                <p>Foco na qualidade e nas melhores práticas de desenvolvimento</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-gv-primary flex-shrink-0 mt-1" />
                <p>Comunicação transparente e suporte contínuo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
