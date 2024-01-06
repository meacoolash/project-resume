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
        background: 'var(--color-background)',
        text: 'var(--color-text)',       
        effect1: 'var(--color-effect--1)',
        effect2: 'var(--color-effect--2)',
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
