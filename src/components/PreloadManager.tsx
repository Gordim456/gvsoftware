
import React, { useEffect } from 'react';

interface PreloadManagerProps {
  images?: string[];
  scripts?: string[];
  styles?: string[];
}

const PreloadManager = ({ images = [], scripts = [], styles = [] }: PreloadManagerProps) => {
  useEffect(() => {
    // Preload de imagens críticas
    const preloadImages = () => {
      const criticalImages = [
        '/hero-image.svg',
        '/about-image.svg',
        '/services-process.svg',
        '/portfolio-process.svg',
        ...images
      ];

      criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
      });
    };

    // Preload de scripts
    const preloadScripts = () => {
      scripts.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'script';
        link.href = src;
        document.head.appendChild(link);
      });
    };

    // Preload de estilos
    const preloadStyles = () => {
      styles.forEach(href => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'style';
        link.href = href;
        document.head.appendChild(link);
      });
    };

    // Preload de fontes críticas
    const preloadFonts = () => {
      const fonts = [
        'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap'
      ];

      fonts.forEach(href => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'style';
        link.href = href;
        document.head.appendChild(link);
      });
    };

    // DNS prefetch para domínios externos
    const dnsPrefetch = () => {
      const domains = [
        '//fonts.googleapis.com',
        '//fonts.gstatic.com',
        '//www.googletagmanager.com',
        '//mjawenqlewhvpixelutg.supabase.co'
      ];

      domains.forEach(href => {
        const link = document.createElement('link');
        link.rel = 'dns-prefetch';
        link.href = href;
        document.head.appendChild(link);
      });
    };

    preloadImages();
    preloadScripts();
    preloadStyles();
    preloadFonts();
    dnsPrefetch();
  }, [images, scripts, styles]);

  return null;
};

export default PreloadManager;
