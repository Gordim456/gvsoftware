
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

console.log("🚀 MAIN: ABSOLUTELY CLEAN START - Zero Radix UI tooltip dependencies anywhere");

// Debug check before rendering
console.log("🚀 MAIN: Pre-render check - ensuring no Radix contamination");

// Initialize application
const rootElement = document.getElementById("root");
if (rootElement) {
  try {
    const root = createRoot(rootElement);
    
    console.log("🚀 MAIN: Rendering completely clean App component");
    
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    
    console.log("🚀 MAIN: App rendered successfully - no external tooltip dependencies");
  } catch (error) {
    console.error('🚀 MAIN: Error during render:', error);
  }
} else {
  console.error('🚀 MAIN: Root element not found');
}
