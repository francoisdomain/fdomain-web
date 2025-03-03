
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
  // Set base to '/' for proper path resolution
  base: '/',
  // Add server configuration with port 8080
  server: {
    port: 8080,
    // Ensure proper MIME types for module scripts
    fs: {
      strict: true,
    }
  },
  // Ensure proper build settings for GitHub Pages
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // Generate a proper manifest
    manifest: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
        },
        // Ensure proper file paths and MIME types
        assetFileNames: 'assets/[name].[ext]',
        chunkFileNames: 'assets/[name].[hash].js',
        entryFileNames: 'assets/[name].[hash].js',
      },
    },
  }
})
