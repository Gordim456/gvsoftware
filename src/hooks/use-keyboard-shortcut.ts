
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const useKeyboardShortcut = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Detectar ALT + A para acessar a página de administração
      if (event.altKey && event.key === 'a') {
        event.preventDefault();
        navigate('/admin/messages');
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [navigate]);
};

export default useKeyboardShortcut;
