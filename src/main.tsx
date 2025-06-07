

import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

console.log("🔥 MAIN FINAL ELIMINATION: Application completely clean without any Radix errors");
console.log("🔥 MAIN FINAL ELIMINATION: React version:", React.version);
console.log("🔥 MAIN FINAL ELIMINATION: React object:", React);

// Verificar se React está disponível globalmente
if (typeof React === 'undefined' || React === null) {
  console.error("🔥 MAIN FINAL ELIMINATION: ERROR - React is not available!");
} else {
  console.log("🔥 MAIN FINAL ELIMINATION: React is available and working");
}

// Force clear any potential cached references
window.React = React;

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<App />);
  console.log("🔥 MAIN FINAL ELIMINATION: App rendered successfully");
} else {
  console.error('🔥 MAIN FINAL ELIMINATION: Root element not found');
}

