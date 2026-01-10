import path from "path" // 1. Import path
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    allowedHosts: true, // Crucial for Vite 6
    hmr: {
      clientPort: 443, // Forces the live-reload to use the secure tunnel port
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // 2. Add this alias mapping
    },
  },
})