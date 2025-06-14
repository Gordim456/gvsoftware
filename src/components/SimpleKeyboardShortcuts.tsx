
import { useEffect } from 'react';

const SimpleKeyboardShortcuts: React.FC = () => {
  console.log('SimpleKeyboardShortcuts: Component carregado');
  console.log('SimpleKeyboardShortcuts: React hooks disponíveis:', {
    useEffect: typeof useEffect
  });
  
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

    try {
      window.addEventListener('keydown', handleKeyDown);
      console.log('SimpleKeyboardShortcuts: Event listener adicionado com sucesso');
    } catch (error) {
      console.error('SimpleKeyboardShortcuts: Erro ao adicionar event listener:', error);
    }

    return () => {
      console.log('SimpleKeyboardShortcuts: Removendo event listener');
      try {
        window.removeEventListener('keydown', handleKeyDown);
        console.log('SimpleKeyboardShortcuts: Event listener removido com sucesso');
      } catch (error) {
        console.error('SimpleKeyboardShortcuts: Erro ao remover event listener:', error);
      }
    };
  }, []);

  return null;
};

export default SimpleKeyboardShortcuts;
