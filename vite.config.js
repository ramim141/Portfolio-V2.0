import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // GitHub Pages deployment configuration
  base: '/portfolio-ramim/',
  
  // Build optimizations
  build: {
    rollupOptions: {
      output: {
        // Manual code splitting
        manualChunks: {
          // Vendor libraries
          vendor: ['react', 'react-dom'],
          animations: ['framer-motion'],
          icons: ['react-icons', 'lucide-react'],
          ui: ['@radix-ui/react-slot', 'class-variance-authority', 'clsx', 'tailwind-merge'],
        }
      }
    },
    // Enable source maps for production debugging
    sourcemap: false,
    // Set chunk size warning limit
    chunkSizeWarningLimit: 1000,
    // Enable CSS code splitting
    cssCodeSplit: true,
    // Minification
    minify: 'esbuild',
    // Target modern browsers for smaller bundles
    target: 'es2020'
  },
  
  // Development server optimizations
  server: {
    hmr: {
      overlay: false
    }
  },
  
  // Asset optimization
  assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.svg', '**/*.webp'],
  
  // Performance optimizations
  esbuild: {
    // Remove console.log in production
    drop: ['console', 'debugger'],
  },
  
  // Resolve configuration
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
      '@pages': fileURLToPath(new URL('./src/pages', import.meta.url)),
      '@assets': fileURLToPath(new URL('./src/assets', import.meta.url))
    }
  }
})
