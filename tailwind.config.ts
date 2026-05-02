import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      darkGreen: '#072932',
      darkGreenTransparent: '#cbd2d4',
      tan: '#FFEBD8',
      brightGreen: '#1CFAC5',
      white: '#FCFCFC',
      whiteTransparent: 'rgba(252, 252, 252, 0.2)',
      grey: '#6E6E73',
      mediumGreen: '#273D45',
      lightGreen: '#516369'
    },
    fontFamily: {
      sans: ['var(--font-rethink-sans)', 'sans-serif'],
      mono: ['var(--font-ballinger-mono)', 'monospace']
    },
    extend: {
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(calc(-50% - 1.5rem))' },
        },
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
      },
    },
  },
  plugins: [],
};
export default config;
