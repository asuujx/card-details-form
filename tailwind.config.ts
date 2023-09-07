import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'mobile': "url('/images/bg-main-mobile.png')",
        'desktop': "url('/images/bg-main-desktop.png')"
      },
    },
  },
  plugins: [],
}
export default config
