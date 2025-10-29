import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react({
      // Configuração otimizada do React Fast Refresh
      fastRefresh: true,
    })
  ],

  // Otimizações de build para produção
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Separa React e dependências core
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          // Separa UI libraries
          'ui-vendor': ['styled-components', 'react-icons', '@splidejs/react-splide'],
          // Separa utilities
          'utils-vendor': ['axios', 'react-toastify'],
        },
      },
    },
    // Aumenta o limite de chunk size warning
    chunkSizeWarningLimit: 600,
  },

  server: {
    port: 5173,
    host: true,
    open: true, // Abre o browser automaticamente

    // Configuração de watch otimizada para Windows
    watch: {
      usePolling: true, // Essencial para Windows detectar mudanças
      interval: 100, // Verifica mudanças a cada 100ms
    },

    // Configuração de HMR (Hot Module Replacement)
    hmr: {
      overlay: true, // Mostra erros na tela
      timeout: 5000,
    },

    // Configuração de CORS
    cors: true,
  },

  // Otimizações de build para desenvolvimento
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'styled-components'
    ]
  },

  // Melhorar performance do dev server
  esbuild: {
    logOverride: { 'this-is-undefined-in-esm': 'silent' }
  },
});
