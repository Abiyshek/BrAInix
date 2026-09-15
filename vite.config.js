import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsInlineLimit: 0,
    rollupOptions: {
      output: {
        manualChunks: { three: ['three'], react: ['react', 'react-dom'] },
      },
    },
  },
});
