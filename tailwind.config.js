module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'accent-yellow' : '#FCE762',
        'tertiary' : '#555555',
        'secondary' : '#333333',
        'primary' : '#222222',
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
