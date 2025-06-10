
import { useState } from "react";

interface SupportNameModalProps {
  supportName: string;
  setSupportName: (name: string) => void;
  onSave: (name: string) => void;
  onClose: () => void;
}

const SupportNameModal = ({ supportName, setSupportName, onSave, onClose }: SupportNameModalProps) => {
  const [localName, setLocalName] = useState(supportName);

  const handleSave = () => {
    onSave(localName);
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gray-800 rounded-2xl p-6 w-full max-w-md border border-gray-700">
        <h3 className="text-xl font-bold mb-4 text-center">Configure seu nome</h3>
        <p className="text-gray-300 text-sm mb-4 text-center">
          Digite seu nome para aparecer nas conversas com os clientes
        </p>
        <input
          type="text"
          value={localName}
          onChange={(e) => setLocalName(e.target.value)}
          placeholder="Ex: João Silva"
          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl 
                   focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white 
                   placeholder-gray-400 mb-4"
          onKeyPress={(e) => e.key === 'Enter' && handleSave()}
          autoFocus
        />
        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 bg-gray-600 hover:bg-gray-700 text-white py-3 rounded-xl 
                     transition-colors font-medium"
          >
            Cancelar
          </button>
          <button
            onClick={handleSave}
            disabled={!localName.trim()}
            className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl 
                     transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-medium"
          >
            Salvar
          </button>
        </div>
      </div>
    </div>
  );
};

export default SupportNameModal;
