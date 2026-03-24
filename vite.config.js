import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync, existsSync } from 'node:fs'
import { resolve } from 'node:path'

// Live site: https://effectt.aipresso.uk/ (subdomain — not apex aipresso.uk)
// Source: https://github.com/Sumedh1599/Effectt-website
export default defineConfig(({ command }) => ({
  base: '/',
  plugins: [
    react(),
    {
      name: 'spa-fallback-404',
      writeBundle(options) {
        if (command !== 'build' || !options.dir) return
        const indexHtml = resolve(options.dir, 'index.html')
        if (existsSync(indexHtml)) {
          copyFileSync(indexHtml, resolve(options.dir, '404.html'))
        }
      },
    },
  ],
  build: {
    sourcemap: false,
    cssMinify: true,
  },
}))
