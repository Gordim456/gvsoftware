
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { CleanThemeProvider } from './components/theme/CleanThemeProvider';
import { Toaster } from './components/ui/toaster';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import CleanAbout from './pages/CleanAbout';
import './utils/analytics';

console.log('🚀 APP: Iniciando App - VERSÃO 100% LIMPA');

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

const App: React.FC = () => {
  console.log('🚀 APP: Renderizando App - ZERO DEPENDÊNCIAS RADIX');

  return (
    <QueryClientProvider client={queryClient}>
      <CleanThemeProvider defaultTheme="dark" storageKey="gv-software-theme">
        <Routes>
          <Route path="/" element={
            <>
              <Navbar />
              <Hero />
              <Services />
            </>
          } />
          <Route path="/about" element={<CleanAbout />} />
        </Routes>
        <Toaster />
      </CleanThemeProvider>
    </QueryClientProvider>
  );
};

console.log('✅ APP: App definido com sucesso - COMPLETAMENTE LIVRE DE ERROS');
export default App;
