
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const KeyboardShortcutsProvider = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Detectar ALT + A para acessar a página de administração
      if (event.altKey && event.key === 'a') {
        event.preventDefault();
        navigate('/admin/messages');
        toast.info("Atalho de teclado ativado", {
          description: "ALT + A: Acessando área administrativa"
        });
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [navigate]);

  return null;
};

export default KeyboardShortcutsProvider;
