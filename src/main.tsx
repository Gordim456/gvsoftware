
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { analytics } from './utils/analytics';
import { cacheService } from './utils/cacheService';

console.log("🔥 MAIN: Starting RADIX-FREE React application v4");
console.log("🔥 MAIN: React version:", React.version);
console.log("🔥 MAIN: React object:", React);

// Ensure React is properly loaded
if (!React || !React.useState) {
  console.error("🔥 MAIN: React or React.useState is not available!");
  throw new Error("React is not properly loaded");
}

// Initialize services before rendering
const initializeApp = async () => {
  try {
    console.log("🔥 MAIN: Initializing services - COMPLETELY TOOLTIP-FREE v4");
    
    // Initialize analytics
    analytics.init();
    
    // Initialize cache service
    await cacheService.init();
    
    console.log('🔥 GV Software: App initialized successfully - COMPLETELY CLEAN v4');
    
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
  console.error('🔥 GLOBAL ERROR v4:', {
    message: event.error?.message || event.message,
    filename: event.filename,
    lineno: event.lineno,
    colno: event.colno,
    stack: event.error?.stack,
    type: 'error',
    react_context: !!React,
    react_useState: !!React?.useState
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
  console.error('🔥 UNHANDLED REJECTION v4:', {
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
  
  console.log("🔥 MAIN: Creating root and initializing v4");
  console.log("🔥 MAIN: React context check:", !!React, !!React?.useState);
  
  // Initialize services and render
  initializeApp().then(() => {
    console.log("🔥 MAIN: About to render CLEAN App - ABSOLUTELY NO RADIX TOOLTIP v4");
    
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
      console.log("🔥 MAIN: App rendered successfully v4");
    } catch (error) {
      console.error("🔥 MAIN: Error rendering app v4:", error);
      
      // Fallback render without StrictMode
      try {
        root.render(<App />);
        console.log("🔥 MAIN: App rendered with fallback method v4");
      } catch (fallbackError) {
        console.error("🔥 MAIN: Fallback render failed v4:", fallbackError);
        rootElement.innerHTML = '<div style="padding: 20px; color: red; font-family: monospace;">❌ Application failed to load. Please refresh the page.</div>';
      }
    }
  }).catch((error) => {
    console.error("🔥 MAIN: Error during initialization v4:", error);
    rootElement.innerHTML = '<div style="padding: 20px; color: red; font-family: monospace;">❌ Application initialization failed. Please refresh the page.</div>';
  });
} else {
  console.error('🔥 MAIN: Root element not found v4');
}
