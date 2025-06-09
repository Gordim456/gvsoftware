
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SocialIcons from '../components/SocialIcons';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';

const Home = () => {
  return (
    <div className="min-h-screen w-full bg-gv-darker">
      <Navbar />
      <main className="w-full">
        <Hero />
        <Services />
        <Testimonials />
      </main>
      <Footer />
      <SocialIcons />
    </div>
  );
};

export default Home;
