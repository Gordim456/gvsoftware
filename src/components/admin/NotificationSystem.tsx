
import { useState, useEffect } from "react";
import { Bell, X, MessageSquare, User } from "lucide-react";
import { ChatService } from "../../services/chatService";
import { useToast } from "@/hooks/use-toast";

interface Notification {
  id: string;
  type: 'new_message' | 'new_conversation';
  title: string;
  message: string;
  timestamp: Date;
  conversationId?: string;
  isRead: boolean;
}

const NotificationSystem = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [showNotifications, setShowNotifications] = useState(false);
  const [lastCheck, setLastCheck] = useState(new Date());
  const { toast } = useToast();

  // Verificar novas notificações a cada 10 segundos
  useEffect(() => {
    const checkForUpdates = async () => {
      try {
        const conversations = await ChatService.getConversations();
        
        // Verificar novas conversas
        const newConversations = conversations.filter(conv => 
          new Date(conv.created_at) > lastCheck
        );

        // Verificar novas mensagens em conversas existentes
        for (const conv of conversations) {
          if (new Date(conv.updated_at) > lastCheck) {
            const messages = await ChatService.getMessages(conv.id);
            const newMessages = messages.filter(msg => 
              new Date(msg.timestamp) > lastCheck && msg.type === 'user'
            );

            if (newMessages.length > 0) {
              const notification: Notification = {
                id: `msg-${Date.now()}-${conv.id}`,
                type: 'new_message',
                title: 'Nova mensagem',
                message: `${conv.user_name || 'Usuário'} enviou uma mensagem`,
                timestamp: new Date(),
                conversationId: conv.id,
                isRead: false
              };

              setNotifications(prev => [notification, ...prev]);
              
              // Toast para notificação visual
              toast({
                title: notification.title,
                description: notification.message,
                duration: 5000
              });

              // Notificação do navegador se permitido
              if (Notification.permission === 'granted') {
                new Notification(notification.title, {
                  body: notification.message,
                  icon: '/favicon.ico'
                });
              }
            }
          }
        }

        // Adicionar notificações para novas conversas
        newConversations.forEach(conv => {
          const notification: Notification = {
            id: `conv-${Date.now()}-${conv.id}`,
            type: 'new_conversation',
            title: 'Nova conversa',
            message: `${conv.user_name || 'Usuário'} iniciou uma conversa`,
            timestamp: new Date(),
            conversationId: conv.id,
            isRead: false
          };

          setNotifications(prev => [notification, ...prev]);
          
          toast({
            title: notification.title,
            description: notification.message,
            duration: 5000
          });

          if (Notification.permission === 'granted') {
            new Notification(notification.title, {
              body: notification.message,
              icon: '/favicon.ico'
            });
          }
        });

        setLastCheck(new Date());
      } catch (error) {
        console.error('Erro ao verificar notificações:', error);
      }
    };

    // Solicitar permissão para notificações
    if (Notification.permission === 'default') {
      Notification.requestPermission();
    }

    // Verificar imediatamente e depois a cada 10 segundos
    checkForUpdates();
    const interval = setInterval(checkForUpdates, 10000);

    return () => clearInterval(interval);
  }, [lastCheck, toast]);

  const unreadCount = notifications.filter(n => !n.isRead).length;

  const markAsRead = (notificationId: string) => {
    setNotifications(prev =>
      prev.map(n => n.id === notificationId ? { ...n, isRead: true } : n)
    );
  };

  const markAllAsRead = () => {
    setNotifications(prev =>
      prev.map(n => ({ ...n, isRead: true }))
    );
  };

  const removeNotification = (notificationId: string) => {
    setNotifications(prev =>
      prev.filter(n => n.id !== notificationId)
    );
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      {/* Botão de notificações */}
      <button
        onClick={() => setShowNotifications(!showNotifications)}
        className="relative bg-gray-800/90 backdrop-blur-sm border border-gray-700 rounded-xl p-3 
                 hover:bg-gray-700/90 transition-colors shadow-lg"
      >
        <Bell className="w-6 h-6 text-white" />
        {unreadCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full 
                         w-5 h-5 flex items-center justify-center font-bold">
            {unreadCount > 9 ? '9+' : unreadCount}
          </span>
        )}
      </button>

      {/* Painel de notificações */}
      {showNotifications && (
        <div className="absolute top-14 right-0 bg-gray-800/95 backdrop-blur-lg border border-gray-700 
                      rounded-xl shadow-2xl w-80 max-h-96 overflow-hidden">
          {/* Header */}
          <div className="p-4 border-b border-gray-700 flex items-center justify-between">
            <h3 className="font-semibold text-white">Notificações</h3>
            <div className="flex items-center gap-2">
              {unreadCount > 0 && (
                <button
                  onClick={markAllAsRead}
                  className="text-xs text-indigo-400 hover:text-indigo-300"
                >
                  Marcar todas como lidas
                </button>
              )}
              <button
                onClick={() => setShowNotifications(false)}
                className="text-gray-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Lista de notificações */}
          <div className="max-h-64 overflow-y-auto">
            {notifications.length === 0 ? (
              <div className="p-4 text-center text-gray-400">
                <Bell className="w-8 h-8 mx-auto mb-2 opacity-50" />
                <p className="text-sm">Nenhuma notificação</p>
              </div>
            ) : (
              notifications.slice(0, 10).map((notification) => (
                <div
                  key={notification.id}
                  className={`p-3 border-b border-gray-700/50 hover:bg-gray-700/30 transition-colors cursor-pointer ${
                    !notification.isRead ? 'bg-indigo-900/20' : ''
                  }`}
                  onClick={() => markAsRead(notification.id)}
                >
                  <div className="flex items-start gap-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                      notification.type === 'new_message' 
                        ? 'bg-blue-600' 
                        : 'bg-green-600'
                    }`}>
                      {notification.type === 'new_message' ? (
                        <MessageSquare className="w-4 h-4 text-white" />
                      ) : (
                        <User className="w-4 h-4 text-white" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium text-white text-sm">
                          {notification.title}
                        </h4>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            removeNotification(notification.id);
                          }}
                          className="text-gray-400 hover:text-white"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </div>
                      <p className="text-gray-300 text-xs truncate">
                        {notification.message}
                      </p>
                      <span className="text-gray-500 text-xs">
                        {notification.timestamp.toLocaleTimeString('pt-BR')}
                      </span>
                    </div>
                    {!notification.isRead && (
                      <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationSystem;
