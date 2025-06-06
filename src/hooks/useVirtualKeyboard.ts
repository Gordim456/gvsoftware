
import { useEffect, useState } from 'react';

export const useVirtualKeyboard = () => {
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);

  useEffect(() => {
    const initialHeight = window.innerHeight;
    
    const handleResize = () => {
      const currentHeight = window.innerHeight;
      const heightDifference = initialHeight - currentHeight;
      
      // Se a altura diminuiu significativamente, provavelmente o teclado está aberto
      if (heightDifference > 150) {
        setIsKeyboardOpen(true);
        setViewportHeight(currentHeight);
        
        // Adicionar classe para ajustar layout
        document.body.classList.add('keyboard-open');
        
        // Ajustar viewport para dispositivos iOS
        if (/iPhone|iPad|iPod/.test(navigator.userAgent)) {
          document.body.style.height = `${currentHeight}px`;
        }
      } else {
        setIsKeyboardOpen(false);
        setViewportHeight(initialHeight);
        
        // Remover classe
        document.body.classList.remove('keyboard-open');
        
        // Resetar altura para iOS
        if (/iPhone|iPad|iPod/.test(navigator.userAgent)) {
          document.body.style.height = 'auto';
        }
      }
    };

    // Listener para mudanças de orientação
    const handleOrientationChange = () => {
      setTimeout(() => {
        setViewportHeight(window.innerHeight);
      }, 500);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleOrientationChange);

    // Listener para foco em inputs (iOS Safari) - corrigindo o tipo
    const handleFocusIn = (e: FocusEvent) => {
      const target = e.target;
      if (target && (target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement)) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 300);
      }
    };

    const handleFocusOut = () => {
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 100);
    };

    document.addEventListener('focusin', handleFocusIn);
    document.addEventListener('focusout', handleFocusOut);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleOrientationChange);
      document.removeEventListener('focusin', handleFocusIn);
      document.removeEventListener('focusout', handleFocusOut);
      document.body.classList.remove('keyboard-open');
      document.body.style.height = 'auto';
    };
  }, []);

  return {
    isKeyboardOpen,
    viewportHeight,
    keyboardHeight: window.innerHeight - viewportHeight
  };
};
