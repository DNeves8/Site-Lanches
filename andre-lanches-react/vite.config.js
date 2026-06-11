import { defineConfig } from 'vite'
import react from '@vitejs/react-vite' // ou @vitejs/plugin-react

export default defineConfig({
  plugins: [react()],
  base: './'
})