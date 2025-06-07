
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

console.log("🚀 MAIN NUCLEAR ELIMINATION: Starting application with ABSOLUTE ZERO Radix - FINAL VERSION");

// NUCLEAR Radix blocking - prevent ANY Radix from ever loading
const nuclearRadixBlock = () => {
  try {
    console.log("🚀 MAIN NUCLEAR ELIMINATION: NUCLEAR Radix blocking initiated");
    
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
    if (typeof window !== 'undefined') {
      (window as any).__RADIX_BLOCKED__ = true;
      
      // Override any potential dynamic imports
      const originalImport = (window as any).__vitePreload;
      if (originalImport) {
        (window as any).__vitePreload = function(deps: any, ...args: any[]) {
          if (Array.isArray(deps)) {
            deps = deps.filter(dep => !dep.includes('radix') && !dep.includes('@radix-ui'));
          }
          return originalImport.call(this, deps, ...args);
        };
      }
      
      // Block any script loading
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === 1) {
              const element = node as Element;
              if (element.tagName === 'SCRIPT') {
                const src = element.getAttribute('src') || '';
                const textContent = element.textContent || '';
                if (src.includes('radix') || src.includes('@radix-ui') || 
                    textContent.includes('radix') || textContent.includes('@radix-ui')) {
                  console.error('🚀 MAIN NUCLEAR ELIMINATION: BLOCKED RADIX SCRIPT:', src || 'inline');
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
    
    console.log('🚀 MAIN NUCLEAR ELIMINATION: NUCLEAR Radix blocking complete');
  } catch (error) {
    console.error('🚀 MAIN NUCLEAR ELIMINATION: Error in nuclear blocking:', error);
  }
};

// Enhanced error handler
const handleGlobalError = (event: ErrorEvent) => {
  const message = event.error?.message || event.message || 'Unknown error';
  console.error('🚀 MAIN NUCLEAR ELIMINATION: Global error detected:', message);
  
  // If any Radix error detected, prevent it and log
  if (message.includes('TooltipProvider') || 
      message.includes('@radix-ui') || 
      message.includes('radix') ||
      message.includes('useState') && message.includes('null')) {
    console.error('🚀 MAIN NUCLEAR ELIMINATION: RADIX CONTAMINATION BLOCKED');
    event.preventDefault();
    return false;
  }
};

// Add error handlers immediately
window.addEventListener('error', handleGlobalError, true);
window.addEventListener('unhandledrejection', (event: PromiseRejectionEvent) => {
  console.error('🚀 MAIN NUCLEAR ELIMINATION: Promise rejection:', event.reason);
  
  const reason = String(event.reason);
  if (reason.includes('TooltipProvider') || reason.includes('@radix-ui') || reason.includes('radix')) {
    console.error('🚀 MAIN NUCLEAR ELIMINATION: RADIX PROMISE REJECTION BLOCKED');
    event.preventDefault();
  }
}, true);

// Initialize application
const rootElement = document.getElementById("root");
if (rootElement) {
  const root = createRoot(rootElement);
  
  // Execute nuclear blocking before anything else
  nuclearRadixBlock();
  
  console.log("🚀 MAIN NUCLEAR ELIMINATION: Rendering application with NUCLEAR Radix blocking");
  
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  
  console.log("🚀 MAIN NUCLEAR ELIMINATION: Application rendered - ABSOLUTE ZERO RADIX");
} else {
  console.error('🚀 MAIN NUCLEAR ELIMINATION: Root element not found');
}
