
/// <reference types="vite/client" />

interface Window {
  gtag: (
    key: string,
    trackingId: string,
    config: { [key: string]: any }
  ) => void;
  fbq: any;
  prerenderReady: boolean;
}
