
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import { ContactForm } from '../components/contact/ContactForm';
import Footer from '../components/Footer';
import SocialIcons from '../components/SocialIcons';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <AboutSection />
      <Services />
      <Portfolio />
      <section id="contact" className="py-16 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Entre em <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">Contato</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Vamos conversar sobre o seu projeto e como podemos ajudar a transformar suas ideias em realidade.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
      <SocialIcons />
      <Footer />
    </div>
  );
};

export default Home;
