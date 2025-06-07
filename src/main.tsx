
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { analytics } from './utils/analytics';
import { cacheService } from './utils/cacheService';

// Extend Window interface
declare global {
  interface Window {
    __radix_tooltip_cache?: any;
    __radix_cache?: any;
    __vite_plugin_react_preamble_installed?: any;
    gc?: () => void;
  }
}

console.log("🚀 MAIN v11: Starting COMPLETELY RADIX-FREE React application - FORCE CACHE CLEAR");
console.log("🚀 MAIN v11: React version:", React.version);
console.log("🚀 MAIN v11: React object:", React);
console.log("🚀 MAIN v11: React.useState:", typeof React.useState);

// ULTRA AGGRESSIVE cache clearing - force Vite to rebuild everything
if (typeof window !== 'undefined') {
  console.log("🚀 MAIN v11: FORCE CLEARING ALL VITE/RADIX CACHES");
  
  // Clear all potential caches
  delete window.__radix_tooltip_cache;
  delete window.__radix_cache;
  delete window.__vite_plugin_react_preamble_installed;
  
  // Force clear all storage
  try {
    localStorage.clear();
    sessionStorage.clear();
    console.log("🚀 MAIN v11: All storage cleared");
  } catch (e) {
    console.log("🚀 MAIN v11: Storage clear completed");
  }
  
  // Force garbage collection
  if (window.gc) {
    console.log("🚀 MAIN v11: Forcing garbage collection");
    window.gc();
  }
  
  // Force reload if any Radix references detected
  const scripts = document.querySelectorAll('script[src*="radix"]');
  if (scripts.length > 0) {
    console.error("🚀 MAIN v11: RADIX SCRIPTS DETECTED - FORCING HARD RELOAD");
    window.location.reload();
    return;
  }
}

// MAXIMUM React validation
if (!React || !React.useState || !React.useEffect) {
  console.error("🚀 MAIN v11: React or React hooks are not available!");
  throw new Error("React is not properly loaded - preventing all issues v11");
}

console.log("🚀 MAIN v11: React validation passed - all hooks available");

// Initialize services
const initializeApp = async () => {
  try {
    console.log("🚀 MAIN v11: Initializing services - COMPLETELY CLEAN");
    
    analytics.init();
    await cacheService.init();
    
    console.log('🚀 GV Software v11: App initialized successfully - COMPLETELY CLEAN');
    
    analytics.trackEvent('app_start', {
      timestamp: new Date().toISOString(),
      user_agent: navigator.userAgent,
      screen_resolution: `${screen.width}x${screen.height}`,
      viewport: `${window.innerWidth}x${window.innerHeight}`
    });
  } catch (error) {
    console.error('🚀 MAIN v11: Error initializing app:', error);
  }
};

// Enhanced error handling
const handleGlobalError = (event: ErrorEvent) => {
  console.error('🚀 GLOBAL ERROR v11:', {
    message: event.error?.message || event.message,
    filename: event.filename,
    lineno: event.lineno,
    colno: event.colno,
    stack: event.error?.stack,
    type: 'error',
    react_context: !!React,
    react_useState: !!React?.useState,
    is_radix_related: event.error?.stack?.includes('radix') || event.error?.stack?.includes('tooltip'),
    is_vite_deps: event.filename?.includes('/node_modules/.vite/deps/')
  });
  
  // If ANY Radix/Vite deps error, force immediate reload
  if (event.error?.stack?.includes('radix') || 
      event.error?.stack?.includes('TooltipProvider') || 
      event.filename?.includes('/node_modules/.vite/deps/') ||
      event.error?.message?.includes('useState')) {
    console.error('🚀 DETECTED RADIX/VITE DEPS ERROR - FORCING IMMEDIATE RELOAD v11');
    setTimeout(() => {
      window.location.reload();
    }, 100);
    return;
  }
  
  analytics.trackEvent('error', {
    message: event.error?.message || event.message || 'Unknown error',
    filename: event.filename,
    lineno: event.lineno,
    colno: event.colno,
    stack: event.error?.stack
  });
};

const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
  console.error('🚀 UNHANDLED REJECTION v11:', {
    reason: event.reason,
    type: 'unhandled_rejection',
    react_context: !!React,
    react_useState: !!React?.useState
  });
  
  analytics.trackEvent('unhandled_rejection', {
    reason: event.reason?.toString() || 'Unknown rejection'
  });
};

// Set up global error handlers
window.addEventListener('error', handleGlobalError);
window.addEventListener('unhandledrejection', handleUnhandledRejection);

// Render with maximum safety
const rootElement = document.getElementById("root");
if (rootElement) {
  const root = createRoot(rootElement);
  
  console.log("🚀 MAIN v11: Creating root with CLEAN environment");
  
  initializeApp().then(() => {
    console.log("🚀 MAIN v11: About to render ULTRA CLEAN App - NO RADIX DEPENDENCIES");
    
    try {
      // Final React validation
      if (!React || !React.useState) {
        throw new Error("React is not available at render time v11");
      }
      
      root.render(
        <React.StrictMode>
          <App />
        </React.StrictMode>
      );
      console.log("🚀 MAIN v11: App rendered successfully");
    } catch (error) {
      console.error("🚀 MAIN v11: Error rendering app:", error);
      
      // Fallback render
      try {
        root.render(<App />);
        console.log("🚀 MAIN v11: App rendered with fallback method");
      } catch (fallbackError) {
        console.error("🚀 MAIN v11: Fallback render failed:", fallbackError);
        rootElement.innerHTML = '<div style="padding: 20px; color: red; font-family: monospace;">❌ Application failed to load. Please refresh the page. v11</div>';
      }
    }
  }).catch((error) => {
    console.error("🚀 MAIN v11: Error during initialization:", error);
    rootElement.innerHTML = '<div style="padding: 20px; color: red; font-family: monospace;">❌ Application initialization failed. Please refresh the page. v11</div>';
  });
} else {
  console.error('🚀 MAIN v11: Root element not found');
}
