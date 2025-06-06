
import { supabase } from './supabaseClient';

export interface CreateConversationData {
  user_name: string;
  user_email: string;
  user_phone: string;
  subject: string;
}

export interface SendMessageData {
  conversation_id: string;
  type: 'user' | 'bot' | 'admin';
  content: string;
  sender_name: string;
}

export const ChatService = {
  async createConversation(data: CreateConversationData) {
    console.log('Criando conversa:', data);
    
    const { data: conversation, error } = await supabase
      .from('conversations')
      .insert([{
        user_name: data.user_name,
        user_email: data.user_email,
        user_phone: data.user_phone,
        subject: data.subject,
        status: 'active',
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      }])
      .select()
      .single();

    if (error) {
      console.error('Erro ao criar conversa:', error);
      throw error;
    }

    console.log('Conversa criada:', conversation);
    return conversation;
  },

  async sendMessage(data: SendMessageData) {
    console.log('Enviando mensagem:', data);
    
    const messageData = {
      conversation_id: data.conversation_id,
      type: data.type,
      content: data.content,
      sender_name: data.sender_name,
      timestamp: new Date().toISOString(),
      is_read: false
    };

    // Inserir mensagem
    const { data: message, error: messageError } = await supabase
      .from('messages')
      .insert([messageData])
      .select()
      .single();

    if (messageError) {
      console.error('Erro ao enviar mensagem:', messageError);
      throw messageError;
    }

    // Atualizar conversa com última mensagem
    const { error: updateError } = await supabase
      .from('conversations')
      .update({
        last_message: data.content,
        updated_at: new Date().toISOString()
      })
      .eq('id', data.conversation_id);

    if (updateError) {
      console.error('Erro ao atualizar conversa:', updateError);
    }

    console.log('Mensagem enviada com sucesso:', message);
    return message;
  },

  async getConversations() {
    console.log('Buscando conversas...');
    
    const { data, error } = await supabase
      .from('conversations')
      .select(`
        *,
        messages(count)
      `)
      .order('updated_at', { ascending: false });

    if (error) {
      console.error('Erro ao buscar conversas:', error);
      throw error;
    }

    console.log('Conversas encontradas:', data?.length || 0);
    return data || [];
  },

  async getMessages(conversationId: string) {
    console.log('Buscando mensagens para conversa:', conversationId);
    
    const { data, error } = await supabase
      .from('messages')
      .select('*')
      .eq('conversation_id', conversationId)
      .order('timestamp', { ascending: true });

    if (error) {
      console.error('Erro ao buscar mensagens:', error);
      throw error;
    }

    console.log('Mensagens encontradas:', data?.length || 0);
    return data || [];
  },

  async updateConversationStatus(conversationId: string, status: 'active' | 'closed' | 'waiting') {
    console.log('Atualizando status da conversa:', { conversationId, status });
    
    const { error } = await supabase
      .from('conversations')
      .update({ 
        status,
        updated_at: new Date().toISOString()
      })
      .eq('id', conversationId);

    if (error) {
      console.error('Erro ao atualizar status:', error);
      throw error;
    }

    console.log('Status atualizado com sucesso');
  },

  async deleteConversation(conversationId: string) {
    console.log('Excluindo conversa:', conversationId);
    
    // Primeiro deletar todas as mensagens
    const { error: messagesError } = await supabase
      .from('messages')
      .delete()
      .eq('conversation_id', conversationId);

    if (messagesError) {
      console.error('Erro ao deletar mensagens:', messagesError);
      throw messagesError;
    }

    // Depois deletar a conversa
    const { error: conversationError } = await supabase
      .from('conversations')
      .delete()
      .eq('id', conversationId);

    if (conversationError) {
      console.error('Erro ao deletar conversa:', conversationError);
      throw conversationError;
    }

    console.log('Conversa excluída com sucesso');
  },

  // Função para polling de mensagens (atualização em tempo real simples)
  async pollForNewMessages(conversationId: string, lastMessageTimestamp?: string) {
    console.log('Verificando novas mensagens para:', conversationId);
    
    let query = supabase
      .from('messages')
      .select('*')
      .eq('conversation_id', conversationId)
      .order('timestamp', { ascending: true });

    if (lastMessageTimestamp) {
      query = query.gt('timestamp', lastMessageTimestamp);
    }

    const { data, error } = await query;

    if (error) {
      console.error('Erro ao verificar novas mensagens:', error);
      return [];
    }

    if (data && data.length > 0) {
      console.log('Novas mensagens encontradas:', data.length);
    }

    return data || [];
  }
};
