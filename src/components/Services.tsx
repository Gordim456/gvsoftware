import { Code, Smartphone, PenTool, Settings } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: Code,
    title: "Desenvolvimento Web",
    description: "Criamos soluções web modernas e responsivas",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
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
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeInOut"
      }
    }
  };
  
  return (
    <section id="services" className="py-20 bg-gv-darker relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Nossos <span className="gradient-text">Serviços</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-gv-gray max-w-2xl mx-auto text-lg"
          >
            Oferecemos soluções completas para impulsionar o seu negócio.
          </motion.p>
        </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="relative group rounded-xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
          >
            <div className="relative h-[300px] overflow-hidden rounded-xl">
              <motion.img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6 }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/90 to-purple-900/90 opacity-90 group-hover:opacity-75 transition-opacity duration-300"></div>
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-200">{service.description}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      </div>
    </section>
  );
};

export default Services;
