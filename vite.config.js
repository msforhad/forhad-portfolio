import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/



export default defineConfig({
  plugins: [
    tailwindcss(),
    react()
  ],
  // -----git hub hosting code-----
  base: '/forhad-portfolio/', // 🛠️ important for GitHub Pages
})

