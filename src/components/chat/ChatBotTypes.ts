
export interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
}

export interface ChatMessage {
  id: string;
  type: 'bot' | 'user';
  content: string;
  timestamp: Date;
  isTyping?: boolean;
}

export interface ChatOption {
  id: string;
  icon: string;
  title: string;
  description: string;
  type: 'live_chat' | 'faq' | 'quote' | 'services' | 'meeting';
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
