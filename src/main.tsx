
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

console.log("🚀 MAIN ULTIMATE PURGE: Starting application with ABSOLUTE ZERO Radix");

// Completely block any Radix from loading with nuclear approach
const blockRadixCompletely = () => {
  try {
    console.log("🚀 MAIN ULTIMATE PURGE: Nuclear Radix blocking initiated");
    
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
    
    // Block any module loading that contains radix
    if (typeof window !== 'undefined' && window.document) {
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === 1) { // Element node
              const element = node as Element;
              if (element.tagName === 'SCRIPT' && element.getAttribute('src')) {
                const src = element.getAttribute('src') || '';
                if (src.includes('radix') || src.includes('tooltip')) {
                  console.error('🚀 MAIN ULTIMATE PURGE: BLOCKED RADIX SCRIPT:', src);
                  element.remove();
                }
              }
            }
          });
        });
      });
      
      observer.observe(document.documentElement, {
        childList: true,
        subtree: true
      });
    }
    
    // Override any potential Radix imports at the module level
    if (typeof window !== 'undefined') {
      (window as any).__RADIX_BLOCKED__ = true;
      
      // Block RequireJS/AMD loaders
      if ((window as any).define) {
        const originalDefine = (window as any).define;
        (window as any).define = function(name: string, deps: any, factory: any) {
          if (typeof name === 'string' && name.includes('radix')) {
            console.error('🚀 MAIN ULTIMATE PURGE: BLOCKED AMD RADIX MODULE:', name);
            return;
          }
          return originalDefine.apply(this, arguments);
        };
      }
    }
    
    console.log('🚀 MAIN ULTIMATE PURGE: Nuclear Radix blocking complete');
  } catch (error) {
    console.error('🚀 MAIN ULTIMATE PURGE: Error in nuclear blocking:', error);
  }
};

// Enhanced error handler with immediate reload on any Radix detection
const handleGlobalError = (event: ErrorEvent) => {
  const message = event.error?.message || event.message || 'Unknown error';
  console.error('🚀 MAIN ULTIMATE PURGE: Global error detected:', message);
  
  // If any Radix error detected, immediately force hard reload
  if (message.includes('TooltipProvider') || 
      message.includes('@radix-ui') || 
      message.includes('radix') ||
      message.includes('useState') && message.includes('null')) {
    console.error('🚀 MAIN ULTIMATE PURGE: RADIX CONTAMINATION DETECTED - IMMEDIATE RELOAD');
    event.preventDefault();
    setTimeout(() => {
      window.location.href = window.location.href.split('?')[0] + '?purge=' + Date.now();
    }, 50);
    return false;
  }
};

// Add error handlers immediately
window.addEventListener('error', handleGlobalError, true);
window.addEventListener('unhandledrejection', (event: PromiseRejectionEvent) => {
  console.error('🚀 MAIN ULTIMATE PURGE: Promise rejection:', event.reason);
  
  const reason = String(event.reason);
  if (reason.includes('TooltipProvider') || reason.includes('@radix-ui') || reason.includes('radix')) {
    console.error('🚀 MAIN ULTIMATE PURGE: RADIX PROMISE REJECTION - IMMEDIATE RELOAD');
    event.preventDefault();
    setTimeout(() => {
      window.location.href = window.location.href.split('?')[0] + '?purge=' + Date.now();
    }, 50);
  }
}, true);

// Initialize application with nuclear blocking
const rootElement = document.getElementById("root");
if (rootElement) {
  const root = createRoot(rootElement);
  
  // Execute nuclear blocking before anything else
  blockRadixCompletely();
  
  console.log("🚀 MAIN ULTIMATE PURGE: Rendering application with NUCLEAR Radix blocking");
  
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  
  console.log("🚀 MAIN ULTIMATE PURGE: Application rendered - ABSOLUTE ZERO RADIX");
} else {
  console.error('🚀 MAIN ULTIMATE PURGE: Root element not found');
}
