// vite.config.js

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/', // Para domínio próprio. Se for GitHub Pages, troque para '/NOME_DO_REPO/'
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    assetsDir: 'assets'
  }
})
