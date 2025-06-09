
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { CleanThemeProvider } from './components/theme/CleanThemeProvider';
import { Toaster } from './components/ui/toaster';
import Home from './pages/Home';
import CleanAbout from './pages/CleanAbout';
import ServicesPage from './pages/Services';
import FAQ from './pages/FAQ';
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

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    console.error('🔥 APP ERROR BOUNDARY: Caught error:', error);
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('🔥 APP ERROR BOUNDARY: Error details:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-4">
          <div className="text-center max-w-md w-full">
            <h1 className="text-xl md:text-2xl font-bold text-red-400 mb-4">Algo deu errado</h1>
            <p className="text-gray-300 mb-4 text-sm md:text-base">
              {this.state.error?.message || 'Ocorreu um erro inesperado'}
            </p>
            <button 
              onClick={() => window.location.reload()} 
              className="w-full md:w-auto px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 text-sm md:text-base"
            >
              Recarregar Página
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

const App: React.FC = () => {
  console.log('🚀 APP: Rendering ultra clean responsive app');

  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <CleanThemeProvider defaultTheme="dark" storageKey="gv-software-theme">
          <div className="min-h-screen bg-slate-950 text-white w-full overflow-x-hidden antialiased">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<CleanAbout />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/faq" element={<FAQ />} />
            </Routes>
            <Toaster />
          </div>
        </CleanThemeProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
};

console.log('✅ APP: Ultra clean responsive app defined');
export default App;
