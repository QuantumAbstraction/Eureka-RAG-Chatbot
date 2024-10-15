import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#D9E6F2',
        'custom-text': '#3B4D61',
        'custom-border': '#8FA3BF',
        'custom-highlight': '#B0C4DE',
        'custom-secondary-bg': '#F0F8FF',
      },
      animation: {
        bounce200: 'bounce 1s infinite 400ms',
        bounce400: 'bounce 1s infinite 800ms',
    },

    },
  },
  plugins: [],
}
export default config
