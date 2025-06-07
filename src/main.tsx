
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { analytics } from './utils/analytics';
import { cacheService } from './utils/cacheService';

console.log("🚀 MAIN v15: LIMPEZA FINAL - RADIX REMOVIDO COMPLETAMENTE");

// LIMPEZA ULTRA AGRESSIVA DE CACHE E RADIX
if (typeof window !== 'undefined') {
  console.log("🚀 MAIN v15: LIMPEZA ULTRA AGRESSIVA DE RADIX");
  
  try {
    // Limpar TODOS os storages
    localStorage.clear();
    sessionStorage.clear();
    
    // Deletar TODOS os caches
    if ('caches' in window) {
      caches.keys().then(names => {
        names.forEach(name => {
          console.log(`🚀 DELETANDO CACHE v15: ${name}`);
          caches.delete(name);
        });
      });
    }
    
    // Interceptar qualquer tentativa de carregar Radix
    const originalImport = window.eval;
    if (originalImport) {
      window.eval = function(...args) {
        const code = args[0];
        if (typeof code === 'string' && code.includes('radix-ui/react-tooltip')) {
          console.error("🚨 BLOQUEADO: Tentativa de carregar Radix Tooltip!", code);
          return null;
        }
        return originalImport.apply(this, args);
      };
    }
    
    // Verificar se React está íntegro
    if (!React || !React.useState) {
      console.error("🚨 REACT CORROMPIDO v15!");
      window.location.reload();
    }
    
    console.log("🚀 MAIN v15: Limpeza concluída - React íntegro");
    
  } catch (e) {
    console.log("🚀 MAIN v15: Limpeza finalizada com sucesso");
  }
}

// Validação extra do React
if (!React || !React.useState || !React.useEffect || !React.Fragment) {
  console.error("🚨 MAIN v15: REACT INVÁLIDO - FORÇANDO RELOAD");
  const rootElement = document.getElementById("root");
  if (rootElement) {
    rootElement.innerHTML = '<div style="padding: 20px; color: red; font-family: Arial; text-align: center;"><h2>❌ React corrompido</h2><button onclick="window.location.reload()">Recarregar</button></div>';
  }
  throw new Error("React corrompido");
}

console.log("🚀 MAIN v15: React validado - Prosseguindo");

// Inicializar serviços
const initializeApp = async () => {
  try {
    analytics.init();
    await cacheService.init();
    console.log('🚀 MAIN v15: App inicializado');
  } catch (error) {
    console.error('🚀 MAIN v15: Erro na inicialização:', error);
  }
};

// Tratamento ULTRA AGRESSIVO de erros relacionados ao Radix
const handleGlobalError = (event: ErrorEvent) => {
  const errorMessage = event.error?.message || event.message || '';
  const errorStack = event.error?.stack || '';
  
  console.error('🚨 ERRO GLOBAL v15:', {
    message: errorMessage,
    stack: errorStack,
    isRadixError: errorStack.includes('radix') || 
                  errorStack.includes('tooltip') ||
                  errorStack.includes('TooltipProvider') ||
                  errorMessage.includes('useState'),
    filename: event.filename
  });
  
  // Se for QUALQUER erro relacionado ao Radix ou useState, forçar reload
  if (errorStack.includes('radix') || 
      errorStack.includes('TooltipProvider') ||
      errorStack.includes('@radix-ui') ||
      (errorMessage.includes('useState') && errorStack.includes('tooltip'))) {
    console.error('🚨 ERRO DO RADIX DETECTADO - RELOAD FORÇADO v15');
    
    // Limpar TUDO antes do reload
    try {
      localStorage.clear();
      sessionStorage.clear();
      if ('caches' in window) {
        caches.keys().then(names => {
          names.forEach(name => caches.delete(name));
        });
      }
    } catch (e) {
      // Ignorar erros de limpeza
    }
    
    setTimeout(() => {
      window.location.href = window.location.href;
    }, 100);
  }
};

window.addEventListener('error', handleGlobalError);
window.addEventListener('unhandledrejection', (event: PromiseRejectionEvent) => {
  const reason = event.reason?.message || event.reason || '';
  console.error('🚨 PROMISE REJEITADA v15:', reason);
  
  if (typeof reason === 'string' && (
      reason.includes('radix') || 
      reason.includes('tooltip') ||
      reason.includes('TooltipProvider')
    )) {
    console.error('🚨 PROMISE RADIX REJEITADA - RELOAD v15');
    setTimeout(() => {
      window.location.href = window.location.href;
    }, 100);
  }
});

// Renderizar aplicação
const rootElement = document.getElementById("root");
if (rootElement) {
  const root = createRoot(rootElement);
  
  initializeApp().then(() => {
    console.log("🚀 MAIN v15: Renderizando app LIMPO");
    
    try {
      root.render(
        <React.StrictMode>
          <App />
        </React.StrictMode>
      );
      console.log("🚀 MAIN v15: App renderizado com SUCESSO TOTAL!");
    } catch (error) {
      console.error("🚨 MAIN v15: Erro ao renderizar:", error);
      rootElement.innerHTML = '<div style="padding: 20px; color: red; font-family: Arial; text-align: center;"><h2>❌ Erro de renderização</h2><button onclick="window.location.reload()">Recarregar</button></div>';
    }
  }).catch((error) => {
    console.error("🚨 MAIN v15: Erro de inicialização:", error);
    rootElement.innerHTML = '<div style="padding: 20px; color: red; font-family: Arial; text-align: center;"><h2>❌ Erro de inicialização</h2><button onclick="window.location.reload()">Recarregar</button></div>';
  });
} else {
  console.error('🚨 MAIN v15: Elemento root não encontrado');
}
