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
        'half-rotate-cw': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(180deg)' },
        },
        'half-rotate-ccw': {
          '0%': { transform: 'rotate(180deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
      },
      animation: {
        'half-rotate-cw': 'half-rotate-cw 0.5s ease-in-out both',
        'half-rotate-ccw': 'half-rotate-ccw 0.5s ease-in-out both',
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
