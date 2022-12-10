import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' // #1 Añado path

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 2 Configuramos alias @ para mis carpetas
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
