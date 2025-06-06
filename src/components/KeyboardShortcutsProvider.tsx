
import { useEffect, useState } from 'react';
import AdminLogin from './admin/AdminLogin';
import AdminDashboard from '../pages/AdminDashboard';

const KeyboardShortcutsProvider = () => {
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [showAdminPanel, setShowAdminPanel] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      console.log('Tecla pressionada:', { 
        key: event.key, 
        ctrlKey: event.ctrlKey, 
        shiftKey: event.shiftKey 
      });

      // CTRL + SHIFT + A para abrir painel admin
      if (event.ctrlKey && event.shiftKey && event.key === 'A') {
        event.preventDefault();
        console.log('Abrindo painel admin...');
        setShowAdminLogin(true);
      }

      // ESC para fechar painéis
      if (event.key === 'Escape') {
        console.log('Fechando painéis...');
        setShowAdminLogin(false);
        setShowAdminPanel(false);
      }
    };

    console.log('KeyboardShortcutsProvider montado - atalhos configurados');
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      console.log('KeyboardShortcutsProvider desmontado');
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleAdminLogin = () => {
    console.log('Login admin realizado com sucesso');
    setShowAdminLogin(false);
    setShowAdminPanel(true);
  };

  const handleAdminCancel = () => {
    console.log('Login admin cancelado');
    setShowAdminLogin(false);
  };

  const handleAdminBack = () => {
    console.log('Saindo do painel admin');
    setShowAdminPanel(false);
  };

  console.log('KeyboardShortcutsProvider renderizando:', { 
    showAdminLogin, 
    showAdminPanel 
  });

  return (
    <>
      {showAdminLogin && (
        <div className="fixed inset-0 z-[9999]">
          <AdminLogin 
            onLogin={handleAdminLogin}
            onCancel={handleAdminCancel}
          />
        </div>
      )}
      
      {showAdminPanel && (
        <div className="fixed inset-0 z-[9999] bg-white">
          <AdminDashboard onBack={handleAdminBack} />
        </div>
      )}
    </>
  );
};

export default KeyboardShortcutsProvider;
