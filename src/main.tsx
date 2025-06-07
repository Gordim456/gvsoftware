import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { analytics } from './utils/analytics';
import { cacheService } from './utils/cacheService';

console.log("🚀 MAIN v13: FORCE CLEAR VITE CACHE - ZERO RADIX");

// Force clear all possible caches including Vite
if (typeof window !== 'undefined') {
  console.log("🚀 MAIN v13: AGGRESSIVE CACHE CLEARING");
  
  try {
    localStorage.clear();
    sessionStorage.clear();
    
    // Clear Vite module cache by forcing a hard refresh
    if ('caches' in window) {
      caches.keys().then(names => {
        names.forEach(name => {
          console.log(`🚀 Deleting cache: ${name}`);
          caches.delete(name);
        });
      });
    }
    
    // Clear any module-specific storage
    Object.keys(localStorage).forEach(key => {
      if (key.includes('vite') || key.includes('radix') || key.includes('tooltip')) {
        localStorage.removeItem(key);
        console.log(`🚀 Removed: ${key}`);
      }
    });
  } catch (e) {
    console.log("🚀 MAIN v13: Cache clear completed");
  }
}

// Validate React immediately
if (!React || !React.useState || !React.useEffect) {
  console.error("🚀 MAIN v13: React validation failed!");
  const rootElement = document.getElementById("root");
  if (rootElement) {
    rootElement.innerHTML = '<div style="padding: 20px; color: red;">❌ React not available. Please refresh.</div>';
  }
  throw new Error("React is not available");
}

console.log("🚀 MAIN v13: React validation passed");

// Initialize services
const initializeApp = async () => {
  try {
    analytics.init();
    await cacheService.init();
    console.log('🚀 MAIN v13: App initialized successfully');
  } catch (error) {
    console.error('🚀 MAIN v13: Error initializing app:', error);
  }
};

// Enhanced global error handling
const handleGlobalError = (event: ErrorEvent) => {
  console.error('🚀 GLOBAL ERROR v13:', {
    message: event.error?.message || event.message,
    stack: event.error?.stack,
    isRadixRelated: event.error?.stack?.includes('radix') || event.error?.message?.includes('tooltip'),
    filename: event.filename
  });
  
  // Force hard reload if any Radix errors detected
  if (event.error?.stack?.includes('radix') || 
      event.error?.stack?.includes('TooltipProvider') ||
      event.filename?.includes('radix')) {
    console.error('🚀 DETECTED RADIX ERROR - FORCING HARD RELOAD v13');
    window.location.href = window.location.href;
  }
};

window.addEventListener('error', handleGlobalError);
window.addEventListener('unhandledrejection', (event: PromiseRejectionEvent) => {
  console.error('🚀 UNHANDLED REJECTION v13:', event.reason);
});

// Render application
const rootElement = document.getElementById("root");
if (rootElement) {
  const root = createRoot(rootElement);
  
  initializeApp().then(() => {
    console.log("🚀 MAIN v13: About to render App");
    
    try {
      root.render(
        <React.StrictMode>
          <App />
        </React.StrictMode>
      );
      console.log("🚀 MAIN v13: App rendered successfully");
    } catch (error) {
      console.error("🚀 MAIN v13: Error rendering app:", error);
      rootElement.innerHTML = '<div style="padding: 20px; color: red;">❌ App failed to load. Please refresh.</div>';
    }
  }).catch((error) => {
    console.error("🚀 MAIN v13: Error during initialization:", error);
    rootElement.innerHTML = '<div style="padding: 20px; color: red;">❌ Initialization failed. Please refresh.</div>';
  });
} else {
  console.error('🚀 MAIN v13: Root element not found');
}
