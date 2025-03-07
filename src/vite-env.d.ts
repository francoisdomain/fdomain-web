
/// <reference types="vite/client" />

interface Window {
  gtag: (
    command: 'config' | 'event' | 'js' | 'set', 
    targetId: string, 
    config?: { [key: string]: any }
  ) => void;
  fbq: (
    command: string,
    event: string,
    parameters?: { [key: string]: any }
  ) => void;
  dataLayer: any[];
}
