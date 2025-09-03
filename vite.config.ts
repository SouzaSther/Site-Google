import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    // Code splitting para reduzir bundle inicial
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          lucide: ['lucide-react'],
        },
      },
    },
    // Compressão e minificação
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    // Otimização de assets
    assetsInlineLimit: 4096,
    chunkSizeWarningLimit: 500,
  },
  // Performance optimizations
  server: {
    fs: {
      strict: true,
    },
  },
});
