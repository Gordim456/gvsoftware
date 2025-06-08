
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import ErrorBoundary from './components/ErrorBoundary';

console.log("🔥 MAIN ULTRA CLEAN: Starting with ZERO external dependencies");

const rootElement = document.getElementById("root");
if (rootElement) {
  console.log("🔥 MAIN ULTRA CLEAN: Rendering pure React app");
  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </React.StrictMode>
  );
} else {
  console.error('🔥 MAIN ULTRA CLEAN: ERROR - Root element not found');
}
