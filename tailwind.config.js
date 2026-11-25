/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50: '#f0f7f3',
          100: '#dceee3',
          200: '#bcdfcb',
          300: '#91c9ad',
          400: '#61ac8a',
          500: '#3d8f6d',
          600: '#2c7356',
          700: '#245c46',
          800: '#1e4a39',
          900: '#163a29',
          950: '#0b2016',
        },
        champagne: {
          50: '#fdfcf7',
          100: '#f9f6e9',
          200: '#f2ebd0',
          300: '#e7dbae',
          400: '#d9c485',
          500: '#c5a059',
          600: '#b18744',
          700: '#926a37',
          800: '#775532',
          900: '#64472d',
          950: '#392515',
        },
        ivory: {
          50: '#fdfcf9',
          100: '#faf8f5',
          200: '#f5f2eb',
          300: '#ede8dc',
          400: '#ddd4c3',
          500: '#c7bba6',
          600: '#aba08a',
          700: '#8c826e',
          800: '#726a5b',
          900: '#5e574b',
          950: '#322e27',
        },
        gold: {
          50: '#fdf8ed',
          100: '#f9edcf',
          200: '#f2d99b',
          300: '#eac060',
          400: '#e4a832',
          500: '#c5a059',
          600: '#b8780f',
          700: '#96590e',
          800: '#7c4712',
          900: '#683b13',
          950: '#3c1d05',
        },
        charcoal: {
          50: '#f5f5f5',
          100: '#e9e9e9',
          200: '#d0d0d0',
          300: '#ababab',
          400: '#808080',
          500: '#666666',
          600: '#525252',
          700: '#3d3d3d',
          800: '#1a1c1b',
          900: '#121413',
          950: '#0c0e0d',
        },
        brand: {
          primary: '#C5A059',
          forest: '#0B2016',
          dark: '#0C0E0D',
          ivory: '#FAF8F5',
          accent: '#D4AF37',
        }
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #C5A059 0%, #E5C158 50%, #C5A059 100%)',
        'forest-gradient': 'linear-gradient(180deg, #0B2016 0%, #163A29 100%)',
        'forest-overlay': 'linear-gradient(to right, rgba(7, 22, 15, 0.92) 0%, rgba(11, 32, 22, 0.85) 50%, rgba(11, 32, 22, 0.65) 100%)',
        'dark-gradient': 'linear-gradient(180deg, #0c0e0d 0%, #161a18 100%)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'fade-in': 'fadeIn 0.4s ease forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}
