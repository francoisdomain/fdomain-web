
// Custom type definitions for libraries without TypeScript support

// Window object extensions for react-snap
interface Window {
  // For Google analytics
  gtag: (
    command: 'config' | 'event' | 'js' | 'set', 
    targetId: string, 
    config?: { [key: string]: any }
  ) => void;
  
  // For Facebook Pixel
  fbq: (
    command: string,
    event: string,
    parameters?: { [key: string]: any }
  ) => void;
  
  // For Google Tag Manager
  dataLayer: any[];
  
  // For react-snap
  snapSaveState?: () => { __PRERENDERED: boolean };
}

// Declaring the module for react-snap
declare module 'react-snap' {
  export function run(options?: {
    destination?: string;
    include?: string[];
    userAgent?: string;
    // Add other options as needed
    [key: string]: any;
  }): Promise<void>;
}
