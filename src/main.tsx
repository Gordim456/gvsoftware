
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { analytics } from './utils/analytics';
import { cacheService } from './utils/cacheService';

console.log("🔥 MAIN: Starting COMPLETELY CLEAN React application - ZERO RADIX TOOLTIP");
console.log("🔥 MAIN: React version:", React.version);
console.log("🔥 MAIN: React hooks available:", !!React.useState);

// Initialize services before rendering
const initializeApp = async () => {
  try {
    console.log("🔥 MAIN: Initializing services - COMPLETELY TOOLTIP-FREE");
    
    // Initialize analytics
    analytics.init();
    
    // Initialize cache service
    await cacheService.init();
    
    console.log('🔥 GV Software: App initialized successfully - COMPLETELY CLEAN');
    
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

// Enhanced error handling
const handleGlobalError = (event: ErrorEvent) => {
  console.error('🔥 GLOBAL ERROR:', {
    message: event.error?.message || event.message,
    filename: event.filename,
    lineno: event.lineno,
    colno: event.colno,
    stack: event.error?.stack,
    type: 'error'
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
  console.error('🔥 UNHANDLED REJECTION:', {
    reason: event.reason,
    type: 'unhandled_rejection'
  });
  
  analytics.trackEvent('unhandled_rejection', {
    reason: event.reason?.toString() || 'Unknown rejection'
  });
};

// Set up global error handlers
window.addEventListener('error', handleGlobalError);
window.addEventListener('unhandledrejection', handleUnhandledRejection);

// Render app with error boundary
const rootElement = document.getElementById("root");
if (rootElement) {
  const root = createRoot(rootElement);
  
  console.log("🔥 MAIN: Creating root and initializing");
  
  // Initialize services and render
  initializeApp().then(() => {
    console.log("🔥 MAIN: About to render CLEAN App - NO RADIX TOOLTIP ANYWHERE");
    
    try {
      root.render(
        <React.StrictMode>
          <App />
        </React.StrictMode>
      );
      console.log("🔥 MAIN: App rendered successfully");
    } catch (error) {
      console.error("🔥 MAIN: Error rendering app:", error);
    }
  }).catch((error) => {
    console.error("🔥 MAIN: Error during initialization:", error);
  });
} else {
  console.error('🔥 MAIN: Root element not found');
}
