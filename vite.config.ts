import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

import { cloudflare } from "@cloudflare/vite-plugin";

// VITE_BASE_PATH=/gpiprojekt/ npm run build  — lokalny nginx
// npm run build                               — Cloudflare Pages (root)
export default defineConfig(() => ({
  base: process.env.VITE_BASE_PATH ?? "/",
  plugins: [react(), tailwindcss(), cloudflare()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
}))