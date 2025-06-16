
import React, { useState } from "react";
import { MessageSquare, X, Send, User, Mail, Phone, MessageCircle, Sparkles, Bot } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.phone && formData.subject) {
      localStorage.setItem('chatbot-contact', JSON.stringify(formData));
      setIsSubmitted(true);
    }
  };

  const resetForm = () => {
    setFormData({ name: "", email: "", phone: "", subject: "" });
    setIsSubmitted(false);
  };

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.div 
            className="fixed bottom-8 right-8 z-50"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            <motion.button
              onClick={() => setIsOpen(true)}
              className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 
                       text-white p-4 rounded-full shadow-2xl hover:shadow-indigo-500/50 
                       transition-all duration-300 group overflow-hidden"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              animate={{ 
                boxShadow: [
                  "0 0 20px rgba(99, 102, 241, 0.3)",
                  "0 0 40px rgba(147, 51, 234, 0.4)",
                  "0 0 20px rgba(99, 102, 241, 0.3)"
                ]
              }}
              transition={{ 
                boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="relative z-10"
              >
                <MessageSquare className="w-6 h-6" />
              </motion.div>
              
              <motion.div
                className="absolute -top-16 right-0 bg-white px-4 py-2 rounded-2xl 
                         text-sm font-medium text-indigo-600 shadow-lg opacity-0 
                         group-hover:opacity-100 transition-all duration-300 
                         whitespace-nowrap border border-indigo-100"
                initial={{ y: 10, opacity: 0 }}
                whileHover={{ y: 0, opacity: 1 }}
              >
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-purple-500" />
                  Precisa de ajuda? Fale conosco!
                </div>
                <div className="absolute -bottom-2 right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
              </motion.div>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className="fixed bottom-0 right-0 w-full md:w-[420px] h-full md:h-[650px] 
                       bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 
                       shadow-2xl transition-all duration-300 rounded-t-3xl md:rounded-l-3xl
                       border border-indigo-800/50 overflow-hidden"
              initial={{ x: "100%", y: "100%" }}
              animate={{ x: 0, y: 0 }}
              exit={{ x: "100%", y: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Animated background */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 left-1/4 w-32 h-32 bg-indigo-500 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-0 w-32 h-32 bg-purple-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
              
              {/* Header */}
              <motion.div 
                className="flex items-center justify-between p-6 bg-gradient-to-r 
                          from-indigo-600 via-purple-600 to-pink-600 text-white 
                          rounded-t-3xl relative overflow-hidden"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600/20 to-indigo-600/20"></div>
                <div className="flex items-center gap-4 relative z-10">
                  <motion.div 
                    className="w-12 h-12 bg-white/20 rounded-full flex items-center 
                              justify-center backdrop-blur-sm border border-white/30"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  >
                    <Bot className="w-6 h-6" />
                  </motion.div>
                  <div>
                    <h3 className="font-bold text-lg">Assistente GV Software</h3>
                    <span className="text-sm text-white/90 flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      Online - Resposta rápida
                    </span>
                  </div>
                </div>
                <motion.button
                  onClick={() => setIsOpen(false)}
                  className="text-white/80 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="w-5 h-5" />
                </motion.button>
              </motion.div>

              {/* Content */}
              <div className="h-[calc(100%-88px)] overflow-y-auto p-6 relative z-10">
                <AnimatePresence mode="wait">
                  {!isSubmitted ? (
                    <motion.div 
                      className="space-y-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="text-center mb-8">
                        <motion.div 
                          className="w-20 h-20 mx-auto bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 
                                    rounded-full flex items-center justify-center mb-6 shadow-2xl"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
                        >
                          <MessageSquare className="w-10 h-10 text-white" />
                        </motion.div>
                        <h4 className="font-bold text-white text-2xl mb-2">Vamos conversar!</h4>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          Preencha seus dados e nossa equipe entrará em contato em breve
                        </p>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-5">
                        {[
                          { icon: User, placeholder: "Nome completo", type: "text", field: "name" },
                          { icon: Mail, placeholder: "Seu melhor email", type: "email", field: "email" },
                          { icon: Phone, placeholder: "WhatsApp para contato", type: "tel", field: "phone" },
                          { icon: MessageCircle, placeholder: "Como podemos ajudar?", type: "text", field: "subject" }
                        ].map((input, index) => (
                          <motion.div 
                            key={input.field}
                            className="relative"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 + index * 0.1 }}
                          >
                            <input.icon className="absolute left-4 top-4 w-5 h-5 text-indigo-400" />
                            <input
                              type={input.type}
                              placeholder={input.placeholder}
                              value={formData[input.field as keyof FormData]}
                              onChange={(e) => setFormData({...formData, [input.field]: e.target.value})}
                              className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-600 rounded-xl 
                                       focus:outline-none focus:ring-2 focus:ring-indigo-500/50 
                                       focus:border-indigo-500 transition-all duration-300 text-white
                                       placeholder-gray-400 backdrop-blur-sm"
                              required
                            />
                          </motion.div>
                        ))}

                        <motion.button
                          type="submit"
                          className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 
                                   text-white py-4 rounded-xl hover:shadow-lg transition-all 
                                   duration-300 flex items-center justify-center gap-3 font-semibold
                                   hover:from-pink-600 hover:to-indigo-600 shadow-xl shadow-indigo-500/25"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.8 }}
                        >
                          <Send className="w-5 h-5" />
                          Enviar Mensagem
                          <Sparkles className="w-4 h-4" />
                        </motion.button>
                      </form>
                    </motion.div>
                  ) : (
                    <motion.div 
                      className="text-center space-y-6"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ type: "spring", stiffness: 200 }}
                    >
                      <motion.div 
                        className="w-20 h-20 mx-auto bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                      >
                        <motion.span 
                          className="text-3xl"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.4 }}
                        >
                          ✅
                        </motion.span>
                      </motion.div>
                      
                      <div>
                        <h4 className="text-2xl font-bold text-white mb-4">
                          Obrigado, {formData.name}! 🎉
                        </h4>
                        <p className="text-gray-300 leading-relaxed mb-2">
                          Recebemos sua mensagem com sucesso!
                        </p>
                        <p className="text-sm text-gray-400">
                          Nossa equipe entrará em contato através do email <span className="text-indigo-400 font-medium">{formData.email}</span> em breve.
                        </p>
                      </div>

                      <motion.button
                        onClick={resetForm}
                        className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 
                                 text-white py-4 rounded-xl hover:shadow-lg transition-all duration-300 font-semibold"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Enviar Nova Mensagem
                      </motion.button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;
