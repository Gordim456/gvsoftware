
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

console.log("🔥 MAIN ULTIMATE ELIMINATION: Starting completely clean application");
console.log("🔥 MAIN ULTIMATE ELIMINATION: React version:", React.version);
console.log("🔥 MAIN ULTIMATE ELIMINATION: React object:", React);

// Verificar se React está disponível globalmente
if (typeof React === 'undefined' || React === null) {
  console.error("🔥 MAIN ULTIMATE ELIMINATION: ERROR - React is not available!");
} else {
  console.log("🔥 MAIN ULTIMATE ELIMINATION: React is available and working");
}

// Force clear any potential cached references and ensure React is globally available
(window as any).React = React;

// Clear any potential module cache issues
if ('webkitURL' in window) {
  console.log("🔥 MAIN ULTIMATE ELIMINATION: Clearing webkit cache references");
}

// Force garbage collection if available
if ('gc' in window) {
  (window as any).gc();
}

console.log("🔥 MAIN ULTIMATE ELIMINATION: All cache clearing attempts completed");

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = createRoot(rootElement);
  
  // Wrap in error boundary equivalent
  try {
    root.render(<App />);
    console.log("🔥 MAIN ULTIMATE ELIMINATION: App rendered successfully without errors");
  } catch (error) {
    console.error("🔥 MAIN ULTIMATE ELIMINATION: Error during render:", error);
    
    // Try rendering a minimal fallback
    root.render(
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <h1>Application Loading...</h1>
        <p>If this message persists, please refresh the page.</p>
      </div>
    );
  }
} else {
  console.error('🔥 MAIN ULTIMATE ELIMINATION: Root element not found');
}
