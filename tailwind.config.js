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
      background: '#1E1E1E',
      foreground: '#E0F2FE',
      transparent: 'transparent',
      white: '#FFFFFF',

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
    },
  },
}
