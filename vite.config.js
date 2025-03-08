import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default {
  // other config...
  build: {
    rollupOptions: {
      external: [
        '@fortawesome/free-solid-svg-icons',
        '@fortawesome/react-fontawesome',
        '@fortawesome/fontawesome-svg-core'
      ]
    }
  }
}