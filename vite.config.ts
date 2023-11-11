import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@types": './tsconfig.path.json'
    }
  },
  server: {
    port: 3000
  }
})
