import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',          // Garante que o Vercel detecte a pasta de saída
    emptyOutDir: true,       // Limpa a pasta antes do build
    chunkSizeWarningLimit: 1000, // Aumenta o limite para avisos de chunk grande
  },
  optimizeDeps: {
    exclude: ['lucide-react'], // Mantém a exclusão se necessário
    include: ['react', 'react-dom'], // Força inclusão de dependências críticas
  },
  server: {
    port: 3000,              // Padroniza a porta (opcional)
  }
});
