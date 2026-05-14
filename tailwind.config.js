/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#363436',
        muted: '#777173',
        rose: '#cf8f80',
        roseDark: '#bd7f72',
        cream: '#fbf8f4',
        line: '#e8ddd6',
        gold: '#c9a887',
      },
      fontFamily: {
        sans: ['"Noto Sans JP"', 'system-ui', 'sans-serif'],
        serif: ['"Noto Serif JP"', 'serif'],
        roman: ['"Cormorant Garamond"', 'serif'],
      },
      boxShadow: {
        soft: '0 18px 50px rgba(139, 108, 91, .14)',
        card: '0 12px 32px rgba(114, 90, 78, .11)',
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        fadeUp: 'fadeUp .9s ease both',
        shimmer: 'shimmer 5s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
      },
    },
  },
  plugins: [],
}
