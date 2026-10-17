import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// The collab micro-frontend serves its bundle as /app.js on port 8084
// (`bun run serve` in micro-frontend-vue-collab). Requests for
// /collab/app.js are forwarded there, in dev and in preview.
const collabUrl = 'http://localhost:8084/'
const proxy = {
  '/collab/': {
    target: collabUrl,
    changeOrigin: true,
    rewrite: (path) => path.replace(/^\/collab\//, '/')
  }
}

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: { proxy },
  preview: { proxy }
})
