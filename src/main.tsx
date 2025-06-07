
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

console.log("🚀 MAIN: Starting ULTRA CLEAN application - NO RADIX");

// Force complete cache clearing and reload if needed
const clearAllCaches = async () => {
  try {
    // Clear all possible caches
    if (typeof Storage !== 'undefined') {
      localStorage.clear();
      sessionStorage.clear();
    }
    
    if ('caches' in window) {
      const cacheNames = await caches.keys();
      await Promise.all(cacheNames.map(name => caches.delete(name)));
    }
    
    // Force reload if we detect any Radix in the window object
    if (window && typeof window === 'object') {
      const windowKeys = Object.keys(window).filter(key => 
        key.toLowerCase().includes('radix') || 
        key.toLowerCase().includes('tooltip')
      );
      
      if (windowKeys.length > 0) {
        console.log("🚀 MAIN: Detected Radix remnants, forcing reload:", windowKeys);
        window.location.reload();
        return;
      }
    }
    
    console.log('🚀 MAIN: All caches cleared successfully');
  } catch (error) {
    console.error('🚀 MAIN: Error clearing caches:', error);
  }
};

// Simple error handler
const handleGlobalError = (event: ErrorEvent) => {
  const message = event.error?.message || event.message || 'Unknown error';
  console.error('🚀 MAIN: Global error:', message);
  
  // If it's a Radix/tooltip related error, force reload
  if (message.includes('TooltipProvider') || message.includes('radix') || message.includes('tooltip')) {
    console.log('🚀 MAIN: Detected Radix error, forcing reload...');
    setTimeout(() => window.location.reload(), 100);
  }
};

window.addEventListener('error', handleGlobalError);
window.addEventListener('unhandledrejection', (event: PromiseRejectionEvent) => {
  console.error('🚀 MAIN: Unhandled promise rejection:', event.reason);
});

// Render application
const rootElement = document.getElementById("root");
if (rootElement) {
  const root = createRoot(rootElement);
  
  clearAllCaches().then(() => {
    console.log("🚀 MAIN: Rendering CLEAN application");
    
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    
    console.log("🚀 MAIN: Application rendered successfully");
  }).catch((error) => {
    console.error("🚀 MAIN: Failed to initialize:", error);
    
    // Fallback render with hard reload option
    root.render(
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
        <div className="text-center p-8">
          <h1 className="text-2xl font-bold mb-4">Application Error</h1>
          <p className="text-gray-300 mb-4">Failed to initialize the application.</p>
          <button 
            onClick={() => {
              // Force hard reload with cache busting
              window.location.href = window.location.href + '?t=' + Date.now();
            }} 
            className="px-6 py-3 bg-indigo-600 rounded hover:bg-indigo-700 transition-colors"
          >
            Force Reload Application
          </button>
        </div>
      </div>
    );
  });
} else {
  console.error('🚀 MAIN: Root element not found');
}
