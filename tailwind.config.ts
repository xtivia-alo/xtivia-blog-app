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
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(180deg)' },
        },
        'half-rotate-ccw': {
          from: { transform: 'rotate(180deg)' },
          to: { transform: 'rotate(0deg)' },
        },
      },
      animation: {
        'half-rotate-cw': 'half-rotate-cw 0.2s ease-in-out both',
        'half-rotate-ccw': 'half-rotate-ccw 0.2s ease-in-out both',
      },
      colors: {
        'outer-space': '#323946',
        'picton-blue': '#44bef1',
        'ball-blue': '#229dd1',
      },
    },
  },
  plugins: [],
};
export default config;
