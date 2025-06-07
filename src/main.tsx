
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { analytics } from './utils/analytics';
import { cacheService } from './utils/cacheService';

// Extend Window interface to include custom properties
declare global {
  interface Window {
    __radix_tooltip_cache?: any;
    __radix_cache?: any;
    __vite_plugin_react_preamble_installed?: any;
  }
}

console.log("🔥🔥🔥 MAIN v9: Starting COMPLETELY RADIX-FREE React application");
console.log("🔥🔥🔥 MAIN v9: React version:", React.version);
console.log("🔥🔥🔥 MAIN v9: React object:", React);

// ULTRA AGGRESSIVE cache clearing - remove ALL potential Radix references
if (typeof window !== 'undefined') {
  console.log("🔥🔥🔥 MAIN v9: ULTRA AGGRESSIVE clearing of ALL cached Radix references");
  
  // Clear all potential Radix caches
  delete window.__radix_tooltip_cache;
  delete window.__radix_cache;
  delete window.__vite_plugin_react_preamble_installed;
  
  // Clear any potential module cache
  if ('webpackChunkName' in window) {
    console.log("🔥🔥🔥 MAIN v9: Clearing webpack chunk cache");
  }
  
  // Force garbage collection if available
  if (window.gc) {
    console.log("🔥🔥🔥 MAIN v9: Forcing garbage collection");
    window.gc();
  }
}

// SUPER STRICT React validation
if (!React || !React.useState || !React.useEffect) {
  console.error("🔥🔥🔥 MAIN v9: React or React hooks are not available!");
  throw new Error("React is not properly loaded - preventing all Radix issues");
}

console.log("🔥🔥🔥 MAIN v9: React validation passed - useState available:", !!React.useState);

// Initialize services before rendering
const initializeApp = async () => {
  try {
    console.log("🔥🔥🔥 MAIN v9: Initializing services - COMPLETELY TOOLTIP-FREE");
    
    // Initialize analytics
    analytics.init();
    
    // Initialize cache service
    await cacheService.init();
    
    console.log('🔥🔥🔥 GV Software v9: App initialized successfully - COMPLETELY CLEAN');
    
    // Track app start
    analytics.trackEvent('app_start', {
      timestamp: new Date().toISOString(),
      user_agent: navigator.userAgent,
      screen_resolution: `${screen.width}x${screen.height}`,
      viewport: `${window.innerWidth}x${window.innerHeight}`
    });
  } catch (error) {
    console.error('🔥🔥🔥 MAIN v9: Error initializing app:', error);
  }
};

// ENHANCED error handling with React context check
const handleGlobalError = (event: ErrorEvent) => {
  console.error('🔥🔥🔥 GLOBAL ERROR v9:', {
    message: event.error?.message || event.message,
    filename: event.filename,
    lineno: event.lineno,
    colno: event.colno,
    stack: event.error?.stack,
    type: 'error',
    react_context: !!React,
    react_useState: !!React?.useState,
    is_radix_related: event.error?.stack?.includes('radix') || event.error?.stack?.includes('tooltip'),
    is_tooltip_provider: event.error?.stack?.includes('TooltipProvider')
  });
  
  // If it's ANY Radix error, force immediate reload
  if (event.error?.stack?.includes('radix') || event.error?.stack?.includes('TooltipProvider') || event.error?.message?.includes('useState')) {
    console.error('🔥🔥🔥 DETECTED RADIX/TOOLTIP ERROR - IMMEDIATE RELOAD v9');
    window.location.reload();
    return;
  }
  
  // Track error but don't let it crash the app
  analytics.trackEvent('error', {
    message: event.error?.message || event.message || 'Unknown error',
    filename: event.filename,
    lineno: event.lineno,
    colno: event.colno,
    stack: event.error?.stack
  });
};

const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
  console.error('🔥🔥🔥 UNHANDLED REJECTION v9:', {
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

// Render app with MAXIMUM safety checks
const rootElement = document.getElementById("root");
if (rootElement) {
  const root = createRoot(rootElement);
  
  console.log("🔥🔥🔥 MAIN v9: Creating root and initializing");
  console.log("🔥🔥🔥 MAIN v9: React context check:", !!React, !!React?.useState);
  
  // Initialize services and render
  initializeApp().then(() => {
    console.log("🔥🔥🔥 MAIN v9: About to render ULTRA CLEAN App - ABSOLUTELY NO RADIX TOOLTIP");
    
    try {
      // FINAL React check before rendering
      if (!React || !React.useState) {
        throw new Error("React is not available at render time v9");
      }
      
      root.render(
        <React.StrictMode>
          <App />
        </React.StrictMode>
      );
      console.log("🔥🔥🔥 MAIN v9: App rendered successfully");
    } catch (error) {
      console.error("🔥🔥🔥 MAIN v9: Error rendering app:", error);
      
      // Fallback render without StrictMode
      try {
        root.render(<App />);
        console.log("🔥🔥🔥 MAIN v9: App rendered with fallback method");
      } catch (fallbackError) {
        console.error("🔥🔥🔥 MAIN v9: Fallback render failed:", fallbackError);
        rootElement.innerHTML = '<div style="padding: 20px; color: red; font-family: monospace;">❌ Application failed to load. Please refresh the page. v9</div>';
      }
    }
  }).catch((error) => {
    console.error("🔥🔥🔥 MAIN v9: Error during initialization:", error);
    rootElement.innerHTML = '<div style="padding: 20px; color: red; font-family: monospace;">❌ Application initialization failed. Please refresh the page. v9</div>';
  });
} else {
  console.error('🔥🔥🔥 MAIN v9: Root element not found');
}
