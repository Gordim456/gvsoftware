
import React, { Suspense, lazy, memo } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Hero = lazy(() => import('../components/Hero'));
const Services = lazy(() => import('../components/Services'));
const AboutSection = lazy(() => import('../components/AboutSection'));
const Testimonials = lazy(() => import('../components/Testimonials'));

const MemoizedFooter = memo(Footer);
const MemoizedNavbar = memo(Navbar);

const LoadingSpinner = () => (
  <div className="w-full py-8 flex justify-center">
    <div className="w-6 h-6 border-2 border-indigo-400 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const OptimizedBackground = memo(() => (
  <div className="fixed inset-0 z-0">
    <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950" />
  </div>
));

const Home = () => {
  const [isReady, setIsReady] = React.useState(false);

  React.useEffect(() => {
    document.title = 'Início | GV Software - Soluções Digitais Modernas';
    const timer = setTimeout(() => setIsReady(true), 50);
    return () => clearTimeout(timer);
  }, []);

  if (!isReady) {
    return <LoadingSpinner />;
  }

  return (
    <div className="min-h-screen">
      <OptimizedBackground />
      
      <div className="relative z-10">
        <MemoizedNavbar />
        
        <div className="relative">
          <Suspense fallback={<LoadingSpinner />}>
            <Hero />
          </Suspense>
          
          <Suspense fallback={<LoadingSpinner />}>
            <AboutSection />
          </Suspense>
          
          <Suspense fallback={<LoadingSpinner />}>
            <Services />
          </Suspense>
          
          <Suspense fallback={<LoadingSpinner />}>
            <Testimonials />
          </Suspense>
        </div>
        
        <MemoizedFooter />
      </div>
    </div>
  );
};

export default Home;
