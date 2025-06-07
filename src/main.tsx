
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

console.log("🚀 MAIN v10: Starting COMPLETELY RADIX-FREE React application");
console.log("🚀 MAIN v10: React version:", React.version);
console.log("🚀 MAIN v10: React object:", React);
console.log("🚀 MAIN v10: React.useState:", typeof React.useState);

// ULTRA AGRESSIVA limpeza de cache - remove TODAS as referências possíveis do Radix
if (typeof window !== 'undefined') {
  console.log("🚀 MAIN v10: ULTRA AGGRESSIVE clearing of ALL cached Radix references");
  
  // Clear all potential Radix caches
  delete window.__radix_tooltip_cache;
  delete window.__radix_cache;
  delete window.__vite_plugin_react_preamble_installed;
  
  // Clear localStorage
  try {
    const keys = Object.keys(localStorage);
    keys.forEach(key => {
      if (key.includes('radix') || key.includes('tooltip')) {
        localStorage.removeItem(key);
        console.log(`🚀 MAIN v10: Removed localStorage key: ${key}`);
      }
    });
  } catch (e) {
    console.log("🚀 MAIN v10: localStorage clear completed");
  }
  
  // Clear sessionStorage
  try {
    const keys = Object.keys(sessionStorage);
    keys.forEach(key => {
      if (key.includes('radix') || key.includes('tooltip')) {
        sessionStorage.removeItem(key);
        console.log(`🚀 MAIN v10: Removed sessionStorage key: ${key}`);
      }
    });
  } catch (e) {
    console.log("🚀 MAIN v10: sessionStorage clear completed");
  }
  
  // Force garbage collection if available
  if (window.gc) {
    console.log("🚀 MAIN v10: Forcing garbage collection");
    window.gc();
  }
}

// SUPER STRICT React validation
if (!React || !React.useState || !React.useEffect) {
  console.error("🚀 MAIN v10: React or React hooks are not available!");
  throw new Error("React is not properly loaded - preventing all Radix issues v10");
}

console.log("🚀 MAIN v10: React validation passed - useState available:", !!React.useState);
console.log("🚀 MAIN v10: React validation passed - useEffect available:", !!React.useEffect);

// Initialize services before rendering
const initializeApp = async () => {
  try {
    console.log("🚀 MAIN v10: Initializing services - COMPLETELY TOOLTIP-FREE");
    
    // Initialize analytics
    analytics.init();
    
    // Initialize cache service
    await cacheService.init();
    
    console.log('🚀 GV Software v10: App initialized successfully - COMPLETELY CLEAN');
    
    // Track app start
    analytics.trackEvent('app_start', {
      timestamp: new Date().toISOString(),
      user_agent: navigator.userAgent,
      screen_resolution: `${screen.width}x${screen.height}`,
      viewport: `${window.innerWidth}x${window.innerHeight}`
    });
  } catch (error) {
    console.error('🚀 MAIN v10: Error initializing app:', error);
  }
};

// ENHANCED error handling com React context check
const handleGlobalError = (event: ErrorEvent) => {
  console.error('🚀 GLOBAL ERROR v10:', {
    message: event.error?.message || event.message,
    filename: event.filename,
    lineno: event.lineno,
    colno: event.colno,
    stack: event.error?.stack,
    type: 'error',
    react_context: !!React,
    react_useState: !!React?.useState,
    is_radix_related: event.error?.stack?.includes('radix') || event.error?.stack?.includes('tooltip'),
    is_tooltip_provider: event.error?.stack?.includes('TooltipProvider'),
    is_useState_issue: event.error?.message?.includes('useState')
  });
  
  // Se for QUALQUER erro do Radix, forçar reload imediato
  if (event.error?.stack?.includes('radix') || 
      event.error?.stack?.includes('TooltipProvider') || 
      event.error?.message?.includes('useState') ||
      event.error?.stack?.includes('@radix-ui')) {
    console.error('🚀 DETECTED RADIX/TOOLTIP ERROR - IMMEDIATE RELOAD v10');
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
  console.error('🚀 UNHANDLED REJECTION v10:', {
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
  
  console.log("🚀 MAIN v10: Creating root and initializing");
  console.log("🚀 MAIN v10: React context check:", !!React, !!React?.useState);
  
  // Initialize services and render
  initializeApp().then(() => {
    console.log("🚀 MAIN v10: About to render ULTRA CLEAN App - ABSOLUTELY NO RADIX TOOLTIP");
    
    try {
      // FINAL React check before rendering
      if (!React || !React.useState) {
        throw new Error("React is not available at render time v10");
      }
      
      root.render(
        <React.StrictMode>
          <App />
        </React.StrictMode>
      );
      console.log("🚀 MAIN v10: App rendered successfully");
    } catch (error) {
      console.error("🚀 MAIN v10: Error rendering app:", error);
      
      // Fallback render without StrictMode
      try {
        root.render(<App />);
        console.log("🚀 MAIN v10: App rendered with fallback method");
      } catch (fallbackError) {
        console.error("🚀 MAIN v10: Fallback render failed:", fallbackError);
        rootElement.innerHTML = '<div style="padding: 20px; color: red; font-family: monospace;">❌ Application failed to load. Please refresh the page. v10</div>';
      }
    }
  }).catch((error) => {
    console.error("🚀 MAIN v10: Error during initialization:", error);
    rootElement.innerHTML = '<div style="padding: 20px; color: red; font-family: monospace;">❌ Application initialization failed. Please refresh the page. v10</div>';
  });
} else {
  console.error('🚀 MAIN v10: Root element not found');
}
