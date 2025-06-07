
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { analytics } from './utils/analytics';
import { cacheService } from './utils/cacheService';

console.log("🚀 MAIN v12: CLEAN START - ZERO RADIX DEPENDENCIES");

// Force clear all possible caches
if (typeof window !== 'undefined') {
  console.log("🚀 MAIN v12: CLEARING ALL CACHES");
  
  try {
    localStorage.clear();
    sessionStorage.clear();
    
    // Clear any module cache
    if ('caches' in window) {
      caches.keys().then(names => {
        names.forEach(name => caches.delete(name));
      });
    }
  } catch (e) {
    console.log("🚀 MAIN v12: Cache clear completed");
  }
}

// Validate React immediately
if (!React || !React.useState || !React.useEffect) {
  console.error("🚀 MAIN v12: React validation failed!");
  const rootElement = document.getElementById("root");
  if (rootElement) {
    rootElement.innerHTML = '<div style="padding: 20px; color: red;">❌ React not available. Please refresh.</div>';
  }
  throw new Error("React is not available");
}

console.log("🚀 MAIN v12: React validation passed");

// Initialize services
const initializeApp = async () => {
  try {
    analytics.init();
    await cacheService.init();
    console.log('🚀 MAIN v12: App initialized successfully');
  } catch (error) {
    console.error('🚀 MAIN v12: Error initializing app:', error);
  }
};

// Global error handling
const handleGlobalError = (event: ErrorEvent) => {
  console.error('🚀 GLOBAL ERROR v12:', {
    message: event.error?.message || event.message,
    stack: event.error?.stack,
    isRadixRelated: event.error?.stack?.includes('radix') || event.error?.message?.includes('tooltip')
  });
  
  // Force reload if any Radix errors detected
  if (event.error?.stack?.includes('radix') || event.error?.stack?.includes('TooltipProvider')) {
    console.error('🚀 DETECTED RADIX ERROR - FORCING RELOAD v12');
    setTimeout(() => window.location.reload(), 100);
  }
};

window.addEventListener('error', handleGlobalError);
window.addEventListener('unhandledrejection', (event: PromiseRejectionEvent) => {
  console.error('🚀 UNHANDLED REJECTION v12:', event.reason);
});

// Render application
const rootElement = document.getElementById("root");
if (rootElement) {
  const root = createRoot(rootElement);
  
  initializeApp().then(() => {
    console.log("🚀 MAIN v12: About to render App");
    
    try {
      root.render(
        <React.StrictMode>
          <App />
        </React.StrictMode>
      );
      console.log("🚀 MAIN v12: App rendered successfully");
    } catch (error) {
      console.error("🚀 MAIN v12: Error rendering app:", error);
      rootElement.innerHTML = '<div style="padding: 20px; color: red;">❌ App failed to load. Please refresh.</div>';
    }
  }).catch((error) => {
    console.error("🚀 MAIN v12: Error during initialization:", error);
    rootElement.innerHTML = '<div style="padding: 20px; color: red;">❌ Initialization failed. Please refresh.</div>';
  });
} else {
  console.error('🚀 MAIN v12: Root element not found');
}
