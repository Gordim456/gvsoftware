
import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";

console.log("🔥 CHATBOT: Starting component with proper React import");

const ChatBot: React.FC = () => {
  console.log("🔥 CHATBOT: Component rendering, about to call useState");
  
  const [isOpen, setIsOpen] = useState(false);
  
  console.log("🔥 CHATBOT: useState called successfully, isOpen:", isOpen);

  const toggleChat = () => {
    console.log("🔥 CHATBOT: toggleChat called, current isOpen:", isOpen);
    setIsOpen(!isOpen);
  };

  console.log("🔥 CHATBOT: Rendering ChatBot component");

  return (
    <>
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-50">
          <button
            onClick={toggleChat}
            className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 
                     text-white p-3 rounded-full shadow-2xl hover:shadow-indigo-500/25 
                     transition-all duration-500 hover:scale-110
                     border-2 border-white/30"
            style={{ width: '56px', height: '56px' }}
          >
            <MessageCircle className="w-7 h-7 mx-auto" />
          </button>
        </div>
      )}

      {isOpen && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50 md:bg-transparent">
          <div className="fixed bottom-0 right-0 w-full md:w-[360px] h-full md:h-[520px] 
                       bg-white shadow-2xl transition-all duration-500 rounded-t-3xl md:rounded-3xl
                       md:bottom-6 md:right-6 overflow-hidden flex flex-col border border-gray-200">
            
            <div className="flex items-center justify-between p-4 
                          bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700
                          text-white">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center 
                              justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-base">GV Assistant</h3>
                  <div className="flex items-center gap-2 text-xs text-white/90">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                    Online
                  </div>
                </div>
              </div>
              
              <button
                onClick={toggleChat}
                className="text-white/80 hover:text-white transition-colors
                         hover:bg-white/10 p-1.5 rounded-lg"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="flex-1 overflow-hidden bg-gradient-to-b from-gray-50 to-white p-6">
              <div className="text-center">
                <h4 className="text-xl font-bold text-gray-800 mb-4">
                  Olá! 👋
                </h4>
                <p className="text-gray-600 mb-4">
                  Sou o assistente da GV Software.
                </p>
                <p className="text-sm text-gray-500">
                  Chat em manutenção. Em breve estaremos de volta!
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

console.log("🔥 CHATBOT: Component defined, exporting");

export default ChatBot;
