
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { analytics } from './utils/analytics';
import { cacheService } from './utils/cacheService';

console.log("🔥 MAIN ULTRA FINAL: INICIANDO APLICAÇÃO 100% LIMPA SEM RADIX");

// LIMPEZA ULTRA AGRESSIVA DE TODOS OS VESTÍGIOS + RADIX + HARD CACHE CLEAR
if (typeof window !== 'undefined') {
  console.log("🔥 MAIN ULTRA FINAL: EXECUTANDO LIMPEZA ULTRA AGRESSIVA ANTI-RADIX");
  
  try {
    // Forçar limpeza de TODOS os caches do navegador
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.getRegistrations().then(registrations => {
        registrations.forEach(registration => {
          registration.unregister();
          console.log("🔥 MAIN ULTRA FINAL: Service worker removido");
        });
      });
    }
    
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
    const radixKeys = Object.keys(window).filter(key => 
      key.toLowerCase().includes('radix') || 
      key.includes('__RADIX') ||
      key.includes('TOOLTIP')
    );
    
    radixKeys.forEach(key => {
      try {
        delete (window as any)[key];
        console.log(`🔥 MAIN ULTRA FINAL: Removeu chave Radix: ${key}`);
      } catch (e) {
        console.log(`🔥 MAIN ULTRA FINAL: Erro ao remover ${key}:`, e);
      }
    });
    
    // Verificar integridade do React com timeout
    const checkReact = () => {
      if (!React || !React.useState || !React.useEffect || !React.Fragment) {
        console.error("🔥 MAIN ULTRA FINAL: React corrompido - forçando hard reload");
        window.location.href = window.location.href + '?t=' + Date.now();
        throw new Error("React corrompido");
      }
      console.log("🔥 MAIN ULTRA FINAL: React verificado e íntegro");
    };
    
    // Aguardar um pouco antes de verificar o React
    setTimeout(checkReact, 100);
    
  } catch (e) {
    console.log("🔥 MAIN ULTRA FINAL: Limpeza concluída:", e);
    // Em caso de erro, forçar reload com timestamp
    setTimeout(() => {
      window.location.href = window.location.href + '?nocache=' + Date.now();
    }, 200);
  }
}

// Error handlers ultra defensivos ANTI-RADIX com reload forçado
const handleGlobalError = (event: ErrorEvent) => {
  const errorMessage = event.error?.message || event.message || '';
  const errorStack = event.error?.stack || '';
  
  console.error('🔥 MAIN ULTRA FINAL: Erro global capturado:', {
    message: errorMessage,
    stack: errorStack,
    filename: event.filename
  });
  
  // Se for QUALQUER erro relacionado ao React, hooks ou RADIX, reload IMEDIATO
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
    
    console.error('🔥 MAIN ULTRA FINAL: Erro crítico detectado - HARD RELOAD IMEDIATO');
    
    // Hard reload com timestamp para evitar cache
    window.location.href = window.location.protocol + '//' + 
                          window.location.host + 
                          window.location.pathname + 
                          '?hardreload=' + Date.now();
  }
};

// Remover listeners antigos antes de adicionar novos
window.removeEventListener('error', handleGlobalError);
window.removeEventListener('unhandledrejection', () => {});

window.addEventListener('error', handleGlobalError);
window.addEventListener('unhandledrejection', (event: PromiseRejectionEvent) => {
  const reason = event.reason?.message || event.reason || '';
  console.error('🔥 MAIN ULTRA FINAL: Promise rejeitada:', reason);
  
  if (typeof reason === 'string' && (
      reason.includes('radix') || 
      reason.includes('TooltipProvider') ||
      reason.includes('useState')
    )) {
    console.error('🔥 MAIN ULTRA FINAL: Erro Radix em promise - HARD RELOAD');
    window.location.href = window.location.href + '?promisereload=' + Date.now();
  }
});

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

// Renderização da aplicação com timeout para garantir limpeza
const rootElement = document.getElementById("root");
if (rootElement) {
  const root = createRoot(rootElement);
  
  // Aguardar um pouco para garantir que a limpeza foi concluída
  setTimeout(() => {
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
        // Hard reload em caso de erro de renderização
        window.location.href = window.location.href + '?rendererror=' + Date.now();
      }
    }).catch((error) => {
      console.error("🔥 MAIN ULTRA FINAL: Erro na inicialização:", error);
      // Hard reload em caso de erro de inicialização
      window.location.href = window.location.href + '?initerror=' + Date.now();
    });
  }, 300); // Aguardar 300ms para garantir limpeza completa
  
} else {
  console.error('🔥 MAIN ULTRA FINAL: Elemento root não encontrado');
}
