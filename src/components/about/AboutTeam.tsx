
import { motion } from 'framer-motion';

const AboutTeam = () => {
  const teamSections = [
    {
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      title: "Desenvolvimento",
      subtitle: "Equipe Técnica"
    },
    {
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      title: "Design",
      subtitle: "Equipe Criativa"
    },
    {
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      title: "Inovação",
      subtitle: "Equipe de P&D"
    }
  ];

  return (
    <div className="relative z-10 mt-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {teamSections.map((section, index) => (
          <motion.div 
            key={index}
            className="relative rounded-xl overflow-hidden"
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <img 
              src={section.image}
              alt={section.title}
              className="w-full h-[300px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-bold">{section.title}</h3>
              <p className="text-sm text-gray-300">{section.subtitle}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AboutTeam;
