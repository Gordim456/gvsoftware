
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gv-darker pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Desenvolvimento de <span className="gradient-text">Software</span> & Consultoria
            </h1>
            <p className="text-lg md:text-xl text-gv-gray max-w-lg">
              Transformamos suas ideias em soluções digitais inovadoras e personalizadas para o seu negócio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="contact" smooth={true} duration={500}>
                <Button className="px-6 py-3 bg-gv-primary hover:bg-indigo-600 text-white rounded-md font-medium text-base flex items-center gap-2">
                  Fale Conosco <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link to="services" smooth={true} duration={500}>
                <Button variant="outline" className="px-6 py-3 border-gv-gray text-white hover:bg-gray-800 rounded-md font-medium text-base">
                  Nossos Serviços
                </Button>
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg opacity-80 blur-2xl absolute -top-10 -left-10 z-0"></div>
              <img 
                src="/hero-image.svg" 
                alt="GV Software Development" 
                className="w-full h-auto object-cover rounded-lg shadow-xl relative z-10" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
