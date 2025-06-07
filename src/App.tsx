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

console.log("🔥 APP: Final clean version - absolutely no tooltip dependencies");

// Block any runtime attempts to load Radix tooltip
if (typeof window !== 'undefined') {
  // Override any require/import attempts
  const blockRadixTooltip = () => {
    console.log("🔥 APP: Implementing final Radix blocking");
    
    // Block CommonJS require
    if (typeof require !== 'undefined') {
      const originalRequire = require;
      require = function(id: string) {
        if (id.includes('@radix-ui/react-tooltip') || id.includes('radix-tooltip')) {
          console.error("🔥 APP: Blocked Radix tooltip require:", id);
          throw new Error('Radix tooltip blocked');
        }
        return originalRequire(id);
      };
    }
  };
  
  blockRadixTooltip();
}

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

// Main App component
const App: React.FC = () => {
  console.log("🔥 APP: Rendering final clean version");
  
  return (
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
  );
};

export default App;
