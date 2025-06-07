
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

console.log("🔥 APP ULTRA FINAL: CARREGANDO APLICAÇÃO 100% LIMPA SEM RADIX");

// Lazy loading dos componentes
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

// Query client com configurações otimizadas
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

// Loading fallback simples
const LoadingFallback = () => (
  <div className="flex items-center justify-center h-screen bg-slate-950">
    <div className="w-8 h-8 border-2 border-indigo-400 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

// Error boundary robusto
class AppErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; errorMessage: string }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, errorMessage: '' };
  }

  static getDerivedStateFromError(error: Error) {
    console.error('🔥 APP ULTRA FINAL: Error boundary ativado:', error);
    return { hasError: true, errorMessage: error.message };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('🔥 APP ULTRA FINAL: Erro capturado no boundary:', {
      error: error.message,
      stack: error.stack,
      errorInfo
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
          <div className="text-center p-8">
            <h1 className="text-2xl font-bold mb-4">Erro na Aplicação</h1>
            <p className="text-gray-300 mb-4">Algo deu errado.</p>
            <p className="text-sm text-gray-400 mb-6">Erro: {this.state.errorMessage}</p>
            <button 
              onClick={() => window.location.reload()} 
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

// ChatBot com proteção extra
const SafeChatBot = () => {
  try {
    return (
      <Suspense fallback={null}>
        <ChatBot />
      </Suspense>
    );
  } catch (error) {
    console.error('🔥 APP ULTRA FINAL: Erro no ChatBot:', error);
    return null;
  }
};

// Componente principal da aplicação - SEM TOOLTIP PROVIDER
const App: React.FC = () => {
  React.useEffect(() => {
    console.log("🔥 APP ULTRA FINAL: Aplicação montada com sucesso - SEM RADIX");
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
    console.error('🔥 APP ULTRA FINAL: Erro defensivo capturado:', error);
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
        <div className="text-center p-8">
          <h1 className="text-2xl font-bold mb-4">Erro de Renderização</h1>
          <button 
            onClick={() => window.location.reload()} 
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
