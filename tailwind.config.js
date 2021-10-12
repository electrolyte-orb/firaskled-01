const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['src/**/*.tsx', 'src/**/*.ts'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Inter', 'system-ui', 'sans-serif']
    },
    extend: {
      active: [],
      colors: {
        orange: colors.orange
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
