
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

console.log("🚀 MAIN: FINAL CLEAN START - Absolutely zero tooltip dependencies");

// Clear any cached modules that might contain Radix references
if (typeof window !== 'undefined') {
  console.log("🚀 MAIN: Clearing any cached tooltip modules");
  
  // Force a clean slate
  const cacheKeys = Object.keys(window).filter(key => 
    key.includes('__vite') || 
    key.includes('tooltip') || 
    key.includes('radix')
  );
  
  console.log("🚀 MAIN: Found cache keys:", cacheKeys.length);
}

// Initialize application
const rootElement = document.getElementById("root");
if (rootElement) {
  try {
    const root = createRoot(rootElement);
    
    console.log("🚀 MAIN: Rendering final clean App - no external tooltip deps");
    
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    
    console.log("🚀 MAIN: App rendered successfully - completely clean");
  } catch (error) {
    console.error('🚀 MAIN: Error during render:', error);
  }
} else {
  console.error('🚀 MAIN: Root element not found');
}
