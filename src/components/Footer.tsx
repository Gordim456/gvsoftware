import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="bg-gv-darker border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="hero" smooth={true} duration={500} className="cursor-pointer">
              <h2 className="text-2xl font-bold text-white mb-4">
                <span className="gradient-text">GV</span> Software
              </h2>
            </Link>
            <p className="text-gv-gray mb-6">
              Transformando ideias em soluções digitais inovadoras para o seu negócio.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="hero" smooth={true} duration={500} className="text-gv-gray hover:text-white cursor-pointer">Home</Link>
              </li>
              <li>
                <Link to="about" smooth={true} duration={500} className="text-gv-gray hover:text-white cursor-pointer">Sobre</Link>
              </li>
              <li>
                <Link to="services" smooth={true} duration={500} className="text-gv-gray hover:text-white cursor-pointer">Serviços</Link>
              </li>
              <li>
                <Link to="portfolio" smooth={true} duration={500} className="text-gv-gray hover:text-white cursor-pointer">Portfólio</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gv-gray hover:text-white">Desenvolvimento Web</a>
              </li>
              <li>
                <a href="#" className="text-gv-gray hover:text-white">Aplicações Web</a>
              </li>
              <li>
                <a href="#" className="text-gv-gray hover:text-white">UI/UX Design</a>
              </li>
              <li>
                <a href="#" className="text-gv-gray hover:text-white">Consultoria em TI</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-2">
              <li className="text-gv-gray">
                Recife, PE, Brasil
              </li>
              <li>
                <a href="mailto:contato@gvsoftware.tech" className="text-gv-gray hover:text-white">contato@gvsoftware.tech</a>
              </li>
              <li>
                <a href="tel:+5581999999999" className="text-gv-gray hover:text-white">(81) 99999-9999</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col items-center">
          <div className="text-center">
            <p className="text-2xl font-bold">
              <span className="gradient-text">© {new Date().getFullYear()} GV Software</span>
            </p>
            <p className="text-gv-gray mt-2 text-lg">
              Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
