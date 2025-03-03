
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
  // Set base to '/' for absolute paths which work better with GitHub Pages
  base: '/',
  // Add server configuration with port 8080
  server: {
    port: 8080
  },
  build: {
    // Ensure proper MIME types
    assetsInlineLimit: 0,
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  }
})
