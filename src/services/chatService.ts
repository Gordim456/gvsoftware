import { createClient } from '@supabase/supabase-js';
import { ChatMessage, Conversation } from '../components/chat/ChatBotTypes';

// Configuração do Supabase será automática via integração Lovable
const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL || '',
  import.meta.env.VITE_SUPABASE_ANON_KEY || ''
);

export class ChatService {
  // Criar nova conversa
  static async createConversation(userData: {
    user_name: string;
    user_email: string;
    user_phone: string;
    subject: string;
  }): Promise<Conversation | null> {
    try {
      const { data, error } = await supabase
        .from('conversations')
        .insert([{
          ...userData,
          status: 'active',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        }])
        .select()
        .single();

      if (error) {
        console.error('Erro ao criar conversa:', error);
        return null;
      }

      return data;
    } catch (error) {
      console.error('Erro no serviço de chat:', error);
      return null;
    }
  }

  // Enviar mensagem
  static async sendMessage(message: {
    conversation_id: string;
    type: 'user' | 'admin' | 'bot';
    content: string;
    sender_name?: string;
  }): Promise<ChatMessage | null> {
    try {
      const { data, error } = await supabase
        .from('messages')
        .insert([{
          ...message,
          timestamp: new Date().toISOString(),
          is_read: false
        }])
        .select()
        .single();

      if (error) {
        console.error('Erro ao enviar mensagem:', error);
        return null;
      }

      // Atualizar última mensagem da conversa
      await supabase
        .from('conversations')
        .update({
          last_message: message.content,
          updated_at: new Date().toISOString()
        })
        .eq('id', message.conversation_id);

      return data;
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
      return null;
    }
  }

  // Buscar mensagens da conversa
  static async getMessages(conversationId: string): Promise<ChatMessage[]> {
    try {
      const { data, error } = await supabase
        .from('messages')
        .select('*')
        .eq('conversation_id', conversationId)
        .order('timestamp', { ascending: true });

      if (error) {
        console.error('Erro ao buscar mensagens:', error);
        return [];
      }

      return data || [];
    } catch (error) {
      console.error('Erro ao buscar mensagens:', error);
      return [];
    }
  }

  // Subscrever a mensagens em tempo real
  static subscribeToMessages(
    conversationId: string, 
    callback: (message: ChatMessage) => void
  ) {
    return supabase
      .channel('messages')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'messages',
          filter: `conversation_id=eq.${conversationId}`
        },
        (payload) => {
          callback(payload.new as ChatMessage);
        }
      )
      .subscribe();
  }

  // Marcar mensagens como lidas
  static async markAsRead(conversationId: string, userType: 'user' | 'admin'): Promise<void> {
    try {
      await supabase
        .from('messages')
        .update({ is_read: true })
        .eq('conversation_id', conversationId)
        .neq('type', userType);
    } catch (error) {
      console.error('Erro ao marcar como lidas:', error);
    }
  }

  // Buscar conversas para painel admin
  static async getConversations(): Promise<Conversation[]> {
    try {
      const { data, error } = await supabase
        .from('conversations')
        .select(`
          *,
          messages(count)
        `)
        .order('updated_at', { ascending: false });

      if (error) {
        console.error('Erro ao buscar conversas:', error);
        return [];
      }

      return data || [];
    } catch (error) {
      console.error('Erro ao buscar conversas:', error);
      return [];
    }
  }

  // Atualizar status da conversa
  static async updateConversationStatus(
    conversationId: string, 
    status: 'active' | 'closed' | 'waiting'
  ): Promise<void> {
    try {
      await supabase
        .from('conversations')
        .update({ 
          status,
          updated_at: new Date().toISOString()
        })
        .eq('id', conversationId);
    } catch (error) {
      console.error('Erro ao atualizar status:', error);
    }
  }
}

// Esquemas SQL para criar as tabelas no Supabase:
/*
-- Tabela de conversas
CREATE TABLE conversations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_name VARCHAR(255) NOT NULL,
  user_email VARCHAR(255) NOT NULL,
  user_phone VARCHAR(20),
  subject TEXT,
  status VARCHAR(20) DEFAULT 'active' CHECK (status IN ('active', 'closed', 'waiting')),
  last_message TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabela de mensagens
CREATE TABLE messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  conversation_id UUID REFERENCES conversations(id) ON DELETE CASCADE,
  type VARCHAR(10) NOT NULL CHECK (type IN ('user', 'admin', 'bot')),
  content TEXT NOT NULL,
  sender_name VARCHAR(255),
  is_read BOOLEAN DEFAULT FALSE,
  timestamp TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Índices para performance
CREATE INDEX idx_conversations_status ON conversations(status);
CREATE INDEX idx_conversations_updated_at ON conversations(updated_at);
CREATE INDEX idx_messages_conversation_id ON messages(conversation_id);
CREATE INDEX idx_messages_timestamp ON messages(timestamp);

-- RLS (Row Level Security) - Configurar conforme necessário
ALTER TABLE conversations ENABLE ROW LEVEL SECURITY;
ALTER TABLE messages ENABLE ROW LEVEL SECURITY;

-- Políticas básicas (ajustar conforme sua necessidade de segurança)
CREATE POLICY "Allow read conversations" ON conversations FOR SELECT USING (true);
CREATE POLICY "Allow insert conversations" ON conversations FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow update conversations" ON conversations FOR UPDATE USING (true);

CREATE POLICY "Allow read messages" ON messages FOR SELECT USING (true);
CREATE POLICY "Allow insert messages" ON messages FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow update messages" ON messages FOR UPDATE USING (true);
*/
