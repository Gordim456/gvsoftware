
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './pages/About';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Services />
          </>
        } />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
