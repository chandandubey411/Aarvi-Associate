/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#C8A46B',
          light: '#D4B98A',
          dark: '#A8843B',
        },
        dark: {
          DEFAULT: '#111111',
          800: '#1A1A1A',
          700: '#222222',
          600: '#2D2D2D',
          500: '#3D3D3D',
        },
        cream: {
          DEFAULT: '#F8F7F4',
          dark: '#EEE9E0',
        },
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #C8A46B 0%, #A8843B 100%)',
        'dark-gradient': 'linear-gradient(135deg, #111111 0%, #2D2D2D 100%)',
      },
      boxShadow: {
        'gold': '0 4px 30px rgba(200, 164, 107, 0.3)',
        'gold-lg': '0 8px 60px rgba(200, 164, 107, 0.4)',
        'luxury': '0 25px 50px rgba(0, 0, 0, 0.15)',
        'luxury-lg': '0 35px 80px rgba(0, 0, 0, 0.2)',
      },
      borderRadius: {
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-gold': 'pulseGold 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGold: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.7 },
        },
      },
    },
  },
  plugins: [],
}