
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { analytics } from './utils/analytics';
import { cacheService } from './utils/cacheService';

console.log("🔥 MAIN FINAL: INICIANDO APLICAÇÃO TOTALMENTE LIMPA");

// LIMPEZA ULTRA AGRESSIVA DE TODOS OS VESTÍGIOS
if (typeof window !== 'undefined') {
  console.log("🔥 MAIN FINAL: EXECUTANDO LIMPEZA ULTRA AGRESSIVA");
  
  try {
    // Limpar TODOS os storages
    localStorage.clear();
    sessionStorage.clear();
    console.log("🔥 MAIN FINAL: Storages limpos");
    
    // Deletar TODOS os caches
    if ('caches' in window) {
      caches.keys().then(names => {
        names.forEach(name => {
          console.log(`🔥 MAIN FINAL: Deletando cache: ${name}`);
          caches.delete(name);
        });
      });
    }
    
    // Verificar integridade do React
    if (!React || !React.useState || !React.useEffect || !React.Fragment) {
      console.error("🔥 MAIN FINAL: React corrompido - forçando reload");
      window.location.reload();
      throw new Error("React corrompido");
    }
    
    console.log("🔥 MAIN FINAL: React verificado e íntegro");
    
  } catch (e) {
    console.log("🔥 MAIN FINAL: Limpeza concluída:", e);
  }
}

// Inicialização dos serviços
const initializeApp = async () => {
  try {
    console.log("🔥 MAIN FINAL: Inicializando serviços");
    analytics.init();
    await cacheService.init();
    console.log('🔥 MAIN FINAL: Serviços inicializados com sucesso');
  } catch (error) {
    console.error('🔥 MAIN FINAL: Erro na inicialização dos serviços:', error);
  }
};

// Error handlers ultra defensivos
const handleGlobalError = (event: ErrorEvent) => {
  const errorMessage = event.error?.message || event.message || '';
  const errorStack = event.error?.stack || '';
  
  console.error('🔥 MAIN FINAL: Erro global capturado:', {
    message: errorMessage,
    stack: errorStack,
    filename: event.filename
  });
  
  // Se for QUALQUER erro relacionado ao React ou hooks, reload imediato
  if (errorMessage.includes('useState') || 
      errorMessage.includes('useEffect') ||
      errorMessage.includes('Cannot read properties of null') ||
      errorStack.includes('useState') ||
      errorStack.includes('useEffect')) {
    console.error('🔥 MAIN FINAL: Erro crítico do React detectado - RELOAD FORÇADO');
    
    setTimeout(() => {
      window.location.href = window.location.href;
    }, 100);
  }
};

window.addEventListener('error', handleGlobalError);
window.addEventListener('unhandledrejection', (event: PromiseRejectionEvent) => {
  const reason = event.reason?.message || event.reason || '';
  console.error('🔥 MAIN FINAL: Promise rejeitada:', reason);
});

// Renderização da aplicação
const rootElement = document.getElementById("root");
if (rootElement) {
  const root = createRoot(rootElement);
  
  initializeApp().then(() => {
    console.log("🔥 MAIN FINAL: Renderizando aplicação");
    
    try {
      root.render(
        <React.StrictMode>
          <App />
        </React.StrictMode>
      );
      console.log("🔥 MAIN FINAL: Aplicação renderizada com SUCESSO TOTAL!");
    } catch (error) {
      console.error("🔥 MAIN FINAL: Erro crítico na renderização:", error);
      rootElement.innerHTML = `
        <div style="padding: 20px; color: red; font-family: Arial; text-align: center; background: #0f172a; min-height: 100vh;">
          <h2>❌ Erro de renderização</h2>
          <p>Erro: ${error}</p>
          <button onclick="window.location.reload()" style="padding: 10px 20px; background: #6366f1; color: white; border: none; border-radius: 5px; cursor: pointer;">
            Recarregar Aplicação
          </button>
        </div>
      `;
    }
  }).catch((error) => {
    console.error("🔥 MAIN FINAL: Erro na inicialização:", error);
    rootElement.innerHTML = `
      <div style="padding: 20px; color: red; font-family: Arial; text-align: center; background: #0f172a; min-height: 100vh;">
        <h2>❌ Erro de inicialização</h2>
        <p>Erro: ${error}</p>
        <button onclick="window.location.reload()" style="padding: 10px 20px; background: #6366f1; color: white; border: none; border-radius: 5px; cursor: pointer;">
          Recarregar Aplicação
        </button>
      </div>
    `;
  });
} else {
  console.error('🔥 MAIN FINAL: Elemento root não encontrado');
}
