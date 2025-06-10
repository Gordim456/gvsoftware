
import { openDB, DBSchema, IDBPDatabase } from 'idb';
import { EncryptionService } from './encryption';

interface CacheDB extends DBSchema {
  conversations: {
    key: string;
    value: {
      id: string;
      data: any;
      timestamp: number;
      encrypted: boolean;
    };
  };
  messages: {
    key: string;
    value: {
      id: string;
      conversationId: string;
      data: any;
      timestamp: number;
      encrypted: boolean;
    };
  };
  analytics: {
    key: string;
    value: {
      id: string;
      event: string;
      data: any;
      timestamp: number;
    };
  };
}

interface ConversationData {
  id: string;
  [key: string]: any;
}

interface MessageData {
  id: string;
  [key: string]: any;
}

class CacheService {
  private db: IDBPDatabase<CacheDB> | null = null;
  private readonly CACHE_DURATION = 30 * 60 * 1000; // 30 minutos

  async init() {
    try {
      this.db = await openDB<CacheDB>('GVSoftwareCache', 1, {
        upgrade(db) {
          if (!db.objectStoreNames.contains('conversations')) {
            db.createObjectStore('conversations', { keyPath: 'id' });
          }
          if (!db.objectStoreNames.contains('messages')) {
            const messagesStore = db.createObjectStore('messages', { keyPath: 'id' });
            messagesStore.createIndex('conversationId', 'conversationId');
          }
          if (!db.objectStoreNames.contains('analytics')) {
            db.createObjectStore('analytics', { keyPath: 'id' });
          }
        },
      });
    } catch (error) {
      console.error('Erro ao inicializar cache:', error);
    }
  }

  async cacheConversations(conversations: ConversationData[], encrypt = true) {
    if (!this.db) await this.init();
    if (!this.db) return;

    try {
      const tx = this.db.transaction('conversations', 'readwrite');
      const store = tx.objectStore('conversations');

      for (const conversation of conversations) {
        const data = encrypt ? EncryptionService.encrypt(conversation) : conversation;
        const cacheItem = {
          id: conversation.id,
          data,
          timestamp: Date.now(),
          encrypted: encrypt
        };
        await store.put(cacheItem);
      }
      await tx.done;
    } catch (error) {
      console.error('Erro ao cachear conversas:', error);
    }
  }

  async getCachedConversations(decrypt = true): Promise<any[]> {
    if (!this.db) await this.init();
    if (!this.db) return [];

    try {
      const tx = this.db.transaction('conversations', 'readonly');
      const store = tx.objectStore('conversations');
      const cached = await store.getAll();

      const validCached = cached.filter(item => 
        Date.now() - item.timestamp < this.CACHE_DURATION
      );

      return validCached.map(item => {
        if (item.encrypted && decrypt) {
          return EncryptionService.decrypt(item.data);
        }
        return item.data;
      });
    } catch (error) {
      console.error('Erro ao recuperar conversas do cache:', error);
      return [];
    }
  }

  async cacheMessages(conversationId: string, messages: MessageData[], encrypt = true) {
    if (!this.db) await this.init();
    if (!this.db) return;

    try {
      const tx = this.db.transaction('messages', 'readwrite');
      const store = tx.objectStore('messages');

      for (const message of messages) {
        const data = encrypt ? EncryptionService.encrypt(message) : message;
        const cacheItem = {
          id: message.id,
          conversationId,
          data,
          timestamp: Date.now(),
          encrypted: encrypt
        };
        await store.put(cacheItem);
      }
      await tx.done;
    } catch (error) {
      console.error('Erro ao cachear mensagens:', error);
    }
  }

  async getCachedMessages(conversationId: string, decrypt = true): Promise<any[]> {
    if (!this.db) await this.init();
    if (!this.db) return [];

    try {
      const tx = this.db.transaction('messages', 'readonly');
      const store = tx.objectStore('messages');
      const index = store.index('conversationId');
      const cached = await index.getAll(IDBKeyRange.only(conversationId));

      const validCached = cached.filter(item => 
        Date.now() - item.timestamp < this.CACHE_DURATION
      );

      return validCached.map(item => {
        if (item.encrypted && decrypt) {
          return EncryptionService.decrypt(item.data);
        }
        return item.data;
      });
    } catch (error) {
      console.error('Erro ao recuperar mensagens do cache:', error);
      return [];
    }
  }

  async clearExpiredCache() {
    if (!this.db) await this.init();
    if (!this.db) return;

    try {
      const storeNames = ['conversations', 'messages', 'analytics'] as const;
      
      for (const storeName of storeNames) {
        const tx = this.db.transaction(storeName, 'readwrite');
        const store = tx.objectStore(storeName);
        const all = await store.getAll();
        
        for (const item of all) {
          if (Date.now() - item.timestamp > this.CACHE_DURATION) {
            await store.delete(item.id);
          }
        }
        await tx.done;
      }
    } catch (error) {
      console.error('Erro ao limpar cache expirado:', error);
    }
  }
}

export const cacheService = new CacheService();
