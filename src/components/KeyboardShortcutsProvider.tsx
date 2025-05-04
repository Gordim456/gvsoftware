
import { useEffect } from 'react';
import { toast } from 'sonner';

const KeyboardShortcutsProvider = () => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Podemos implementar atalhos úteis para o usuário aqui, como:
      // - Ir para a página de contato
      // - Acessar o menu principal
      // - Ativar o modo de alto contraste
      
      // Mantemos o console log para debugging
      console.log("KeyboardShortcutsProvider está ativo");
    };

    window.addEventListener('keydown', handleKeyDown);

    // Para debugging
    console.log("KeyboardShortcutsProvider montado, listener de teclado ativo");

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      console.log("KeyboardShortcutsProvider desmontado, listener de teclado removido");
    };
  }, []);

  return null;
};

export default KeyboardShortcutsProvider;
