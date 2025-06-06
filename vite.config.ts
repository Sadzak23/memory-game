import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: { port: 3100 },
  resolve: {
    alias: {
      src: '/src',
    },
  },
});
