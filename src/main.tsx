
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';

console.log('🚀 MAIN: Starting application...');

try {
  const rootElement = document.getElementById('root');
  console.log('🔍 MAIN: Root element found:', !!rootElement);
  
  if (!rootElement) {
    console.error('❌ MAIN: Root element not found!');
    throw new Error('Root element not found');
  }

  const root = createRoot(rootElement);
  console.log('✅ MAIN: Root created successfully');

  root.render(
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>,
  );
  
  console.log('✅ MAIN: App rendered successfully');
} catch (error) {
  console.error('❌ MAIN: Fatal error during app initialization:', error);
  console.error('Stack trace:', error instanceof Error ? error.stack : 'No stack trace');
}

// Global error handler
window.addEventListener('error', (event) => {
  console.error('🔥 GLOBAL ERROR:', {
    message: event.message,
    filename: event.filename,
    lineno: event.lineno,
    colno: event.colno,
    error: event.error,
    stack: event.error?.stack
  });
});

window.addEventListener('unhandledrejection', (event) => {
  console.error('🔥 UNHANDLED PROMISE REJECTION:', event.reason);
});
