
import { useState } from "react";
import { Shield, Eye, EyeOff } from "lucide-react";

interface AdminLoginProps {
  onLogin: () => void;
  onCancel: () => void;
}

const AdminLogin = ({ onLogin, onCancel }: AdminLoginProps) => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "GVS!1530") {
      onLogin();
    } else {
      setError("Senha incorreta");
      setPassword("");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-gray-900 border border-gray-700 rounded-2xl p-8 w-full max-w-md mx-4">
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Acesso Admin</h2>
          <p className="text-gray-400">Digite a senha para acessar o painel</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError("");
              }}
              placeholder="Senha admin..."
              className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg 
                       focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white
                       placeholder-gray-400"
              autoFocus
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 
                       hover:text-white transition-colors"
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>

          {error && (
            <div className="text-red-400 text-sm text-center bg-red-900/20 border border-red-800 
                          rounded-lg p-2">
              {error}
            </div>
          )}

          <div className="flex gap-3">
            <button
              type="button"
              onClick={onCancel}
              className="flex-1 py-3 px-4 bg-gray-700 hover:bg-gray-600 text-white rounded-lg 
                       transition-colors"
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={!password}
              className="flex-1 py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg 
                       transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Entrar
            </button>
          </div>
        </form>

        <div className="mt-6 text-center text-xs text-gray-500">
          Acesso restrito apenas para administradores
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
