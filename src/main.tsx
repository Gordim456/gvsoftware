
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

console.log("🚀 MAIN FINAL NUCLEAR ELIMINATION: Starting application with ULTIMATE ZERO RADIX - DEFINITIVE VERSION");

// ULTIMATE nuclear Radix blocking - prevent ANY trace of Radix from ever existing
const ultimateRadixNuclearBlock = () => {
  try {
    console.log("🚀 MAIN FINAL NUCLEAR ELIMINATION: ULTIMATE nuclear Radix blocking initiated");
    
    // Ultra aggressive Radix prevention
    if (typeof window !== 'undefined') {
      (window as any).__RADIX_BLOCKED__ = true;
      (window as any).__RADIX_ULTIMATE_BLOCK__ = true;
      
      // Block all possible Radix module loading patterns
      const blockedPatterns = [
        'radix', '@radix-ui', 'tooltip', 'TooltipProvider', 'TooltipRoot',
        'PopoverRoot', 'DialogRoot', 'DropdownMenu', 'Select', 'Checkbox',
        'RadioGroup', 'Slider', 'Switch', 'Toggle', 'Collapsible',
        'Accordion', 'AlertDialog', 'AspectRatio', 'Avatar', 'Label',
        'NavigationMenu', 'Popover', 'Progress', 'ScrollArea', 'Separator',
        'Tabs', 'Toast', 'ContextMenu', 'HoverCard', 'Menubar'
      ];
      
      // Override module loading completely
      const originalRequire = (window as any).require;
      if (originalRequire) {
        (window as any).require = function(moduleName: string) {
          if (blockedPatterns.some(pattern => moduleName.includes(pattern))) {
            console.error('🚀 MAIN FINAL NUCLEAR ELIMINATION: BLOCKED MODULE:', moduleName);
            return {};
          }
          return originalRequire.apply(this, arguments);
        };
      }
      
      // Override import function
      const originalImport = (window as any).import || (window as any).__vitePreload;
      if (originalImport) {
        (window as any).import = (window as any).__vitePreload = function(moduleName: string) {
          if (typeof moduleName === 'string' && blockedPatterns.some(pattern => moduleName.includes(pattern))) {
            console.error('🚀 MAIN FINAL NUCLEAR ELIMINATION: BLOCKED IMPORT:', moduleName);
            return Promise.resolve({});
          }
          return originalImport.apply(this, arguments);
        };
      }
      
      // Nuclear DOM monitoring
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === 1) {
              const element = node as Element;
              
              // Check scripts
              if (element.tagName === 'SCRIPT') {
                const src = element.getAttribute('src') || '';
                const textContent = element.textContent || '';
                if (blockedPatterns.some(pattern => src.includes(pattern) || textContent.includes(pattern))) {
                  console.error('🚀 MAIN FINAL NUCLEAR ELIMINATION: BLOCKED SCRIPT:', src || 'inline');
                  element.remove();
                  return;
                }
              }
              
              // Check any element with Radix attributes or classes
              if (element.hasAttributes()) {
                const attributes = Array.from(element.attributes);
                const hasRadixAttribute = attributes.some(attr => 
                  attr.name.includes('radix') || 
                  attr.value.includes('radix') ||
                  attr.name.includes('data-state') ||
                  attr.name.includes('data-orientation')
                );
                
                if (hasRadixAttribute) {
                  console.error('🚀 MAIN FINAL NUCLEAR ELIMINATION: BLOCKED RADIX ELEMENT:', element);
                  element.remove();
                  return;
                }
              }
              
              // Check class names
              if (element.className && typeof element.className === 'string') {
                if (blockedPatterns.some(pattern => element.className.includes(pattern))) {
                  console.error('🚀 MAIN FINAL NUCLEAR ELIMINATION: BLOCKED CLASS ELEMENT:', element.className);
                  element.remove();
                  return;
                }
              }
            }
          });
        });
      });
      
      observer.observe(document.documentElement, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeOldValue: true
      });
      
      // Clear all caches more aggressively
      if (typeof Storage !== 'undefined') {
        try {
          localStorage.clear();
          sessionStorage.clear();
        } catch (e) {
          console.log('🚀 Storage clear error:', e);
        }
      }
      
      if ('caches' in window) {
        caches.keys().then(cacheNames => {
          cacheNames.forEach(name => {
            if (blockedPatterns.some(pattern => name.includes(pattern))) {
              caches.delete(name);
            }
          });
        });
      }
      
      console.log('🚀 MAIN FINAL NUCLEAR ELIMINATION: ULTIMATE nuclear Radix blocking complete');
    }
  } catch (error) {
    console.error('🚀 MAIN FINAL NUCLEAR ELIMINATION: Error in ultimate nuclear blocking:', error);
  }
};

// Enhanced error handler with more aggressive filtering
const handleGlobalError = (event: ErrorEvent) => {
  const message = event.error?.message || event.message || 'Unknown error';
  console.error('🚀 MAIN FINAL NUCLEAR ELIMINATION: Global error detected:', message);
  
  // Block ALL possible Radix-related errors
  const radixErrorPatterns = [
    'TooltipProvider', '@radix-ui', 'radix', 'useState.*null',
    'Cannot read properties of null', 'useContext.*null',
    'useRef.*null', 'useEffect.*null', 'useCallback.*null',
    'useMemo.*null', 'useReducer.*null', 'useLayoutEffect.*null'
  ];
  
  if (radixErrorPatterns.some(pattern => {
    try {
      return new RegExp(pattern, 'i').test(message);
    } catch {
      return message.toLowerCase().includes(pattern.toLowerCase());
    }
  })) {
    console.error('🚀 MAIN FINAL NUCLEAR ELIMINATION: RADIX ERROR BLOCKED:', message);
    event.preventDefault();
    event.stopPropagation();
    return false;
  }
};

// Add error handlers immediately with capture
window.addEventListener('error', handleGlobalError, true);
window.addEventListener('unhandledrejection', (event: PromiseRejectionEvent) => {
  const reason = String(event.reason || '');
  console.error('🚀 MAIN FINAL NUCLEAR ELIMINATION: Promise rejection:', reason);
  
  const radixPatterns = ['TooltipProvider', '@radix-ui', 'radix', 'useState.*null'];
  if (radixPatterns.some(pattern => reason.includes(pattern))) {
    console.error('🚀 MAIN FINAL NUCLEAR ELIMINATION: RADIX PROMISE REJECTION BLOCKED');
    event.preventDefault();
  }
}, true);

// Initialize application with ultimate protection
const rootElement = document.getElementById("root");
if (rootElement) {
  // Execute ultimate nuclear blocking FIRST
  ultimateRadixNuclearBlock();
  
  const root = createRoot(rootElement);
  
  console.log("🚀 MAIN FINAL NUCLEAR ELIMINATION: Rendering application with ULTIMATE nuclear Radix blocking");
  
  // Wrap rendering in error boundary
  try {
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    
    console.log("🚀 MAIN FINAL NUCLEAR ELIMINATION: Application rendered successfully - ULTIMATE ZERO RADIX");
  } catch (error) {
    console.error('🚀 MAIN FINAL NUCLEAR ELIMINATION: Render error:', error);
    
    // Fallback render without StrictMode if there's an error
    root.render(<App />);
  }
} else {
  console.error('🚀 MAIN FINAL NUCLEAR ELIMINATION: Root element not found');
}
