import type { Config } from 'tailwindcss'

const {nextui} = require("@nextui-org/react");
const defaultTheme = require('tailwindcss/defaultTheme')

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './sections/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '360px',
        ...defaultTheme.screens,
      },
      fontSize: {
        sm: '0.750rem',
        base: '1rem',
        xl: '1.333rem',
        '2xl': '1.777rem',
        '3xl': '2.369rem',
        '4xl': '3.158rem',
        '5xl': '4.210rem',
      },
      fontWeight: {
        normal: '400',
        bold: '700',
      },
    },
  },
  darkMode: "class",
  plugins: [nextui({
    themes: {
      light: {
        colors: {
          foreground: '#4b4f53',
          background: '#edf3f8',
          heading: '#121314',
        },
      },
      dark: {
        colors: {
          foreground: '#989ea3',
          background: '#121314',
          heading: '#edf3f8',
        },
      },
    },
  })],
}
export default config
