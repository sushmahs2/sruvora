/** @type {import('tailwindcss').Config} */
const token = (name) => `rgb(var(${name}) / <alpha-value>)`

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // ---- Static palette -------------------------------------------------
        forest: {
          50: '#EEF5F0',
          100: '#D9E8DE',
          200: '#B5D1BE',
          300: '#86B197',
          400: '#548D6C',
          500: '#2D6A4F',
          600: '#235A42',
          700: '#1B4332', // brand forest green
          800: '#163829',
          900: '#102B1F',
          950: '#0A1C13',
        },
        beige: {
          50: '#FDFBF7',
          100: '#FAF6F0', // primary page background
          200: '#F3ECDD', // alternate band
          300: '#E8DEC8',
          400: '#D8CAAB',
        },
        gold: {
          DEFAULT: '#C5A059',
          bright: '#D4AF37',
          light: '#E3C77A',
          deep: '#9A7B2F',
        },
        // ---- Semantic tokens (flip automatically inside `.on-dark`) ---------
        ink: { DEFAULT: token('--ink'), soft: token('--ink-soft'), mute: token('--ink-mute') },
        line: token('--line'),
        accent: token('--accent'),
        page: { DEFAULT: token('--bg'), alt: token('--bg-alt') },
        btn: { DEFAULT: token('--btn-bg'), fg: token('--btn-fg'), hover: token('--btn-hover') },
      },
      fontFamily: {
        heading: ['"Bricolage Grotesque"', 'system-ui', 'sans-serif'],
        body: ['"Instrument Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 0 rgba(26,26,26,.04), 0 18px 40px -22px rgba(27,67,50,.45)',
      },
    },
  },
  plugins: [],
}
