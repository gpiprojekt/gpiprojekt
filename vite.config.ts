import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// VITE_BASE_PATH=/gpiprojekt/ npm run build  — lokalny nginx
// npm run build                               — Cloudflare Pages (root)
export default defineConfig(() => ({
  base: process.env.VITE_BASE_PATH ?? "/",
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
}))
