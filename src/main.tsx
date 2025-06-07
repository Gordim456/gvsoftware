
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import ErrorBoundary from './components/ErrorBoundary';

console.log("🔥 MAIN FINAL: App iniciando SEM Radix UI - 100% limpo");

// Error handling aprimorado
window.addEventListener('error', (event) => {
  console.error('🔥 ERRO GLOBAL DETECTADO:', {
    message: event.error?.message,
    stack: event.error?.stack,
    filename: event.filename,
    lineno: event.lineno,
    colno: event.colno,
    type: 'runtime_error'
  });
  
  // Detectar erros específicos do Radix UI
  if (event.error?.message?.includes('Cannot read properties of null')) {
    console.error('🔥 ERRO useState CRÍTICO - Possível cache do Radix UI');
  }
  
  if (event.error?.message?.includes('TooltipProvider')) {
    console.error('🔥 ERRO TOOLTIP PROVIDER - Cache do Radix UI detectado');
  }
  
  if (event.error?.message?.includes('@radix-ui')) {
    console.error('🔥 ERRO RADIX UI - Dependência ainda presente no bundle');
  }
});

window.addEventListener('unhandledrejection', (event) => {
  console.error('🔥 PROMISE REJEITADA:', event.reason);
});

const rootElement = document.getElementById("root");
if (rootElement) {
  console.log("🔥 MAIN FINAL: Iniciando React app 100% limpo");
  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </React.StrictMode>
  );
} else {
  console.error('🔥 MAIN FINAL: ERRO CRÍTICO - Root não encontrado');
}
