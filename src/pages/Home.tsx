
import { useEffect, useState, lazy, Suspense, useMemo } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SocialIcons from '@/components/SocialIcons';
import CallToAction from '@/components/CallToAction';
import QuickFAQ from '@/components/QuickFAQ';
import { memo } from 'react';

// Optimized lazy loading with preloading
const Hero = lazy(() => import('../components/Hero'));
const Services = lazy(() => import('../components/Services'));
const Testimonials = lazy(() => import('../components/Testimonials'));

// Memoized components for better performance
const MemoizedFooter = memo(Footer);
const MemoizedNavbar = memo(Navbar);
const MemoizedSocialIcons = memo(SocialIcons);
const MemoizedCallToAction = memo(CallToAction);
const MemoizedQuickFAQ = memo(QuickFAQ);

// Ultra-fast loading component
const FastLoading = () => (
  <div className="w-full py-6 flex justify-center">
    <div className="w-4 h-4 border-2 border-indigo-400 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

// Optimized background with GPU acceleration
const ModernBackground = memo(() => (
  <div className="fixed inset-0 z-0">
    <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950" />
    <div 
      className="absolute inset-0 opacity-20"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%236366f1' fill-opacity='0.08'%3E%3Ccircle cx='20' cy='20' r='1.5'/%3E%3C/g%3E%3C/svg%3E")`,
        transform: 'translateZ(0)', // GPU acceleration
        willChange: 'transform'
      }}
    />
  </div>
));

const Home = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Immediate setup for faster perceived loading
    document.title = 'Início | GV Software - Soluções Digitais Modernas';
    
    // Preload critical resources
    const preloadFont = () => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap';
      link.as = 'style';
      document.head.appendChild(link);
    };

    // Optimized resource loading
    const preloadComponents = () => {
      // Preload components that will be visible soon
      import('../components/Hero');
      import('../components/Services');
    };

    preloadFont();
    preloadComponents();
    
    // Fast ready state
    setIsReady(true);
  }, []);

  // Memoized meta tags for SEO
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
        <MemoizedSocialIcons />
        <MemoizedNavbar />
        
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
        <MemoizedFooter />
      </div>
    </div>
  );
};

export default Home;
