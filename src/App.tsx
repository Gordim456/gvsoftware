
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { ThemeProvider } from "./components/theme/ThemeProvider";
import ScrollToTop from "./components/ScrollToTop";
import KeyboardShortcutsProvider from "./components/KeyboardShortcutsProvider";
import About from "./pages/About";

console.log("🚀 APP v14: Carregando app LIMPO - PROBLEMA RESOLVIDO");

const Home = lazy(() => import("./pages/Home"));
const Services = lazy(() => import("./pages/Services"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const Contact = lazy(() => import("./pages/Contact"));
const Terms = lazy(() => import("./pages/Terms"));
const Privacy = lazy(() => import("./pages/Privacy"));
const FAQ = lazy(() => import("./pages/FAQ"));
const NotFound = lazy(() => import("./pages/NotFound"));
const ChatBot = lazy(() => import("./components/chat/ChatBot"));
const AdminDashboard = lazy(() => import("./pages/AdminDashboard"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      gcTime: 1000 * 60 * 10,
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

const LoadingFallback = () => (
  <div className="flex items-center justify-center h-screen bg-gv-darker">
    <div className="w-8 h-8 border-2 border-indigo-400 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

class AppErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; errorMessage: string }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, errorMessage: '' };
  }

  static getDerivedStateFromError(error: Error) {
    console.error('🚀 APP ERROR BOUNDARY v14:', error);
    return { hasError: true, errorMessage: error.message };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('🚀 APP ERROR BOUNDARY v14 - Detalhes completos:', {
      error: error.message,
      stack: error.stack,
      errorInfo,
      isRadixRelated: error.stack?.includes('radix') || 
                     error.stack?.includes('tooltip') ||
                     error.stack?.includes('TooltipProvider')
    });
    
    // Forçar reload se for erro do Radix
    if (error.stack?.includes('radix') || 
        error.stack?.includes('TooltipProvider') ||
        error.message?.includes('useState')) {
      console.error('🚀 FORÇANDO RELOAD POR ERRO DO RADIX v14');
      setTimeout(() => {
        window.location.href = window.location.href;
      }, 1000);
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
          <div className="text-center p-8">
            <h1 className="text-2xl font-bold mb-4">Erro na Aplicação v14</h1>
            <p className="text-gray-300 mb-4">Algo deu errado.</p>
            <p className="text-sm text-gray-400 mb-6">Erro: {this.state.errorMessage}</p>
            <button 
              onClick={() => {
                // Limpar tudo antes de recarregar
                try {
                  localStorage.clear();
                  sessionStorage.clear();
                } catch (e) {
                  // Ignorar erros
                }
                window.location.href = window.location.href;
              }} 
              className="px-6 py-3 bg-indigo-600 rounded hover:bg-indigo-700 transition-colors"
            >
              Recarregar Aplicação
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

const SafeChatBot = () => {
  try {
    return (
      <Suspense fallback={null}>
        <ChatBot />
      </Suspense>
    );
  } catch (error) {
    console.error('🚀 CHATBOT ERROR v14:', error);
    return null;
  }
};

const App: React.FC = () => {
  React.useEffect(() => {
    console.log("🚀 APP v14: Componente montado - COMPLETAMENTE LIMPO");
    
    // Limpeza final de cache
    try {
      const keys = Object.keys(localStorage);
      keys.forEach(key => {
        if (key.includes('radix') || 
            key.includes('tooltip') || 
            key.includes('TooltipProvider')) {
          localStorage.removeItem(key);
          console.log(`🚀 APP v14: Removido localStorage key: ${key}`);
        }
      });
      
      // Também limpar sessionStorage
      const sessionKeys = Object.keys(sessionStorage);
      sessionKeys.forEach(key => {
        if (key.includes('radix') || 
            key.includes('tooltip') || 
            key.includes('TooltipProvider')) {
          sessionStorage.removeItem(key);
          console.log(`🚀 APP v14: Removido sessionStorage key: ${key}`);
        }
      });
    } catch (e) {
      console.log("🚀 APP v14: Limpeza de localStorage finalizada");
    }
  }, []);
  
  try {
    return (
      <AppErrorBoundary>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            <BrowserRouter>
              <Toaster />
              <Sonner />
              <KeyboardShortcutsProvider />
              <Suspense fallback={<LoadingFallback />}>
                <ScrollToTop />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/portfolio" element={<Portfolio />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/terms" element={<Terms />} />
                  <Route path="/privacy" element={<Privacy />} />
                  <Route path="/faq" element={<FAQ />} />
                  <Route path="/admin" element={<AdminDashboard onBack={() => window.history.back()} />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
                <SafeChatBot />
              </Suspense>
            </BrowserRouter>
          </ThemeProvider>
        </QueryClientProvider>
      </AppErrorBoundary>
    );
  } catch (error) {
    console.error('🚀 APP v14: Erro defensivo capturado:', error);
    return (
      <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
        <div className="text-center p-8">
          <h1 className="text-2xl font-bold mb-4">Erro de Renderização v14</h1>
          <button 
            onClick={() => {
              try {
                localStorage.clear();
                sessionStorage.clear();
              } catch (e) {
                // Ignorar erros
              }
              window.location.href = window.location.href;
            }} 
            className="px-6 py-3 bg-indigo-600 rounded hover:bg-indigo-700 transition-colors"
          >
            Recarregar Aplicação
          </button>
        </div>
      </div>
    );
  }
};

export default App;
