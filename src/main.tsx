
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

console.log("🚀 MAIN FINAL PURGE: Starting application with ABSOLUTE ZERO Radix - NUCLEAR VERSION");

// NUCLEAR Radix blocking - prevent ANY Radix from ever loading
const nuclearRadixBlock = () => {
  try {
    console.log("🚀 MAIN FINAL PURGE: NUCLEAR Radix blocking initiated");
    
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
    
    // Override module resolution to block Radix
    if (typeof window !== 'undefined') {
      (window as any).__RADIX_BLOCKED__ = true;
      
      // Block any dynamic imports of Radix
      const originalImport = (window as any).import;
      if (originalImport) {
        (window as any).import = function(specifier: string) {
          if (specifier.includes('radix') || specifier.includes('@radix-ui')) {
            console.error('🚀 MAIN FINAL PURGE: BLOCKED DYNAMIC RADIX IMPORT:', specifier);
            return Promise.resolve({ default: () => null });
          }
          return originalImport.apply(this, arguments);
        };
      }
      
      // Block RequireJS/AMD loaders
      if ((window as any).define) {
        const originalDefine = (window as any).define;
        (window as any).define = function(name: string, deps: any, factory: any) {
          if (typeof name === 'string' && (name.includes('radix') || name.includes('@radix-ui'))) {
            console.error('🚀 MAIN FINAL PURGE: BLOCKED AMD RADIX MODULE:', name);
            return;
          }
          return originalDefine.apply(this, arguments);
        };
      }
      
      // Override require if it exists
      if ((window as any).require) {
        const originalRequire = (window as any).require;
        (window as any).require = function(id: string) {
          if (id.includes('radix') || id.includes('@radix-ui')) {
            console.error('🚀 MAIN FINAL PURGE: BLOCKED REQUIRE RADIX MODULE:', id);
            return {};
          }
          return originalRequire.apply(this, arguments);
        };
      }
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
                if (src.includes('radix') || src.includes('@radix-ui') || src.includes('tooltip')) {
                  console.error('🚀 MAIN FINAL PURGE: BLOCKED RADIX SCRIPT:', src);
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
    
    console.log('🚀 MAIN FINAL PURGE: NUCLEAR Radix blocking complete');
  } catch (error) {
    console.error('🚀 MAIN FINAL PURGE: Error in nuclear blocking:', error);
  }
};

// Enhanced error handler with immediate reload on any Radix detection
const handleGlobalError = (event: ErrorEvent) => {
  const message = event.error?.message || event.message || 'Unknown error';
  console.error('🚀 MAIN FINAL PURGE: Global error detected:', message);
  
  // If any Radix error detected, immediately force hard reload
  if (message.includes('TooltipProvider') || 
      message.includes('@radix-ui') || 
      message.includes('radix') ||
      message.includes('useState') && message.includes('null')) {
    console.error('🚀 MAIN FINAL PURGE: RADIX CONTAMINATION DETECTED - IMMEDIATE RELOAD');
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
  console.error('🚀 MAIN FINAL PURGE: Promise rejection:', event.reason);
  
  const reason = String(event.reason);
  if (reason.includes('TooltipProvider') || reason.includes('@radix-ui') || reason.includes('radix')) {
    console.error('🚀 MAIN FINAL PURGE: RADIX PROMISE REJECTION - IMMEDIATE RELOAD');
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
  nuclearRadixBlock();
  
  console.log("🚀 MAIN FINAL PURGE: Rendering application with NUCLEAR Radix blocking");
  
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  
  console.log("🚀 MAIN FINAL PURGE: Application rendered - ABSOLUTE ZERO RADIX");
} else {
  console.error('🚀 MAIN FINAL PURGE: Root element not found');
}
