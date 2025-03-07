
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Set base to '/' for absolute paths which work better with browser routing
  base: '/',
  // Add server configuration with port 8080
  server: {
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
    // Generate source maps for better debugging
    sourcemap: true,
    // Ensure clean URLs for better SEO
    outDir: 'dist'
  }
})
