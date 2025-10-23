import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react({
      // Configuração otimizada do React Fast Refresh
      fastRefresh: true,
    })
  ],

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
