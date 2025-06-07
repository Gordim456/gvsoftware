
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { analytics } from './utils/analytics';
import { cacheService } from './utils/cacheService';

console.log("Starting main.tsx - initializing app without any Radix UI dependencies");

// Initialize services before rendering
const initializeApp = async () => {
  try {
    // Initialize analytics
    analytics.init();
    
    // Initialize cache service
    await cacheService.init();
    
    // Log app initialization
    console.log('GV Software App initialized successfully');
    
    // Track app start
    analytics.trackEvent('app_start', {
      timestamp: new Date().toISOString(),
      user_agent: navigator.userAgent,
      screen_resolution: `${screen.width}x${screen.height}`,
      viewport: `${window.innerWidth}x${window.innerHeight}`
    });
  } catch (error) {
    console.error('Error initializing app:', error);
  }
};

// Render app
const rootElement = document.getElementById("root");
if (rootElement) {
  const root = createRoot(rootElement);
  
  // Initialize services and render
  initializeApp().then(() => {
    console.log("About to render App component - no Radix UI tooltips");
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  });
} else {
  console.error('Root element not found');
}

// Handle unhandled errors
window.addEventListener('error', (event) => {
  console.error('Global error:', event.error);
  console.error('Error details:', {
    message: event.error?.message,
    filename: event.filename,
    lineno: event.lineno,
    colno: event.colno,
    stack: event.error?.stack
  });
  analytics.trackEvent('error', {
    message: event.error?.message || 'Unknown error',
    filename: event.filename,
    lineno: event.lineno,
    colno: event.colno
  });
});

// Handle unhandled promise rejections
window.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled promise rejection:', event.reason);
  analytics.trackEvent('unhandled_rejection', {
    reason: event.reason?.toString() || 'Unknown rejection'
  });
});
