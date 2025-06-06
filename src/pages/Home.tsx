
import { useEffect, useState, lazy, Suspense } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SocialIcons from '../components/SocialIcons';
import { memo } from 'react';

const Hero = lazy(() => import('../components/Hero'));
const Services = lazy(() => import('../components/Services'));
const Testimonials = lazy(() => import('../components/Testimonials'));

const MemoizedFooter = memo(Footer);
const MemoizedNavbar = memo(Navbar);
const MemoizedSocialIcons = memo(SocialIcons);

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
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    document.title = 'Início | GV Software - Soluções Digitais Modernas';
    const timer = setTimeout(() => setIsReady(true), 50);
    return () => clearTimeout(timer);
  }, []);

  if (!isReady) {
    return <LoadingSpinner />;
  }

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <OptimizedBackground />
      
      <div className="relative z-10 w-full">
        <MemoizedNavbar />
        
        <div className="relative w-full overflow-x-hidden">
          <Suspense fallback={<LoadingSpinner />}>
            <div className="w-full px-4 sm:px-6 lg:px-8">
              <Hero />
            </div>
          </Suspense>
          
          <Suspense fallback={<LoadingSpinner />}>
            <div className="w-full px-4 sm:px-6 lg:px-8">
              <Services />
            </div>
          </Suspense>
          
          <Suspense fallback={<LoadingSpinner />}>
            <div className="w-full px-4 sm:px-6 lg:px-8">
              <Testimonials />
            </div>
          </Suspense>
        </div>
        
        <MemoizedFooter />
        <MemoizedSocialIcons />
      </div>
    </div>
  );
};

export default Home;
