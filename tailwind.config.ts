import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        'half-rotate-cc': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(180deg)' },
        },
      },
      animation: {
        'half-rotate-cc': 'half-rotate-cc 0.5s ease-in-out forwards',
      },
      colors: {
        'picton-blue': '#44bef1',
        'ball-blue': '#229dd1',
      },
    },
  },
  plugins: [],
};
export default config;
