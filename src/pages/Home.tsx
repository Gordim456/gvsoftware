
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import useEmblaCarousel from 'embla-carousel-react';
import { ArrowRight, Star } from 'lucide-react';

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    document.title = 'Início | GV Software - Desenvolvimento de Software';
    // Add a small delay to trigger loading animation
    const timer = setTimeout(() => setIsLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 20 });
  
  // Auto-slide functionality
  useEffect(() => {
    if (emblaApi) {
      const interval = setInterval(() => {
        emblaApi.scrollNext();
      }, 5000); // Change slides every 5 seconds
      
      return () => clearInterval(interval);
    }
  }, [emblaApi]);

  const slides = [
    {
      image: '/project-1.jpg',
      title: 'Desenvolvimento Web',
      description: 'Soluções modernas e responsivas para sua presença online'
    },
    {
      image: '/project-2.jpg',
      title: 'Aplicações Mobile',
      description: 'Apps nativos para iOS e Android com experiências incríveis'
    },
    {
      image: '/project-3.jpg',
      title: 'Design UI/UX',
      description: 'Interfaces intuitivas e experiências memoráveis'
    },
    {
      image: '/project-6.jpg',
      title: 'Soluções Empresariais',
      description: 'Software personalizado para transformar seu negócio'
    }
  ];

  // Testimonials
  const testimonials = [
    {
      name: "Ana Silva",
      position: "CEO, TechStart",
      content: "A GV Software transformou completamente nosso processo digital. O atendimento foi excepcional do início ao fim.",
      rating: 5
    },
    {
      name: "Carlos Mendes",
      position: "Diretor de Marketing, Innova",
      content: "Nosso e-commerce teve um aumento de 150% nas conversões após o redesign realizado pela equipe da GV Software.",
      rating: 5
    },
    {
      name: "Patricia Gomes",
      position: "Fundadora, CreativeLab",
      content: "A solução personalizada que desenvolveram para gerenciamento de projetos criativos superou todas as nossas expectativas.",
      rating: 5
    }
  ];

  return (
    <motion.div 
      className="min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: isLoaded ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="fixed inset-0 z-0">
        <div className="w-full h-screen">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex h-screen">
              {slides.map((slide, index) => (
                <div key={index} className="flex-[0_0_100%] h-screen min-w-0">
                  <div className="relative w-full h-full">
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-black/90 to-indigo-900/70 z-10"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1 }}
                    />
                    <motion.img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                      initial={{ scale: 1 }}
                      animate={{ scale: 1.1 }}
                      transition={{ 
                        duration: 20, 
                        repeat: Infinity, 
                        repeatType: "reverse" 
                      }}
                    />
                    <motion.div 
                      className="absolute bottom-[35%] md:bottom-[40%] left-8 md:left-24 z-20 max-w-lg"
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 1, delay: 0.3 }}
                    >
                      <span className="bg-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                        {index + 1}/{slides.length}
                      </span>
                      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 text-white">{slide.title}</h2>
                      <p className="text-lg md:text-xl text-gray-200 mt-4">
                        {slide.description}
                      </p>
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10">
        <Navbar />
        <Hero />
        
        {/* Animated divider */}
        <div className="relative h-24 overflow-hidden">
          <div className="absolute w-full">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="fill-gv-dark">
              <path d="M0,160L48,138.7C96,117,192,75,288,74.7C384,75,480,117,576,160C672,203,768,245,864,234.7C960,224,1056,160,1152,128C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
          </div>
        </div>
        
        <Services />
        
        <div className="bg-gv-dark py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">O que nossos <span className="gradient-text">clientes</span> dizem</h2>
              <p className="text-gv-gray max-w-2xl mx-auto">
                Veja o feedback de quem já transformou sua visão em realidade digital conosco.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div 
                  key={index}
                  className="bg-gv-darker p-8 rounded-lg border border-gray-800 hover:border-indigo-500/50 transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(79, 70, 229, 0.1)" }}
                >
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-white italic mb-6">{testimonial.content}</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-indigo-600 mr-4 flex items-center justify-center text-white font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-gv-gray text-sm">{testimonial.position}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              className="flex justify-center mt-16"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <a 
                href="/contact" 
                className="group bg-gv-darker border border-gray-700 hover:border-indigo-500 px-6 py-3 rounded-full flex items-center transition-all duration-300 hover:bg-indigo-500/10"
              >
                <span className="mr-2">Veja mais depoimentos</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>
        </div>
        
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </motion.div>
  );
};

export default Home;
