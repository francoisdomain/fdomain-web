import { createRoot, hydrateRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const rootElement = document.getElementById("root");

if (!rootElement) {
  console.error("Root element not found");
} else {
  // Check if the page was pre-rendered (if we're running in a browser)
  const isPreRendered = 
    rootElement.hasChildNodes() && 
    typeof window !== 'undefined';

  if (isPreRendered) {
    // If the page was pre-rendered, hydrate it
    hydrateRoot(rootElement, <App />);
  } else {
    // Otherwise, do a regular render
    createRoot(rootElement).render(<App />);
  }
}

// This helps react-snap know when the app is ready to be crawled
if (typeof window !== 'undefined') {
  window.snapSaveState = () => ({
    __PRERENDERED: true
  });
}
