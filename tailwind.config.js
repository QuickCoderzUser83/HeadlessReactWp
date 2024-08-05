/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#F58220',
        'brown': '#431407',
        'primary-500': '#f97316',
        'primary-400/20': '#fb923c33',
        default:{
          50: '#F8FAFC',
          100: '#f1f5f9',
          400: '#94a3b81a',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0F172A',
          950: '#020617'
        }
      },
      fontFamily:{
        'sans': ['ui-sans-serif','system-ui','sans-serif','Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji'],
      }
    },
  },
  plugins: [],
}

