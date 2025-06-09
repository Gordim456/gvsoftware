
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import './index.css'
import './App.css'
import ErrorBoundary from './components/ErrorBoundary'

console.log('🚀 MAIN: Iniciando aplicação - VERSÃO LIMPA SEM RADIX');

const container = document.getElementById('root');
if (!container) {
  throw new Error('Failed to find the root element');
}

const root = ReactDOM.createRoot(container);

// Captura de erros globais
window.addEventListener('error', (event) => {
  console.error('🔥 MAIN: Erro global capturado:', event.error);
});

window.addEventListener('unhandledrejection', (event) => {
  console.error('🔥 MAIN: Promise rejeitada:', event.reason);
});

root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>
);

console.log('✅ MAIN: Aplicação renderizada com sucesso - SEM DEPENDÊNCIAS PROBLEMÁTICAS');
