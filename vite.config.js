import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  root: './src',
  publicDir: '../public',
  build: {
    outDir: '../dist',
  },
})
