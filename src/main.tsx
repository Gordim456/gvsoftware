
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { analytics } from './utils/analytics';
import { cacheService } from './utils/cacheService';

console.log("🔥 MAIN: Starting COMPLETELY RADIX-FREE React application v5");
console.log("🔥 MAIN: React version:", React.version);
console.log("🔥 MAIN: React object:", React);

// Force clear any cached modules that might reference Radix
if (typeof window !== 'undefined') {
  console.log("🔥 MAIN: Clearing any cached Radix references v5");
  // @ts-ignore - intentionally clearing potential cache
  delete window.__radix_tooltip_cache;
  delete window.__radix_cache;
}

// Ensure React is properly loaded
if (!React || !React.useState) {
  console.error("🔥 MAIN: React or React.useState is not available!");
  throw new Error("React is not properly loaded");
}

// Initialize services before rendering
const initializeApp = async () => {
  try {
    console.log("🔥 MAIN: Initializing services - COMPLETELY TOOLTIP-FREE v5");
    
    // Initialize analytics
    analytics.init();
    
    // Initialize cache service
    await cacheService.init();
    
    console.log('🔥 GV Software: App initialized successfully - COMPLETELY CLEAN v5');
    
    // Track app start
    analytics.trackEvent('app_start', {
      timestamp: new Date().toISOString(),
      user_agent: navigator.userAgent,
      screen_resolution: `${screen.width}x${screen.height}`,
      viewport: `${window.innerWidth}x${window.innerHeight}`
    });
  } catch (error) {
    console.error('🔥 MAIN: Error initializing app:', error);
  }
};

// Enhanced error handling with React context check
const handleGlobalError = (event: ErrorEvent) => {
  console.error('🔥 GLOBAL ERROR v5:', {
    message: event.error?.message || event.message,
    filename: event.filename,
    lineno: event.lineno,
    colno: event.colno,
    stack: event.error?.stack,
    type: 'error',
    react_context: !!React,
    react_useState: !!React?.useState,
    is_radix_related: event.error?.stack?.includes('radix') || event.error?.stack?.includes('tooltip')
  });
  
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
  console.error('🔥 UNHANDLED REJECTION v5:', {
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

// Render app with additional safety checks
const rootElement = document.getElementById("root");
if (rootElement) {
  const root = createRoot(rootElement);
  
  console.log("🔥 MAIN: Creating root and initializing v5");
  console.log("🔥 MAIN: React context check:", !!React, !!React?.useState);
  
  // Initialize services and render
  initializeApp().then(() => {
    console.log("🔥 MAIN: About to render CLEAN App - ABSOLUTELY NO RADIX TOOLTIP v5");
    
    try {
      // Final React check before rendering
      if (!React || !React.useState) {
        throw new Error("React is not available at render time");
      }
      
      root.render(
        <React.StrictMode>
          <App />
        </React.StrictMode>
      );
      console.log("🔥 MAIN: App rendered successfully v5");
    } catch (error) {
      console.error("🔥 MAIN: Error rendering app v5:", error);
      
      // Fallback render without StrictMode
      try {
        root.render(<App />);
        console.log("🔥 MAIN: App rendered with fallback method v5");
      } catch (fallbackError) {
        console.error("🔥 MAIN: Fallback render failed v5:", fallbackError);
        rootElement.innerHTML = '<div style="padding: 20px; color: red; font-family: monospace;">❌ Application failed to load. Please refresh the page.</div>';
      }
    }
  }).catch((error) => {
    console.error("🔥 MAIN: Error during initialization v5:", error);
    rootElement.innerHTML = '<div style="padding: 20px; color: red; font-family: monospace;">❌ Application initialization failed. Please refresh the page.</div>';
  });
} else {
  console.error('🔥 MAIN: Root element not found v5');
}
