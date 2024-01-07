import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: 'rgba(var(--color-primary), <alpha-value>)',
        accent: 'rgba(var(--color-accent), <alpha-value>)',
        background: {
          body: 'var(--color-bg-body)',
          from: 'var(--color-bg-from)',
          via: 'var(--color-bg-via)',
          to: 'var(--color-bg-to)',
        },
        text: {
          DEFAULT: 'var(--color-text)', 
          accent: 'var(--color-text-accent)',      
        },
        orange: 'var(--color-orange)',
      },  
      fontFamily: {
        monsterrat: ["var(--font-monsterrat)"],
        playfair: ["var(--font-playfair-display)"],
        signika: ["var(--font-signika-negative)"],
        sans: ["var(--font-monsterrat)"],
      },
      animation: {
        "spin-slower": "spin 25s ease infinite",
        "spin-slow": "spin 15s ease-in-out infinite reverse",
      },
    }
  },
  plugins: [],
}
export default config
