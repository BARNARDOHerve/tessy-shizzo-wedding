/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'neon-green': '#39FF14',
        'electric-blue': '#00D9FF',
        'dark-bg': '#0a0a0a',
        'dark-surface': '#1a1a1a',
        // Modern Minimalist Wedding Palette
        'sage': {
          50: '#f6f8f6',
          100: '#e3e9e3',
          200: '#c7d3c7',
          300: '#a3b5a3',
          400: '#7d957d',
          500: '#5f7a5f',
          600: '#4a614a',
          700: '#3d4f3d',
          800: '#324032',
          900: '#2a352a',
        },
        'gold': {
          50: '#fdfbf3',
          100: '#faf5e0',
          200: '#f4e8b8',
          300: '#ecd788',
          400: '#e3c156',
          500: '#d4a72c',
          600: '#b88b22',
          700: '#9a6e1e',
          800: '#7f5820',
          900: '#6b491e',
        },
      },
      fontFamily: {
        sans: ['Montserrat', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
      },
    },
  },
  plugins: [],
}
