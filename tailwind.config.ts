import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: ['class'],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: '#FAF9F7',
          soft: '#E8DCC8',
          dark: '#1A1814',
        },
        accent: '#B78A5F',
        neutral: {
          100: '#FAF9F7',
          200: '#F3E8D8',
          300: '#E8DCC8',
          700: '#7D6B5F',
          900: '#3E342E',
        },
      },
      boxShadow: {
        soft: '0 24px 80px rgba(23, 15, 11, 0.08)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};

export default config;
