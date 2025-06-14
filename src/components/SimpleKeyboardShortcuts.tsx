
import { useEffect } from 'react';

const SimpleKeyboardShortcuts: React.FC = () => {
  console.log('SimpleKeyboardShortcuts: Component carregado');
  
  useEffect(() => {
    console.log('SimpleKeyboardShortcuts: useEffect executado, adicionando event listener');
    
    const handleKeyDown = (event: KeyboardEvent) => {
      // CTRL + SHIFT + A para abrir painel admin
      if (event.ctrlKey && event.shiftKey && event.key === 'A') {
        event.preventDefault();
        console.log('SimpleKeyboardShortcuts: Admin shortcut detectado');
        // For now, just log - we'll add functionality later
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      console.log('SimpleKeyboardShortcuts: Removendo event listener');
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return null;
};

export default SimpleKeyboardShortcuts;
