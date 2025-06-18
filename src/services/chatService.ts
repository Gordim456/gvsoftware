
export class ChatService {
  // Simulação de serviço para quando não houver Supabase
  static async createConversation(userData: {
    user_name: string;
    user_email: string;
    user_phone: string;
    subject: string;
  }) {
    console.log('Criando conversa:', userData);
    
    // Simular resposta da API
    return {
      id: Date.now().toString(),
      ...userData,
      status: 'active',
      created_at: new Date(),
      updated_at: new Date()
    };
  }

  static async sendMessage(message: {
    conversation_id: string;
    type: 'user' | 'admin' | 'bot';
    content: string;
    sender_name?: string;
  }) {
    console.log('Enviando mensagem:', message);
    
    // Simular resposta da API
    return {
      id: Date.now().toString(),
      ...message,
      timestamp: new Date(),
      is_read: false
    };
  }

  static async getMessages(conversationId: string) {
    console.log('Buscando mensagens para:', conversationId);
    return [];
  }

  static subscribeToMessages(
    conversationId: string, 
    callback: (message: any) => void
  ) {
    console.log('Inscrito em mensagens para:', conversationId);
    return { unsubscribe: () => {} };
  }

  static async markAsRead(conversationId: string, userType: 'user' | 'admin') {
    console.log('Marcando como lida:', conversationId, userType);
  }

  static async getConversations() {
    console.log('Buscando conversas');
    return [];
  }

  static async updateConversationStatus(
    conversationId: string, 
    status: 'active' | 'closed' | 'waiting'
  ) {
    console.log('Atualizando status:', conversationId, status);
  }

  static async deleteConversation(conversationId: string) {
    console.log('Deletando conversa:', conversationId);
  }
}
