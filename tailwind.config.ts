import type { Config } from 'tailwindcss'
const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        light: {
          background: '#FCEFF9',
          yellow: '#FEC503',
          yellowHover: '#E9B400',
          blue: '#26425A',
          fonts: '#0C1618',
        },
      },
      fontFamily: {
        sequel: ['sequel-sans', 'sans-serif'],
        giovanni: ['giovanni', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
