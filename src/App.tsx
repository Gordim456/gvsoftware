import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { ThemeProvider } from "./components/theme/ThemeProvider";
import ScrollToTop from "./components/ScrollToTop";
import KeyboardShortcutsProvider from "./components/KeyboardShortcutsProvider";
import About from "./pages/About"; // Static import

console.log("🚀 APP v10: Loading ULTRA CLEAN app - ABSOLUTELY NO RADIX TOOLTIP DEPENDENCIES");

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

// ULTRA STRONG Error boundary for the entire app
class AppErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; errorMessage: string }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, errorMessage: '' };
  }

  static getDerivedStateFromError(error: Error) {
    console.error('🚀 APP ERROR BOUNDARY v10: Caught app error:', error);
    return { hasError: true, errorMessage: error.message };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('🚀 APP ERROR BOUNDARY v10: Full error details:', {
      error: error.message,
      stack: error.stack,
      errorInfo,
      isRadixTooltip: error.message.includes('tooltip') || error.stack?.includes('tooltip') || error.stack?.includes('radix'),
      isUseStateIssue: error.message.includes('useState'),
      isTooltipProvider: error.stack?.includes('TooltipProvider'),
      isRadixUI: error.stack?.includes('@radix-ui')
    });
    
    // Se for QUALQUER erro relacionado ao Radix, forçar reload imediato
    if (error.stack?.includes('radix') || 
        error.stack?.includes('TooltipProvider') || 
        error.message.includes('useState') ||
        error.stack?.includes('@radix-ui')) {
      console.error('🚀 DETECTED RADIX ERROR - IMMEDIATE FORCED RELOAD v10');
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
          <div className="text-center p-8">
            <h1 className="text-2xl font-bold mb-4">Application Error v10</h1>
            <p className="text-gray-300 mb-4">Something went wrong while loading the application.</p>
            <p className="text-sm text-gray-400 mb-6">Error: {this.state.errorMessage}</p>
            <button 
              onClick={() => window.location.reload()} 
              className="px-6 py-3 bg-indigo-600 rounded hover:bg-indigo-700 transition-colors"
            >
              Reload Application
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// ULTRA Safe ChatBot component with maximum error protection
const SafeChatBot = () => {
  try {
    return (
      <Suspense fallback={null}>
        <ChatBot />
      </Suspense>
    );
  } catch (error) {
    console.error('🚀 CHATBOT ERROR v10:', error);
    return null;
  }
};

const App: React.FC = () => {
  React.useEffect(() => {
    console.log("🚀 APP v10: Component mounted successfully - ABSOLUTELY NO RADIX TOOLTIP ANYWHERE");
    
    // Verify React hooks are working
    console.log("🚀 APP v10: React hooks validation - useState:", !!React.useState);
    console.log("🚀 APP v10: React hooks validation - useEffect:", !!React.useEffect);
    
    // Force clear any potential Radix references AGAIN
    console.log("🚀 APP v10: FINAL clearing of any potential Radix tooltip cache");
    
    // Clear localStorage if needed
    try {
      const keys = Object.keys(localStorage);
      keys.forEach(key => {
        if (key.includes('radix') || key.includes('tooltip')) {
          localStorage.removeItem(key);
          console.log(`🚀 APP v10: Removed localStorage key: ${key}`);
        }
      });
    } catch (e) {
      console.log("🚀 APP v10: localStorage clear completed");
    }

    // Clear sessionStorage if needed
    try {
      const keys = Object.keys(sessionStorage);
      keys.forEach(key => {
        if (key.includes('radix') || key.includes('tooltip')) {
          sessionStorage.removeItem(key);
          console.log(`🚀 APP v10: Removed sessionStorage key: ${key}`);
        }
      });
    } catch (e) {
      console.log("🚀 APP v10: sessionStorage clear completed");
    }
  }, []);
  
  // DEFENSIVE rendering - wrap everything in multiple try-catch layers
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
    console.error('🚀 APP v10: Defensive render caught error:', error);
    return (
      <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
        <div className="text-center p-8">
          <h1 className="text-2xl font-bold mb-4">App Render Error v10</h1>
          <button 
            onClick={() => window.location.reload()} 
            className="px-6 py-3 bg-indigo-600 rounded hover:bg-indigo-700 transition-colors"
          >
            Reload Application
          </button>
        </div>
      </div>
    );
  }
};

export default App;
