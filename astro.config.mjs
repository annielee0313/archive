import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://visualizedata.github.io',
  // Use /archive base for GitHub Actions builds, / for local dev
  base: process.env.GITHUB_ACTIONS ? '/archive' : '/',
  
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react()],
})