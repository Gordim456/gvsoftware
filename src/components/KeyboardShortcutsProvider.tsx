
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const KeyboardShortcutsProvider = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Detectar CTRL + SHIFT + A para acessar a página de administração
      if (event.ctrlKey && event.shiftKey && event.key === 'A') {
        event.preventDefault();
        navigate('/admin/messages');
        toast.info("Atalho de teclado ativado", {
          description: "CTRL + SHIFT + A: Acessando área administrativa"
        });
        console.log("Keyboard shortcut activated: CTRL + SHIFT + A");
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    // For debugging purposes
    console.log("KeyboardShortcutsProvider mounted, keyboard listener active");

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      console.log("KeyboardShortcutsProvider unmounted, keyboard listener removed");
    };
  }, [navigate]);

  return null;
};

export default KeyboardShortcutsProvider;
