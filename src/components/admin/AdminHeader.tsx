
import { ArrowLeft, Shield, Settings } from "lucide-react";

// Componente do ícone de robô 3D moderno
const RobotIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <div className={`${className} relative flex items-center justify-center`}>
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <circle cx="50" cy="15" r="3" fill="#ffffff" opacity="0.9" />
      <line x1="50" y1="18" x2="50" y2="30" stroke="#ffffff" strokeWidth="2" opacity="0.8" />
      
      <defs>
        <linearGradient id="robotGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8b5cf6" />
          <stop offset="50%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
        <linearGradient id="robotFace" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1e1b4b" />
          <stop offset="100%" stopColor="#312e81" />
        </linearGradient>
      </defs>
      
      <rect x="25" y="30" width="50" height="35" rx="8" fill="url(#robotGradient)" />
      <rect x="30" y="35" width="40" height="25" rx="5" fill="url(#robotFace)" />
      
      <circle cx="40" cy="45" r="4" fill="#ffffff" />
      <circle cx="60" cy="45" r="4" fill="#ffffff" />
      <circle cx="40" cy="45" r="2" fill="#3b82f6" className="animate-pulse" />
      <circle cx="60" cy="45" r="2" fill="#3b82f6" className="animate-pulse" />
      
      <rect x="45" y="52" width="10" height="3" rx="1.5" fill="#ffffff" opacity="0.8" />
      <rect x="35" y="65" width="30" height="25" rx="6" fill="url(#robotGradient)" opacity="0.9" />
      
      <circle cx="45" cy="75" r="2" fill="#ffffff" opacity="0.7" />
      <circle cx="55" cy="75" r="2" fill="#ffffff" opacity="0.7" />
      
      <circle cx="20" cy="70" r="6" fill="url(#robotGradient)" opacity="0.8" />
      <circle cx="80" cy="70" r="6" fill="url(#robotGradient)" opacity="0.8" />
      
      <ellipse cx="45" cy="35" rx="8" ry="4" fill="#ffffff" opacity="0.3" />
    </svg>
  </div>
);

interface AdminHeaderProps {
  onBack: () => void;
  supportName: string;
  onChangeSupportName: () => void;
}

const AdminHeader = ({ onBack, supportName, onChangeSupportName }: AdminHeaderProps) => {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 sm:mb-8 gap-4">
      <div className="flex items-center gap-4 w-full sm:w-auto">
        <button
          onClick={onBack}
          className="p-2 sm:p-3 hover:bg-white/10 rounded-xl transition-colors"
        >
          <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="w-10 h-10 sm:w-14 sm:h-14 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl 
                        flex items-center justify-center shadow-xl">
            <RobotIcon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
          </div>
          <div>
            <h1 className="text-xl sm:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 
                         bg-clip-text text-transparent">
              Painel Admin - GV Assistant
            </h1>
            <p className="text-sm sm:text-base text-gray-300 hidden sm:block">
              Gerenciar conversas e atendimento em tempo real
            </p>
          </div>
        </div>
      </div>
      
      {supportName && (
        <div className="flex items-center gap-3 bg-gray-800/50 rounded-xl px-3 sm:px-4 py-2 border border-gray-700/50 w-full sm:w-auto">
          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
            <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="text-xs sm:text-sm text-gray-300">Logado como:</div>
            <div className="font-semibold text-white text-sm sm:text-base truncate">{supportName}</div>
          </div>
          <button
            onClick={onChangeSupportName}
            className="text-gray-400 hover:text-white p-1 rounded transition-colors"
            title="Alterar nome"
          >
            <Settings className="w-3 h-3 sm:w-4 sm:h-4" />
          </button>
        </div>
      )}
    </div>
  );
};

export default AdminHeader;
