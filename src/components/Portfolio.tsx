
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';

const ProjectCard = ({ 
  image, 
  title, 
  category, 
  description, 
  link 
}: { 
  image: string, 
  title: string, 
  category: string, 
  description: string, 
  link: string 
}) => {
  return (
    <div className="bg-gv-darker p-6 rounded-lg border border-gray-800 overflow-hidden group">
      <div className="relative mb-6 overflow-hidden rounded-md">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" 
        />
      </div>
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-sm bg-indigo-500 bg-opacity-20 text-gv-primary px-3 py-1 rounded-full">
            {category}
          </span>
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gv-gray">{description}</p>
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center text-gv-primary hover:text-indigo-400 transition-colors"
        >
          Ver projeto <ExternalLink className="ml-1 w-4 h-4" />
        </a>
      </div>
    </div>
  );
};

const Portfolio = () => {
  const projects = [
    {
      image: "/project-1.jpg",
      title: "E-commerce App",
      category: "Web App",
      description: "Plataforma de comércio eletrônico completa com sistema de pagamentos integrado.",
      link: "#"
    },
    {
      image: "/project-2.jpg",
      title: "Sistema de Gestão",
      category: "Software",
      description: "Sistema de gestão empresarial personalizado para pequenas empresas.",
      link: "#"
    },
    {
      image: "/project-3.jpg",
      title: "App Móvel",
      category: "Mobile",
      description: "Aplicativo móvel para gestão de tarefas e produtividade pessoal.",
      link: "#"
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-gv-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nosso <span className="gradient-text">Portfólio</span></h2>
          <p className="text-gv-gray max-w-2xl mx-auto">
            Conheça alguns dos projetos que desenvolvemos para nossos clientes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              image={project.image}
              title={project.title}
              category={project.category}
              description={project.description}
              link={project.link}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/portfolio" className="text-gv-primary hover:text-indigo-400 transition-colors">
            Ver todos os projetos →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
