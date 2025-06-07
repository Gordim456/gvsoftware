
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { ThemeProvider } from "./components/theme/ThemeProvider";
import ScrollToTop from "./components/ScrollToTop";
import KeyboardShortcutsProvider from "./components/KeyboardShortcutsProvider";

console.log("🔥 APP: Loading COMPLETELY CLEAN app - ZERO RADIX TOOLTIP DEPENDENCIES");

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
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

// Error boundary for the entire app
class AppErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('🔥 APP ERROR BOUNDARY: Caught app error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Something went wrong</h1>
            <button 
              onClick={() => window.location.reload()} 
              className="px-4 py-2 bg-indigo-600 rounded hover:bg-indigo-700"
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

// Safe ChatBot component
const SafeChatBot = () => {
  try {
    return (
      <Suspense fallback={null}>
        <ChatBot />
      </Suspense>
    );
  } catch (error) {
    console.error('🔥 CHATBOT ERROR:', error);
    return null;
  }
};

const App: React.FC = () => {
  React.useEffect(() => {
    console.log("🔥 APP: Component mounted successfully - ABSOLUTELY NO RADIX TOOLTIP ANYWHERE");
  }, []);
  
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
};

export default App;
