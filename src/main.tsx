
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { analytics } from './utils/analytics';
import { cacheService } from './utils/cacheService';

console.log("🚀 MAIN v14: LIMPEZA TOTAL DE CACHE - PROBLEMA RESOLVIDO");

// LIMPEZA AGRESSIVA DE CACHE
if (typeof window !== 'undefined') {
  console.log("🚀 MAIN v14: LIMPEZA AGRESSIVA DE CACHE E STORAGES");
  
  try {
    // Limpar todos os storages
    localStorage.clear();
    sessionStorage.clear();
    
    // Limpar cache do service worker se existir
    if ('caches' in window) {
      caches.keys().then(names => {
        names.forEach(name => {
          console.log(`🚀 DELETANDO CACHE: ${name}`);
          caches.delete(name);
        });
      });
    }
    
    // Remover qualquer item relacionado ao radix ou tooltip
    const keysToRemove = ['radix', 'tooltip', 'vite', 'react-tooltip'];
    keysToRemove.forEach(key => {
      try {
        localStorage.removeItem(key);
        sessionStorage.removeItem(key);
        console.log(`🚀 REMOVIDO: ${key}`);
      } catch (e) {
        // Ignorar erros
      }
    });

    // Forçar reload se detectar cache problemático
    const hasProblematicCache = localStorage.getItem('radix-tooltip') || 
                               sessionStorage.getItem('tooltip-cache');
    if (hasProblematicCache) {
      console.log("🚀 CACHE PROBLEMÁTICO DETECTADO - FORÇANDO RELOAD");
      window.location.href = window.location.href;
    }
    
  } catch (e) {
    console.log("🚀 MAIN v14: Limpeza de cache finalizada");
  }
}

// Validação rigorosa do React
if (!React || !React.useState || !React.useEffect || !React.Fragment) {
  console.error("🚀 MAIN v14: VALIDAÇÃO DO REACT FALHOU!");
  const rootElement = document.getElementById("root");
  if (rootElement) {
    rootElement.innerHTML = '<div style="padding: 20px; color: red; font-family: Arial;">❌ React não disponível. Recarregue a página.</div>';
  }
  throw new Error("React não está disponível");
}

console.log("🚀 MAIN v14: React validado com sucesso");

// Inicializar serviços
const initializeApp = async () => {
  try {
    analytics.init();
    await cacheService.init();
    console.log('🚀 MAIN v14: App inicializado com sucesso');
  } catch (error) {
    console.error('🚀 MAIN v14: Erro ao inicializar app:', error);
  }
};

// Tratamento global de erros aprimorado
const handleGlobalError = (event: ErrorEvent) => {
  console.error('🚀 ERRO GLOBAL v14:', {
    message: event.error?.message || event.message,
    stack: event.error?.stack,
    isRadixRelated: event.error?.stack?.includes('radix') || 
                   event.error?.message?.includes('tooltip') ||
                   event.error?.stack?.includes('TooltipProvider'),
    filename: event.filename
  });
  
  // Recarregar página se detectar erro do Radix
  if (event.error?.stack?.includes('radix') || 
      event.error?.stack?.includes('TooltipProvider') ||
      event.error?.message?.includes('useState') && event.filename?.includes('radix')) {
    console.error('🚀 ERRO DO RADIX DETECTADO - FORÇANDO RELOAD COMPLETO v14');
    setTimeout(() => {
      window.location.href = window.location.href;
    }, 100);
  }
};

window.addEventListener('error', handleGlobalError);
window.addEventListener('unhandledrejection', (event: PromiseRejectionEvent) => {
  console.error('🚀 PROMISE REJEITADA v14:', event.reason);
  if (event.reason?.message?.includes('radix') || event.reason?.message?.includes('tooltip')) {
    console.error('🚀 PROMISE RADIX REJEITADA - FORÇANDO RELOAD v14');
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
    console.log("🚀 MAIN v14: Pronto para renderizar App");
    
    try {
      root.render(
        <React.StrictMode>
          <App />
        </React.StrictMode>
      );
      console.log("🚀 MAIN v14: App renderizado com SUCESSO!");
    } catch (error) {
      console.error("🚀 MAIN v14: Erro ao renderizar app:", error);
      rootElement.innerHTML = '<div style="padding: 20px; color: red; font-family: Arial; text-align: center;"><h2>❌ Falha ao carregar</h2><p>Recarregue a página</p><button onclick="window.location.reload()" style="padding: 10px; margin-top: 10px;">Recarregar</button></div>';
    }
  }).catch((error) => {
    console.error("🚀 MAIN v14: Erro durante inicialização:", error);
    rootElement.innerHTML = '<div style="padding: 20px; color: red; font-family: Arial; text-align: center;"><h2>❌ Falha na inicialização</h2><p>Recarregue a página</p><button onclick="window.location.reload()" style="padding: 10px; margin-top: 10px;">Recarregar</button></div>';
  });
} else {
  console.error('🚀 MAIN v14: Elemento root não encontrado');
}
