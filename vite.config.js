import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/mthbrz.github.io/react-app/",
  build: {
    outDir: 'docs'
  }
})
