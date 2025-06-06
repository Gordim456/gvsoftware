
declare global {
  interface Window {
    gtag: (command: string, trackingId: string, config?: any) => void;
  }
}

class AnalyticsService {
  private isInitialized = false;
  private trackingId = 'G-XXXXXXXXXX'; // Substitua pelo seu ID do Google Analytics

  init() {
    if (this.isInitialized) return;

    // Adicionar script do Google Analytics
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${this.trackingId}`;
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${this.trackingId}', {
        page_title: document.title,
        page_location: window.location.href
      });
    `;
    document.head.appendChild(script2);

    this.isInitialized = true;
  }

  trackEvent(eventName: string, parameters?: any) {
    if (!this.isInitialized) this.init();

    try {
      if (window.gtag) {
        window.gtag('event', eventName, {
          ...parameters,
          timestamp: new Date().toISOString()
        });
      }
    } catch (error) {
      console.error('Erro ao rastrear evento:', error);
    }
  }

  trackPageView(pagePath?: string) {
    if (!this.isInitialized) this.init();

    try {
      if (window.gtag) {
        window.gtag('config', this.trackingId, {
          page_path: pagePath || window.location.pathname,
          page_title: document.title,
          page_location: window.location.href
        });
      }
    } catch (error) {
      console.error('Erro ao rastrear visualização de página:', error);
    }
  }

  trackUserInteraction(element: string, action: string) {
    this.trackEvent('user_interaction', {
      element,
      action,
      page: window.location.pathname
    });
  }

  trackChatEvent(eventType: 'message_sent' | 'chat_opened' | 'chat_closed', data?: any) {
    this.trackEvent('chat_interaction', {
      event_type: eventType,
      ...data
    });
  }

  trackAdminAction(action: string, details?: any) {
    this.trackEvent('admin_action', {
      action,
      ...details
    });
  }
}

export const analytics = new AnalyticsService();
