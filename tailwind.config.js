const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  jit: true,
  content: [
    './assets/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './types/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    ...defaultTheme,
    colors: {
      black: '#000000',
      background: '#071013',
      foreground: '#E0F2FE',
      transparent: 'transparent',
      white: '#FFFFFF',
      whiteSmoke: '#f8f9fa',
      gray: '#888888',

      // buttons
      primary: '#0070F3',
      'primary-light': '#3291ff',
    },
    boxShadow: {
      ...defaultTheme.boxShadow,
      sm: '0px 4px 8px rgba(0,0,0,.12), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
      DEFAULT: '0 5px 10px rgba(0,0,0,.12)',
      md: '0 8px 30px rgba(0,0,0,.12)',
    },
    extend: {
      fontFamily: {
        JetBrainsMono: ['JetBrainsMono'],
      },
      fontSize: {
        h1: 'clamp(1.25rem, 1.0587rem + 0.8503vw, 1.875rem)',
        h2: 'clamp(1.15rem, 0.9663rem + 0.8163vw, 1.75rem)',
        h3: 'clamp(1.05rem, 0.8663rem + 0.8163vw, 1.65rem)',
        paragraph: 'clamp(0.75rem, 0.6735rem + 0.3401vw, 1rem)',
      },
    },
  },
}
