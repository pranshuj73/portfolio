module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'white': '#FFFBFE',
        'accent-yellow' : '#FCE762',
        'secondary' : '#302A44',
        'primary' : '#201D2F',
        'accent-blue' : '#5299D3',
        'accent-red' : '#FB4B4E',
        'accent-green' : '#21D19F',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
