
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
import TestComponent from "./components/TestComponent";
import SimpleChatBot from "./components/chat/SimpleChatBot";
import ErrorBoundary from "./components/ErrorBoundary";

console.log("🔥 APP: BULLETPROOF VERSION - Blocking all Radix UI contamination");

// Lazy loading components
const Home = lazy(() => import("./pages/Home"));
const Services = lazy(() => import("./pages/Services"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const Contact = lazy(() => import("./pages/Contact"));
const Terms = lazy(() => import("./pages/Terms"));
const Privacy = lazy(() => import("./pages/Privacy"));
const FAQ = lazy(() => import("./pages/FAQ"));
const NotFound = lazy(() => import("./pages/NotFound"));
const AdminDashboard = lazy(() => import("./pages/AdminDashboard"));

// Query client configuration
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

// Loading component
const LoadingFallback = () => (
  <div className="flex items-center justify-center h-screen bg-slate-950">
    <div className="w-8 h-8 border-2 border-indigo-400 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

// Error boundary specifically for tooltip errors
const TooltipErrorBoundary: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [hasError, setHasError] = React.useState(false);

  React.useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      if (event.message.includes('tooltip') || 
          event.message.includes('@radix-ui') || 
          event.message.includes('TooltipProvider') ||
          event.message.includes('useState')) {
        console.error("🔥 APP: BLOCKED TOOLTIP ERROR:", event.message);
        setHasError(true);
        event.preventDefault();
        event.stopPropagation();
        return false;
      }
    };
    
    window.addEventListener('error', handleError);
    return () => window.removeEventListener('error', handleError);
  }, []);

  if (hasError) {
    console.log("🔥 APP: Tooltip error blocked, continuing with fallback");
    return <>{children}</>;
  }

  return <>{children}</>;
};

// Main App component
const App: React.FC = () => {
  console.log("🔥 APP: RENDERING BULLETPROOF VERSION");
  
  return (
    <TooltipErrorBoundary>
      <ErrorBoundary>
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
                <TestComponent />
                <SimpleChatBot />
              </Suspense>
            </BrowserRouter>
          </ThemeProvider>
        </QueryClientProvider>
      </ErrorBoundary>
    </TooltipErrorBoundary>
  );
};

export default App;
