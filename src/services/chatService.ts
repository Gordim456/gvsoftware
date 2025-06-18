
import { createClient } from '@supabase/supabase-js';
import { ChatMessage, Conversation } from '../components/chat/ChatBotTypes';

// Configuração do Supabase com suas credenciais
const supabaseUrl = 'https://mjawenqlewhvpixelutg.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1qYXdlbnFsZXdodnBpeGVsdXRnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkwOTI5NzQsImV4cCI6MjA2NDY2ODk3NH0.a5YOtXGw7aPbyEdvAuksfaBzqtlmlF0gJm9owDYE79M';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

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

  // Deletar conversa
  static async deleteConversation(conversationId: string): Promise<void> {
    try {
      // Primeiro, deletar todas as mensagens da conversa
      const { error: messagesError } = await supabase
        .from('messages')
        .delete()
        .eq('conversation_id', conversationId);

      if (messagesError) {
        console.error('Erro ao deletar mensagens:', messagesError);
        throw messagesError;
      }

      // Depois, deletar a conversa
      const { error: conversationError } = await supabase
        .from('conversations')
        .delete()
        .eq('id', conversationId);

      if (conversationError) {
        console.error('Erro ao deletar conversa:', conversationError);
        throw conversationError;
      }

      console.log('Conversa deletada com sucesso do Supabase');
    } catch (error) {
      console.error('Erro ao deletar conversa:', error);
      throw error;
    }
  }
}
