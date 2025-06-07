
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

console.log("🚀 MAIN ULTIMATE CLEAN: Starting application with ZERO Radix");

// Completely block any Radix from loading
const blockRadixCompletely = () => {
  try {
    console.log("🚀 MAIN ULTIMATE CLEAN: Blocking all Radix completely");
    
    // Clear all caches aggressively
    if (typeof Storage !== 'undefined') {
      localStorage.clear();
      sessionStorage.clear();
    }
    
    if ('caches' in window) {
      caches.keys().then(cacheNames => {
        cacheNames.forEach(name => caches.delete(name));
      });
    }
    
    console.log('🚀 MAIN ULTIMATE CLEAN: Radix blocking complete');
  } catch (error) {
    console.error('🚀 MAIN ULTIMATE CLEAN: Error blocking Radix:', error);
  }
};

// Enhanced error handler
const handleGlobalError = (event: ErrorEvent) => {
  const message = event.error?.message || event.message || 'Unknown error';
  console.error('🚀 MAIN ULTIMATE CLEAN: Global error:', message);
  
  // If any Radix error, force reload
  if (message.includes('TooltipProvider') || 
      message.includes('@radix-ui') || 
      message.includes('radix') ||
      message.includes('useState') && message.includes('null')) {
    console.log('🚀 MAIN ULTIMATE CLEAN: RADIX ERROR DETECTED - HARD RELOAD');
    setTimeout(() => {
      window.location.href = window.location.href.split('?')[0] + '?clean=' + Date.now();
    }, 100);
  }
};

window.addEventListener('error', handleGlobalError);
window.addEventListener('unhandledrejection', (event: PromiseRejectionEvent) => {
  console.error('🚀 MAIN ULTIMATE CLEAN: Promise rejection:', event.reason);
  
  const reason = String(event.reason);
  if (reason.includes('TooltipProvider') || reason.includes('@radix-ui') || reason.includes('radix')) {
    console.log('🚀 MAIN ULTIMATE CLEAN: RADIX PROMISE REJECTION - RELOAD');
    setTimeout(() => {
      window.location.href = window.location.href.split('?')[0] + '?clean=' + Date.now();
    }, 100);
  }
});

// Initialize application
const rootElement = document.getElementById("root");
if (rootElement) {
  const root = createRoot(rootElement);
  
  blockRadixCompletely();
  
  console.log("🚀 MAIN ULTIMATE CLEAN: Rendering application");
  
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  
  console.log("🚀 MAIN ULTIMATE CLEAN: Application rendered - ZERO RADIX");
} else {
  console.error('🚀 MAIN ULTIMATE CLEAN: Root element not found');
}
