import React from "react";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import { ThemeProvider } from "./components/theme/ThemeProvider";
import ScrollToTop from "./components/ScrollToTop";
import KeyboardShortcutsProvider from "./components/KeyboardShortcutsProvider";
import PreloadManager from "./components/PreloadManager";
import { analytics } from "./utils/analytics";
import { cacheService } from "./utils/cacheService";
import { useVirtualKeyboard } from "./hooks/useVirtualKeyboard";

// Lazy load pages to improve initial load time
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

// Create QueryClient with optimized settings
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      gcTime: 1000 * 60 * 10, // 10 minutes
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

// Loading fallback component
const LoadingFallback = () => (
  <div className="flex items-center justify-center h-screen bg-gv-darker">
    <div className="animate-pulse text-indigo-500 text-xl">Carregando...</div>
  </div>
);

// Component for analytics tracking
const AnalyticsTracker = () => {
  const location = useLocation();

  useEffect(() => {
    analytics.trackPageView(location.pathname);
  }, [location]);

  return null;
};

// Component for PWA and keyboard optimization
const PWAManager = () => {
  const { isKeyboardOpen } = useVirtualKeyboard();

  useEffect(() => {
    // Register service worker
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
          .then((registration) => {
            console.log('SW registered: ', registration);
          })
          .catch((registrationError) => {
            console.log('SW registration failed: ', registrationError);
          });
      });
    }

    // Initialize cache service
    cacheService.init();

    // Initialize analytics
    analytics.init();

    // Clean expired cache periodically
    const cleanupInterval = setInterval(() => {
      cacheService.clearExpiredCache();
    }, 1000 * 60 * 30); // 30 minutes

    return () => {
      clearInterval(cleanupInterval);
    };
  }, []);

  useEffect(() => {
    // Add CSS class for keyboard state
    if (isKeyboardOpen) {
      document.documentElement.classList.add('keyboard-open');
    } else {
      document.documentElement.classList.remove('keyboard-open');
    }
  }, [isKeyboardOpen]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <AnalyticsTracker />
          <PWAManager />
          <KeyboardShortcutsProvider />
          <PreloadManager />
          <Suspense fallback={<LoadingFallback />}>
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
            <ChatBot />
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
