import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      '2xl': '1800px',
    },
    extend: {
      borderRadius: {
        sm: '4px',
      },
      fontSize: {
        h1: [
          '36px',
          {
            lineHeight: '1',
            letterSpacing: '-0.01em',
          },
        ],
        'h1-md': '40px',
        'h1-lg': [
          '55px',
          {
            lineHeight: '1.18182',
            letterSpacing: '-0.02em',
          },
        ],
        h2: ['28px', { lineHeight: '1.2' }],
        'h2-md': '36px',
        'h2-lg': ['46px', { lineHeight: '1.19565' }],
        h3: ['22px', { lineHeight: '1.2' }],
        'h3-md': '26px',
        'h3-lg': ['30px', { lineHeight: '1.26667' }],
        h4: ['18px', { lineHeight: '1.2' }],
        'h4-md': '20px',
        'h4-lg': ['22px', { lineHeight: '1.36364' }],
        h5: ['20px', { lineHeight: '1.2' }],
        'h5-lg': ['18px', { lineHeight: '1.55556' }],
        h6: ['16px', { lineHeight: '1.5' }],
        'p-big': '22px',
        'p-big-md': '18px',
        'p-big-lg': '22px',
      },
      fontFamily: {
        body: ['var(--font-roboto)', 'Helvetica', 'Arial', 'sans-serif'],
      },
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
        'dark-charcoal': '#333',
        'outer-space': '#323946',
        'picton-blue': '#44bef1',
        'ball-blue': '#229dd1',
      },
    },
  },
  plugins: [],
};
export default config;
