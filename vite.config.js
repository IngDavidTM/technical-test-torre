import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/technical-test-torre/',
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://bio.torre.co',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
