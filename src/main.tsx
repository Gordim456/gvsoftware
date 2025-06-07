
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import ErrorBoundary from './components/ErrorBoundary';

console.log("🔥 MAIN: Inicializando app COMPLETAMENTE LIMPO - ZERO Radix UI");

// Error handling melhorado
window.addEventListener('error', (event) => {
  console.error('🔥 ERRO GLOBAL:', {
    message: event.error?.message,
    stack: event.error?.stack,
    filename: event.filename,
    lineno: event.lineno,
    colno: event.colno,
    type: 'runtime_error'
  });
  
  if (event.error?.message?.includes('Cannot read properties of null')) {
    console.error('🔥 ERRO useState DETECTADO - Radix UI ainda presente');
  }
  
  if (event.error?.message?.includes('TooltipProvider')) {
    console.error('🔥 ERRO TOOLTIP PROVIDER - Radix UI ainda presente');
  }
});

window.addEventListener('unhandledrejection', (event) => {
  console.error('🔥 PROMISE REJEITADA:', event.reason);
});

const rootElement = document.getElementById("root");
if (rootElement) {
  console.log("🔥 MAIN: Elemento root encontrado, iniciando React app LIMPO");
  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </React.StrictMode>
  );
} else {
  console.error('🔥 MAIN: CRÍTICO - Elemento root não encontrado');
}
