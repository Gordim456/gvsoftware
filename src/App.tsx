
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './pages/About';

console.log('📱 APP: Component loading...');

const App: React.FC = () => {
  console.log('📱 APP: Rendering App component');
  
  try {
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
  } catch (error) {
    console.error('❌ APP: Error rendering App:', error);
    return (
      <div className="min-h-screen bg-red-900 text-white p-8">
        <h1>Erro na aplicação</h1>
        <pre>{error instanceof Error ? error.message : 'Erro desconhecido'}</pre>
      </div>
    );
  }
};

console.log('✅ APP: Component defined successfully');
export default App;
