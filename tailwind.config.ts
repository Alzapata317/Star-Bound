import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    screens: {
      'pm-sm': { 'raw': '(min-width: 0px) and (orientation: portrait)' },
      'lm-sm': { 'raw': '(min-width: 0px) and (orientation: landscape)' },
      'pm-md': { 'raw': '(min-width: 641px) and (orientation: portrait)' },
      'lm-md': { 'raw': '(min-width: 850px) and (orientation: landscape)' },
      'pm-lg': { 'raw': '(min-width: 1201px) and (orientation: portrait)' },
      'lm-lg': { 'raw': '(min-width: 1201px) and (orientation: landscape)' },
      'pm-xl': { 'raw': '(min-width: 1800px) and (orientation: portrait)' },
      'lm-xl': { 'raw': '(min-width: 1800px) and (orientation: landscape)' },
    },
  },
  plugins: [],
};
export default config;
