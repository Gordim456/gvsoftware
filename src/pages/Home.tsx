
import { useEffect, useState, lazy, Suspense } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { memo } from 'react';

const Hero = lazy(() => import('../components/Hero'));
const Services = lazy(() => import('../components/Services'));
const Testimonials = lazy(() => import('../components/Testimonials'));

const MemoizedFooter = memo(Footer);
const MemoizedNavbar = memo(Navbar);

const LoadingSpinner = () => (
  <div className="w-full py-8 flex justify-center">
    <div className="w-4 h-4 border-2 border-indigo-400 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const OptimizedBackground = memo(() => (
  <div className="fixed inset-0 z-0">
    <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950" />
    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl"></div>
    <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl"></div>
  </div>
));

const Home = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    document.title = 'Início | GV Software - Soluções Digitais Modernas';
    setIsReady(true);
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
