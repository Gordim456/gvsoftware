
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import ErrorBoundary from './components/ErrorBoundary';

console.log("🔥 MAIN: Starting app with complete error protection and debugging");

// Enhanced error handling to catch ALL errors
window.addEventListener('error', (event) => {
  console.error('🔥 GLOBAL ERROR CAUGHT:', {
    message: event.error?.message,
    stack: event.error?.stack,
    filename: event.filename,
    lineno: event.lineno,
    colno: event.colno,
    type: 'runtime_error'
  });
  
  // Check if it's the specific useState error we're tracking
  if (event.error?.message?.includes('Cannot read properties of null')) {
    console.error('🔥 SPECIFIC useState ERROR DETECTED - This should be eliminated now');
  }
});

window.addEventListener('unhandledrejection', (event) => {
  console.error('🔥 UNHANDLED PROMISE REJECTION:', event.reason);
});

// Additional React error boundary
const rootElement = document.getElementById("root");
if (rootElement) {
  console.log("🔥 MAIN: Root element found, starting React app");
  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </React.StrictMode>
  );
} else {
  console.error('🔥 MAIN: CRITICAL - Root element not found');
}
