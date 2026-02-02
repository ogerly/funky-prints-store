import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Fredoka One"', 'cursive'],
        sans: ['"Poppins"', 'sans-serif'],
      },
      colors: {
        'funky-pink': '#FF1B8D',
        'funky-purple': '#9D4EDD',
        'funky-orange': '#FF6B35',
        'funky-blue': '#4CC9F0',
      }
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        funky: {
          "primary": "#FF1B8D",
          "secondary": "#9D4EDD",
          "accent": "#4CC9F0",
          "neutral": "#1a1a1a",
          "base-100": "#ffffff",
          "info": "#4CC9F0",
          "success": "#10b981",
          "warning": "#FF6B35",
          "error": "#ef4444",
        },
      },
    ],
  },
} satisfies Config
