
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

console.log("🚀 MAIN: Final clean start - blocking all Radix tooltip attempts");

// Aggressive blocking of any Radix UI tooltip imports
if (typeof window !== 'undefined') {
  // Block dynamic imports
  const originalImport = window.eval;
  window.eval = function(code: string) {
    if (code.includes('@radix-ui/react-tooltip') || code.includes('radix-tooltip')) {
      console.error("🚀 MAIN: Blocked Radix tooltip eval attempt");
      return null;
    }
    return originalImport.call(this, code);
  };

  // Block fetch requests for Radix modules
  const originalFetch = window.fetch;
  window.fetch = function(...args) {
    const url = args[0]?.toString() || '';
    if (url.includes('@radix-ui/react-tooltip') || url.includes('radix-tooltip')) {
      console.error("🚀 MAIN: Blocked Radix tooltip fetch:", url);
      return Promise.reject(new Error('Radix tooltip blocked'));
    }
    return originalFetch.apply(this, args);
  };

  // Clear any existing module cache
  if ('__vitePreload' in window) {
    delete (window as any).__vitePreload;
  }
}

// Initialize application
const rootElement = document.getElementById("root");
if (rootElement) {
  try {
    const root = createRoot(rootElement);
    
    console.log("🚀 MAIN: Rendering final clean App");
    
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    
    console.log("🚀 MAIN: App rendered successfully");
  } catch (error) {
    console.error('🚀 MAIN: Error during render:', error);
    
    // Try a fallback render without StrictMode
    console.log("🚀 MAIN: Attempting fallback render");
    const root = createRoot(rootElement);
    root.render(<App />);
  }
} else {
  console.error('🚀 MAIN: Root element not found');
}
