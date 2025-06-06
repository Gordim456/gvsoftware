
export interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
}

export interface ChatMessage {
  id: string;
  conversation_id: string;
  type: 'bot' | 'user' | 'admin';
  content: string;
  timestamp: Date;
  sender_name?: string;
  is_read?: boolean;
}

export interface Conversation {
  id: string;
  user_name: string;
  user_email: string;
  user_phone: string;
  subject: string;
  status: 'active' | 'closed' | 'waiting';
  created_at: Date;
  updated_at: Date;
  last_message?: string;
  unread_count?: number;
}

export interface ChatOption {
  id: string;
  icon: string;
  title: string;
  description: string;
  type: 'live_chat' | 'faq' | 'quote' | 'services' | 'meeting';
  auto_message?: string;
}

export type ChatStep = 
  | 'welcome'
  | 'form'
  | 'options'
  | 'chat'
  | 'faq'
  | 'quote'
  | 'services'
  | 'meeting'
  | 'submitted';

// Mensagens automáticas inteligentes
export const AUTO_MESSAGES = {
  quote: "Ótima escolha! 💼 Para criar um orçamento personalizado, preciso entender melhor seu projeto. Pode me contar mais detalhes sobre o que você tem em mente? (site, app, sistema, etc.)",
  services: "Perfeito! 🚀 Temos várias soluções incríveis para oferecer. Qual tipo de serviço mais te interessa: desenvolvimento web, aplicativos mobile, sistemas personalizados ou e-commerce?",
  meeting: "Excelente! 📅 Adoraria agendar uma conversa com você. Qual seria o melhor horário? Manhã, tarde ou noite? E qual dia da semana funciona melhor?",
  welcome: "Olá! 👋 Seja muito bem-vindo(a) à GV Software! Sou seu assistente inteligente e estou aqui para te ajudar com tudo que precisar. Vamos começar nossa conversa?",
  faq_intro: "Vou te ajudar com as dúvidas mais frequentes! 🤖 Se não encontrar o que procura, posso te conectar diretamente com nossa equipe.",
  live_chat_connecting: "Perfeito! 💬 Estou conectando você com nossa equipe de suporte. Em instantes um especialista estará disponível para te atender pessoalmente!",
  business_hours: "📞 Nosso horário de atendimento é de segunda a sexta, das 9h às 18h. Fora deste horário, deixe sua mensagem que responderemos no próximo dia útil!"
};
