
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

// A senha simples para acessar a área de administração
const ADMIN_PASSWORD = "admin123";

const AdminPasswordProtection: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [password, setPassword] = useState("");
  const [isAuthorized, setIsAuthorized] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Verificar se o usuário já foi autorizado anteriormente
    const adminAuth = localStorage.getItem('adminAuth');
    if (adminAuth === 'true') {
      setIsAuthorized(true);
    } else {
      setIsDialogOpen(true);
    }
  }, []);

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password === ADMIN_PASSWORD) {
      setIsAuthorized(true);
      setIsDialogOpen(false);
      localStorage.setItem('adminAuth', 'true');
      toast.success("Acesso autorizado", {
        description: "Bem-vindo à área administrativa"
      });
    } else {
      toast.error("Senha incorreta", {
        description: "Por favor, tente novamente"
      });
      setPassword("");
    }
  };

  // Se não estiver autorizado e o diálogo estiver fechado, redirecionamos para a página inicial
  useEffect(() => {
    if (!isAuthorized && !isDialogOpen) {
      navigate('/');
    }
  }, [isAuthorized, isDialogOpen, navigate]);

  if (!isAuthorized) {
    return (
      <Dialog open={isDialogOpen} onOpenChange={(open) => {
        setIsDialogOpen(open);
        if (!open && !isAuthorized) {
          navigate('/');
        }
      }}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Área Restrita</DialogTitle>
            <DialogDescription>
              Digite a senha para acessar a área administrativa.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handlePasswordSubmit} className="space-y-4 py-4">
            <Input
              type="password"
              placeholder="Digite a senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoFocus
            />
            <div className="flex justify-end">
              <Button type="submit">Entrar</Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    );
  }

  return <>{children}</>;
};

export default AdminPasswordProtection;
