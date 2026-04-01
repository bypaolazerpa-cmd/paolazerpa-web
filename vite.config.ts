import { defineConfig } from 'vite'
import path from 'path'
import { fileURLToPath } from 'url'
import react from '@vitejs/plugin-react'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig(({ isSsrBuild }) => ({
  plugins: [
    react(),
  ],
  server: {
    host: '127.0.0.1',
    port: 5173,
  },
  preview: {
    host: '127.0.0.1',
    port: 4173,
  },
  css: {
    transformer: 'lightningcss',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  assetsInclude: ['**/*.svg', '**/*.csv', '**/*.jpg', '**/*.png', '**/*.pdf'],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: isSsrBuild
      ? undefined
      : {
          output: {
            manualChunks: {
              vendor: ['react', 'react-dom', 'react-router'],
            }
          }
        }
  }
}))
