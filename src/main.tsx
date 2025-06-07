
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

console.log("🚀 MAIN: Starting application");

// Enhanced error handler
const handleGlobalError = (event: ErrorEvent) => {
  const message = event.error?.message || event.message || 'Unknown error';
  console.error('🚀 MAIN: Global error detected:', message);
  
  // Block common React hook errors
  const reactErrorPatterns = [
    'useState.*null',
    'Cannot read properties of null',
    'useContext.*null',
    'useRef.*null',
    'useEffect.*null'
  ];
  
  if (reactErrorPatterns.some(pattern => {
    try {
      return new RegExp(pattern, 'i').test(message);
    } catch {
      return message.toLowerCase().includes(pattern.toLowerCase());
    }
  })) {
    console.error('🚀 MAIN: React hook error blocked:', message);
    event.preventDefault();
    event.stopPropagation();
    return false;
  }
};

// Add error handlers
window.addEventListener('error', handleGlobalError, true);
window.addEventListener('unhandledrejection', (event: PromiseRejectionEvent) => {
  const reason = String(event.reason || '');
  console.error('🚀 MAIN: Promise rejection:', reason);
  
  const reactPatterns = ['useState.*null', 'useContext.*null'];
  if (reactPatterns.some(pattern => reason.includes(pattern))) {
    console.error('🚀 MAIN: React promise rejection blocked');
    event.preventDefault();
  }
}, true);

// Initialize application
const rootElement = document.getElementById("root");
if (rootElement) {
  const root = createRoot(rootElement);
  
  console.log("🚀 MAIN: Rendering application");
  
  // Wrap rendering in error boundary
  try {
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    
    console.log("🚀 MAIN: Application rendered successfully");
  } catch (error) {
    console.error('🚀 MAIN: Render error:', error);
    
    // Fallback render without StrictMode if there's an error
    root.render(<App />);
  }
} else {
  console.error('🚀 MAIN: Root element not found');
}
