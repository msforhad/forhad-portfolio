import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: import.meta.env.MODE === 'production' ? '/forhad-portfolio/' : '/',
  plugins: [
    tailwindcss(),
    react()
  ],
})

