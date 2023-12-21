import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      black: '#000000',
      red: '#DC0C2D',
      'light-red': '#E9677C',
      'light-gray': '#D9D9D9',
      gray: '#7E7E7E',
      'dark-gray': '#272727',
      green: '#51AD5C',
      'light-blue': '#1FB0FD',
      blue: '#2AAAFD',
      'dark-blue': '#18699F',
      yellow: '#F0DE25',
      'dark-yellow': '#A5900A',
    },
    listStyleType: {
      none: 'none',
      square: 'square',
    },
    extend: {
      gridTemplateColumns: {
        main: '285px, minmax(auto, 995px)',
      },
    },
  },
  plugins: [],
};
export default config;
