
import { useEffect, useState, lazy, Suspense, useMemo } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CallToAction from '@/components/CallToAction';
import QuickFAQ from '@/components/QuickFAQ';
import { memo } from 'react';

// Lazy loading otimizado com preloading
const Hero = lazy(() => import('../components/Hero'));
const Services = lazy(() => import('../components/Services'));
const Testimonials = lazy(() => import('../components/Testimonials'));

// Componentes memoizados para melhor performance
const MemoizedFooter = memo(Footer);
const MemoizedNavbar = memo(Navbar);
const MemoizedCallToAction = memo(CallToAction);
const MemoizedQuickFAQ = memo(QuickFAQ);

// Loading ultra-rápido
const FastLoading = () => (
  <div className="w-full py-4 flex justify-center">
    <div className="w-3 h-3 border-2 border-indigo-400 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

// Background moderno com efeitos aprimorados
const ModernBackground = memo(() => (
  <div className="fixed inset-0 z-0">
    {/* Background gradient multi-camadas */}
    <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950" />
    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-indigo-900/20 to-purple-900/30" />
    
    {/* Orbs animados com gradiente */}
    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-indigo-600/30 to-purple-600/30 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
    
    {/* Pattern overlay sutil */}
    <div 
      className="absolute inset-0 opacity-10"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236366f1' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        transform: 'translateZ(0)',
        willChange: 'transform'
      }}
    />
  </div>
));

const Home = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Setup imediato para carregamento mais rápido
    document.title = 'Início | GV Software - Soluções Digitais Modernas';
    
    // Preload de recursos críticos
    const preloadFont = () => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap';
      link.as = 'style';
      document.head.appendChild(link);
    };

    // Carregamento otimizado de recursos
    const preloadComponents = () => {
      // Preload dos componentes que serão visíveis em breve
      import('../components/Hero');
      import('../components/Services');
    };

    preloadFont();
    preloadComponents();
    
    // Estado pronto rápido
    setIsReady(true);
  }, []);

  // Meta tags memoizadas para SEO
  const metaTags = useMemo(() => {
    const meta = document.createElement('meta');
    meta.name = 'description';
    meta.content = 'GV Software - Desenvolvimento de soluções digitais modernas, websites responsivos e aplicações web de alta performance.';
    if (!document.querySelector('meta[name="description"]')) {
      document.head.appendChild(meta);
    }
  }, []);

  if (!isReady) {
    return <FastLoading />;
  }

  return (
    <div className="min-h-screen" style={{ transform: 'translateZ(0)' }}>
      <ModernBackground />
      
      <div className="relative z-10">
        <MemoizedNavbar />
        
        <div className="relative">
          <Suspense fallback={<FastLoading />}>
            <Hero />
          </Suspense>
          
          <Suspense fallback={<FastLoading />}>
            <Services />
          </Suspense>
          
          <Suspense fallback={<FastLoading />}>
            <Testimonials />
          </Suspense>
          
          <MemoizedCallToAction />
          <MemoizedQuickFAQ />
        </div>
        
        <MemoizedFooter />
      </div>
    </div>
  );
};

export default Home;
