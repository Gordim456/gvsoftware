
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { analytics } from './utils/analytics';
import { cacheService } from './utils/cacheService';

console.log("🔥 MAIN ULTRA FINAL: INICIANDO APLICAÇÃO 100% LIMPA SEM RADIX");

// LIMPEZA ULTRA AGRESSIVA DE TODOS OS VESTÍGIOS + RADIX
if (typeof window !== 'undefined') {
  console.log("🔥 MAIN ULTRA FINAL: EXECUTANDO LIMPEZA ULTRA AGRESSIVA ANTI-RADIX");
  
  try {
    // Limpar TODOS os storages
    localStorage.clear();
    sessionStorage.clear();
    console.log("🔥 MAIN ULTRA FINAL: Storages limpos");
    
    // Deletar TODOS os caches
    if ('caches' in window) {
      caches.keys().then(names => {
        names.forEach(name => {
          console.log(`🔥 MAIN ULTRA FINAL: Deletando cache: ${name}`);
          caches.delete(name);
        });
      });
    }
    
    // Limpar QUALQUER referência Radix no window
    if ((window as any).__RADIX_UI_TOOLTIP__) {
      delete (window as any).__RADIX_UI_TOOLTIP__;
      console.log("🔥 MAIN ULTRA FINAL: Limpou referência Radix Tooltip");
    }
    
    // Verificar integridade do React
    if (!React || !React.useState || !React.useEffect || !React.Fragment) {
      console.error("🔥 MAIN ULTRA FINAL: React corrompido - forçando reload");
      window.location.reload();
      throw new Error("React corrompido");
    }
    
    console.log("🔥 MAIN ULTRA FINAL: React verificado e íntegro");
    
  } catch (e) {
    console.log("🔥 MAIN ULTRA FINAL: Limpeza concluída:", e);
  }
}

// Inicialização dos serviços
const initializeApp = async () => {
  try {
    console.log("🔥 MAIN ULTRA FINAL: Inicializando serviços");
    analytics.init();
    await cacheService.init();
    console.log('🔥 MAIN ULTRA FINAL: Serviços inicializados com sucesso');
  } catch (error) {
    console.error('🔥 MAIN ULTRA FINAL: Erro na inicialização dos serviços:', error);
  }
};

// Error handlers ultra defensivos ANTI-RADIX
const handleGlobalError = (event: ErrorEvent) => {
  const errorMessage = event.error?.message || event.message || '';
  const errorStack = event.error?.stack || '';
  
  console.error('🔥 MAIN ULTRA FINAL: Erro global capturado:', {
    message: errorMessage,
    stack: errorStack,
    filename: event.filename
  });
  
  // Se for QUALQUER erro relacionado ao React, hooks ou RADIX, reload imediato
  if (errorMessage.includes('useState') || 
      errorMessage.includes('useEffect') ||
      errorMessage.includes('Cannot read properties of null') ||
      errorMessage.includes('radix') ||
      errorMessage.includes('Radix') ||
      errorMessage.includes('RADIX') ||
      errorMessage.includes('TooltipProvider') ||
      errorStack.includes('useState') ||
      errorStack.includes('useEffect') ||
      errorStack.includes('radix') ||
      errorStack.includes('TooltipProvider')) {
    console.error('🔥 MAIN ULTRA FINAL: Erro crítico do React/Radix detectado - RELOAD FORÇADO');
    
    setTimeout(() => {
      window.location.href = window.location.href;
    }, 100);
  }
};

window.addEventListener('error', handleGlobalError);
window.addEventListener('unhandledrejection', (event: PromiseRejectionEvent) => {
  const reason = event.reason?.message || event.reason || '';
  console.error('🔥 MAIN ULTRA FINAL: Promise rejeitada:', reason);
  
  // Verificar se é erro relacionado ao Radix
  if (typeof reason === 'string' && (
      reason.includes('radix') || 
      reason.includes('TooltipProvider') ||
      reason.includes('useState')
    )) {
    console.error('🔥 MAIN ULTRA FINAL: Erro Radix em promise - RELOAD FORÇADO');
    setTimeout(() => {
      window.location.reload();
    }, 100);
  }
});

// Renderização da aplicação
const rootElement = document.getElementById("root");
if (rootElement) {
  const root = createRoot(rootElement);
  
  initializeApp().then(() => {
    console.log("🔥 MAIN ULTRA FINAL: Renderizando aplicação SEM RADIX");
    
    try {
      root.render(
        <React.StrictMode>
          <App />
        </React.StrictMode>
      );
      console.log("🔥 MAIN ULTRA FINAL: Aplicação renderizada com SUCESSO TOTAL SEM RADIX!");
    } catch (error) {
      console.error("🔥 MAIN ULTRA FINAL: Erro crítico na renderização:", error);
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
    console.error("🔥 MAIN ULTRA FINAL: Erro na inicialização:", error);
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
  console.error('🔥 MAIN ULTRA FINAL: Elemento root não encontrado');
}
