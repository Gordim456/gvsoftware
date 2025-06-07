
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

console.log("🚀 APP: Loading ULTRA CLEAN application - ZERO RADIX");

// Lazy loading components
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

// Safe ChatBot wrapper
const SafeChatBot = () => {
  try {
    return (
      <Suspense fallback={null}>
        <ChatBot />
      </Suspense>
    );
  } catch (error) {
    console.error('🚀 APP: ChatBot error:', error);
    return null;
  }
};

// Main App component - ABSOLUTELY NO RADIX COMPONENTS
const App: React.FC = () => {
  console.log("🚀 APP: Rendering app with ZERO Radix components");
  
  return (
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
  );
};

export default App;
