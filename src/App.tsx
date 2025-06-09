
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

console.log('🚀 APP: Starting completely clean app - ZERO RADIX UI DEPENDENCIES');

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

const App: React.FC = () => {
  console.log('🚀 APP: Rendering clean app - NO EXTERNAL UI LIBRARIES');

  return (
    <QueryClientProvider client={queryClient}>
      <CleanThemeProvider defaultTheme="dark" storageKey="gv-software-theme">
        <div className="min-h-screen bg-slate-950 text-white">
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
        </div>
      </CleanThemeProvider>
    </QueryClientProvider>
  );
};

console.log('✅ APP: Clean app defined successfully - COMPLETELY FREE OF RADIX UI');
export default App;
