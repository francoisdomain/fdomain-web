
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const rootElement = document.getElementById("root");

if (rootElement) {
  // Check if the app is already hydrated (for static site generation)
  if (rootElement.hasChildNodes()) {
    // Hydrate the app
    const root = createRoot(rootElement);
    root.render(<App />);
  } else {
    // Initial render
    const root = createRoot(rootElement);
    root.render(<App />);
  }
} else {
  console.error("Root element not found");
}
