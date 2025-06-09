
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from './components/theme/ThemeProvider';
import { Toaster } from './components/ui/toaster';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './pages/About';
import './utils/analytics';

console.log('🚀 APP: Starting App component...');

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

const App: React.FC = () => {
  console.log('🚀 APP: Rendering App component...');

  try {
    return (
      <QueryClientProvider client={queryClient}>
        <ThemeProvider defaultTheme="dark" storageKey="gv-software-theme">
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
            <Toaster />
          </div>
        </ThemeProvider>
      </QueryClientProvider>
    );
  } catch (error) {
    console.error('❌ APP: Error rendering App:', error);
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-400 mb-4">Erro na aplicação</h1>
          <p className="text-gray-300">Por favor, recarregue a página.</p>
        </div>
      </div>
    );
  }
};

console.log('✅ APP: App component defined successfully');
export default App;
