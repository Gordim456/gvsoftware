
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
  <div className="w-full py-8 flex justify-center items-center min-h-[200px]">
    <div className="w-8 h-8 border-2 border-indigo-400 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const Home = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    document.title = 'Início | GV Software - Soluções Digitais Modernas';
    const timer = setTimeout(() => setIsReady(true), 100);
    return () => clearTimeout(timer);
  }, []);

  if (!isReady) {
    return (
      <div className="min-h-screen bg-gv-darker flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-gv-darker overflow-x-hidden">
      <div className="relative w-full">
        <MemoizedNavbar />
        
        <main className="relative w-full">
          <Suspense fallback={<LoadingSpinner />}>
            <div className="w-full">
              <Hero />
            </div>
          </Suspense>
          
          <Suspense fallback={<LoadingSpinner />}>
            <div className="w-full">
              <Services />
            </div>
          </Suspense>
          
          <Suspense fallback={<LoadingSpinner />}>
            <div className="w-full">
              <Testimonials />
            </div>
          </Suspense>
        </main>
        
        <MemoizedFooter />
        <MemoizedSocialIcons />
      </div>
    </div>
  );
};

export default Home;
