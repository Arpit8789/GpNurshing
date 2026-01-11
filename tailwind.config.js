/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e9f0ff',
          100: '#d1e0ff',
          200: '#a3c1ff',
          300: '#75a2ff',
          400: '#4783ff',
          500: '#1857d8',
          600: '#1244aa',
          700: '#0c317c',
          800: '#071d4e',
          900: '#020a21',
        },
        secondary: {
          50: '#e6fbf6',
          100: '#c4f3e6',
          200: '#8de5cd',
          300: '#56d8b4',
          400: '#26c699',
          500: '#0c9f78',
          600: '#0a7e5f',
          700: '#075e47',
          800: '#043e2f',
          900: '#021f18',
        },
        accent: {
          50: '#fff3e0',
          100: '#ffe0b2',
          200: '#ffcc80',
          300: '#ffb74d',
          400: '#ffa726',
          500: '#fb8c00',
          600: '#ef6c00',
          700: '#e65100',
          800: '#bf360c',
          900: '#8e2400',
        },
        neutral: {
          50: '#f3f4f6',
          100: '#e5e7eb',
          200: '#d1d5db',
          300: '#9ca3af',
          400: '#6b7280',
          500: '#4b5563',
          600: '#374151',
          700: '#1f2937',
          800: '#111827',
          900: '#020617',
        },
        success: '#16a34a',
        warning: '#eab308',
        error: '#ef4444',
        info: '#0ea5e9',
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        display: ['Poppins', ...defaultTheme.fontFamily.sans],
        accent: ['Playfair Display', 'serif'],
      },
      boxShadow: {
        soft: '0 2px 15px rgba(0, 0, 0, 0.08)',
        medium: '0 4px 25px rgba(0, 0, 0, 0.12)',
        hard: '0 10px 40px rgba(0, 0, 0, 0.15)',
        glow: '0 0 30px rgba(24, 87, 216, 0.35)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulseSlow 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSlow: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.05)', opacity: '0.9' },
        },
      },
    },
  },
  plugins: [],
};
