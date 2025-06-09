
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

console.log('🚀 APP: Starting ultra clean app - COMPLETELY RADIX-FREE');

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

// Define proper types for ErrorBoundary
interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

// Simple error boundary component
class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    console.error('🔥 APP ERROR BOUNDARY: Caught error:', error);
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('🔥 APP ERROR BOUNDARY: Error details:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-red-400 mb-4">Something went wrong</h1>
            <button 
              onClick={() => window.location.reload()} 
              className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

const App: React.FC = () => {
  console.log('🚀 APP: Rendering ultra clean app - NO RADIX UI ANYWHERE');

  return (
    <ErrorBoundary>
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
              <Route path="/services" element={
                <>
                  <Navbar />
                  <div className="pt-20">
                    <div className="container mx-auto px-4 py-16">
                      <h1 className="text-4xl font-bold text-center mb-8">Nossos Serviços</h1>
                      <p className="text-gray-300 text-center max-w-2xl mx-auto">
                        Oferecemos soluções completas em tecnologia para transformar suas ideias em realidade digital.
                      </p>
                    </div>
                  </div>
                </>
              } />
            </Routes>
            <Toaster />
          </div>
        </CleanThemeProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
};

console.log('✅ APP: Ultra clean app defined - ZERO RADIX UI DEPENDENCIES');
export default App;
