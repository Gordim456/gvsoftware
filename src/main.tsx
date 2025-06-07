
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

console.log("🚀 MAIN: Starting ULTRA CLEAN application - ZERO RADIX - COMPLETE PURGE");

// Force complete cache clearing and aggressive cleanup
const purgeAllRadixReferences = async () => {
  try {
    console.log("🚀 MAIN: PURGING ALL RADIX REFERENCES");
    
    // Clear all possible caches
    if (typeof Storage !== 'undefined') {
      localStorage.clear();
      sessionStorage.clear();
    }
    
    if ('caches' in window) {
      const cacheNames = await caches.keys();
      await Promise.all(cacheNames.map(name => caches.delete(name)));
    }
    
    // Remove any Radix references from window object
    if (window && typeof window === 'object') {
      const windowKeys = Object.keys(window);
      windowKeys.forEach(key => {
        if (key.toLowerCase().includes('radix') || 
            key.toLowerCase().includes('tooltip') ||
            key.toLowerCase().includes('provider')) {
          try {
            delete (window as any)[key];
            console.log("🚀 MAIN: Removed window reference:", key);
          } catch (e) {
            console.log("🚀 MAIN: Could not remove:", key);
          }
        }
      });
    }
    
    // Force garbage collection if available
    if ((window as any).gc) {
      (window as any).gc();
    }
    
    console.log('🚀 MAIN: All Radix references purged');
  } catch (error) {
    console.error('🚀 MAIN: Error purging references:', error);
  }
};

// Enhanced error handler with Radix detection
const handleGlobalError = (event: ErrorEvent) => {
  const message = event.error?.message || event.message || 'Unknown error';
  console.error('🚀 MAIN: Global error detected:', message);
  
  // If it's ANY Radix related error, force hard reload
  if (message.includes('TooltipProvider') || 
      message.includes('radix') || 
      message.includes('tooltip') ||
      message.includes('useState') ||
      message.includes('Cannot read properties of null')) {
    console.log('🚀 MAIN: RADIX ERROR DETECTED - FORCING HARD RELOAD');
    // Force hard reload with timestamp to bust all caches
    setTimeout(() => {
      window.location.href = window.location.href.split('?')[0] + '?purge=' + Date.now();
    }, 100);
  }
};

window.addEventListener('error', handleGlobalError);
window.addEventListener('unhandledrejection', (event: PromiseRejectionEvent) => {
  console.error('🚀 MAIN: Unhandled promise rejection:', event.reason);
  
  // Check if rejection is Radix related
  const reason = String(event.reason);
  if (reason.includes('TooltipProvider') || reason.includes('radix') || reason.includes('tooltip')) {
    console.log('🚀 MAIN: RADIX PROMISE REJECTION - FORCING RELOAD');
    setTimeout(() => {
      window.location.href = window.location.href.split('?')[0] + '?purge=' + Date.now();
    }, 100);
  }
});

// Render application with complete purge
const rootElement = document.getElementById("root");
if (rootElement) {
  const root = createRoot(rootElement);
  
  purgeAllRadixReferences().then(() => {
    console.log("🚀 MAIN: Starting render after complete purge");
    
    // Add a small delay to ensure cleanup is complete
    setTimeout(() => {
      root.render(
        <React.StrictMode>
          <App />
        </React.StrictMode>
      );
      
      console.log("🚀 MAIN: Application rendered successfully - ZERO RADIX");
    }, 50);
    
  }).catch((error) => {
    console.error("🚀 MAIN: Failed to purge or initialize:", error);
    
    // Fallback render with hard reload option
    root.render(
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
        <div className="text-center p-8">
          <h1 className="text-2xl font-bold mb-4">Application Error</h1>
          <p className="text-gray-300 mb-4">Failed to initialize the application.</p>
          <button 
            onClick={() => {
              // Force hard reload with complete cache busting
              window.location.href = window.location.href.split('?')[0] + '?force=' + Date.now();
            }} 
            className="px-6 py-3 bg-indigo-600 rounded hover:bg-indigo-700 transition-colors"
          >
            Force Complete Reload
          </button>
        </div>
      </div>
    );
  });
} else {
  console.error('🚀 MAIN: Root element not found');
}
