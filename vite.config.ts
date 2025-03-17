
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { componentTagger } from "lovable-tagger"

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Set base to '/' for absolute paths which work better with browser routing
  base: '/',
  // Add server configuration with port 8080
  server: {
    host: "::",
    port: 8080,
    // Correctly configure SPA routing during development
    proxy: {
      // Redirect any 404 to index.html for SPA routing
      "/*": {
        target: "/index.html",
        rewrite: (path) => "/index.html",
      }
    }
  },
  build: {
    // Ensure proper MIME types
    assetsInlineLimit: 0,
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    },
    // Add option to copy public directory to build
    copyPublicDir: true
  }
}))
