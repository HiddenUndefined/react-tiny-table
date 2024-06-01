import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // CSS
  css: {
    preprocessorOptions: {
      sass: {
        additionalData: '@import "@styles/variables.sass"\n'
      }
    }
  },
  // Aliases
  resolve: {
    alias: {
      '@core': resolve(__dirname, './src/core'),
      '@components': resolve(__dirname, './src/components'),
      '@styles': resolve(__dirname, './src/styles'),
      '@utils': resolve(__dirname, './src/utils')
    }
  }
})
