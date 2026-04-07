/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: '#FF6B2C', light: '#FF8F5C', dark: '#E55A1B' },
        accent: { yellow: '#FFBE2E', red: '#E84545', teal: '#2EC4B6', blue: '#3B82F6' },
        warm: { white: '#FFFBF7', gray: '#F7F5F2' },
        dark: { DEFAULT: '#1A1A2E', text: '#555770', light: '#8E8EA0' },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      borderRadius: {
        card: '16px',
      },
    },
  },
  plugins: [],
}
