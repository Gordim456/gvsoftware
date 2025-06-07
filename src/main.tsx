
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { analytics } from './utils/analytics';
import { cacheService } from './utils/cacheService';

console.log("🚀 MAIN: Starting clean application");

// Simple initialization
const initializeApp = async () => {
  try {
    console.log("🚀 MAIN: Initializing services");
    analytics.init();
    await cacheService.init();
    console.log('🚀 MAIN: Services initialized successfully');
  } catch (error) {
    console.error('🚀 MAIN: Error initializing services:', error);
  }
};

// Simple error handler
const handleGlobalError = (event: ErrorEvent) => {
  console.error('🚀 MAIN: Global error:', event.error?.message || event.message);
};

window.addEventListener('error', handleGlobalError);
window.addEventListener('unhandledrejection', (event: PromiseRejectionEvent) => {
  console.error('🚀 MAIN: Unhandled promise rejection:', event.reason);
});

// Render application
const rootElement = document.getElementById("root");
if (rootElement) {
  const root = createRoot(rootElement);
  
  initializeApp().then(() => {
    console.log("🚀 MAIN: Rendering application");
    
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    
    console.log("🚀 MAIN: Application rendered successfully");
  }).catch((error) => {
    console.error("🚀 MAIN: Failed to initialize:", error);
    
    // Fallback render
    root.render(
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
        <div className="text-center p-8">
          <h1 className="text-2xl font-bold mb-4">Application Error</h1>
          <p className="text-gray-300 mb-4">Failed to initialize the application.</p>
          <button 
            onClick={() => window.location.reload()} 
            className="px-6 py-3 bg-indigo-600 rounded hover:bg-indigo-700 transition-colors"
          >
            Reload Application
          </button>
        </div>
      </div>
    );
  });
} else {
  console.error('🚀 MAIN: Root element not found');
}
