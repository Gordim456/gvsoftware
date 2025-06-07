import * as React from 'react';
import { useState, useEffect, Suspense } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Lazy load chat components
const ChatBotOptions = React.lazy(() => import('./ChatBotOptions'));
const ChatBotForm = React.lazy(() => import('./ChatBotForm'));
const ChatBotFAQ = React.lazy(() => import('./ChatBotFAQ'));
const ChatBotLiveChat = React.lazy(() => import('./ChatBotLiveChat'));

interface ChatBotProps {
  className?: string;
}

export type ChatState = 'closed' | 'options' | 'form' | 'faq' | 'live_chat' | 'completed';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
}

const ChatBot: React.FC<ChatBotProps> = ({ className = '' }) => {
  console.log("🔥 CHATBOT: Component rendering with React:", React);
  console.log("🔥 CHATBOT: useState available:", typeof useState);
  
  const [chatState, setChatState] = useState<ChatState>('closed');
  const [conversationId, setConversationId] = useState<string>('');
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: ''
  });

  console.log("🔥 CHATBOT: Component rendering, state:", chatState);

  useEffect(() => {
    // Generate conversation ID when opening chat
    if (chatState !== 'closed' && !conversationId) {
      setConversationId(`conv_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`);
    }
  }, [chatState, conversationId]);

  const openChat = () => {
    setChatState('options');
  };

  const closeChat = () => {
    setChatState('closed');
    // Reset form data when closing
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: ''
    });
  };

  const handleOptionSelect = (option: any) => {
    console.log("🔥 CHATBOT: Option selected:", option);
    
    switch (option.type) {
      case 'faq':
        setChatState('faq');
        break;
      case 'live_chat':
        setChatState('form'); // Collect info first
        break;
      case 'quote':
        setChatState('form');
        break;
      case 'services':
        setChatState('form');
        break;
      case 'meeting':
        setChatState('form');
        break;
      default:
        setChatState('form');
    }
  };

  const handleFormComplete = () => {
    console.log("🔥 CHATBOT: Form completed with data:", formData);
    setChatState('live_chat');
  };

  const handleBackToOptions = () => {
    setChatState('options');
  };

  // Loading fallback component
  const LoadingFallback = () => (
    <div className="flex items-center justify-center p-4">
      <div className="w-6 h-6 border-2 border-indigo-400 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );

  // Floating button when closed
  if (chatState === 'closed') {
    return (
      <motion.div 
        className={`fixed bottom-6 right-6 z-50 ${className}`}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <button
          onClick={openChat}
          className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-4 rounded-full 
                   shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 
                   focus:outline-none focus:ring-4 focus:ring-indigo-300"
          aria-label="Abrir chat"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      </motion.div>
    );
  }

  // Chat window
  return (
    <motion.div 
      className={`fixed bottom-6 right-6 z-50 ${className}`}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    >
      <div className="w-80 md:w-96 h-[500px] bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <MessageCircle className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-semibold text-sm">GV Assistant</h3>
              <div className="flex items-center gap-1 text-xs opacity-90">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                Online
              </div>
            </div>
          </div>
          <button
            onClick={closeChat}
            className="text-white hover:bg-white/20 p-2 rounded-full transition-colors"
            aria-label="Fechar chat"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-hidden">
          <Suspense fallback={<LoadingFallback />}>
            <AnimatePresence mode="wait">
              {chatState === 'options' && (
                <motion.div
                  key="options"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="h-full overflow-y-auto"
                >
                  <ChatBotOptions 
                    onSelectOption={handleOptionSelect}
                    userName={formData.name || 'amigo'}
                  />
                </motion.div>
              )}

              {chatState === 'form' && (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="h-full overflow-y-auto"
                >
                  <ChatBotForm
                    formData={formData}
                    setFormData={setFormData}
                    onComplete={handleFormComplete}
                  />
                </motion.div>
              )}

              {chatState === 'faq' && (
                <motion.div
                  key="faq"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="h-full overflow-y-auto p-4"
                >
                  <ChatBotFAQ 
                    onBack={handleBackToOptions}
                    userName={formData.name || 'amigo'}
                  />
                </motion.div>
              )}

              {chatState === 'live_chat' && (
                <motion.div
                  key="live_chat"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="h-full"
                >
                  <ChatBotLiveChat
                    conversationId={conversationId}
                    userName={formData.name || 'Usuário'}
                    onClose={closeChat}
                    onBack={handleBackToOptions}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </Suspense>
        </div>
      </div>
    </motion.div>
  );
};

export default ChatBot;
