import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './fragments/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        animatedgradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },

      },
      backgroundSize: {
        '300%': '300%',
      },
      animation: {
        gradient: 'animatedgradient 6s ease infinite alternate',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(125.08deg, #ff1a5c -40.09%, #006fba 242.25%)',
      },
      boxShadow: {
        'custom': '0px 17.7778px 53.3333px rgba(114, 18, 64, 0.4)',
      },
    },
  },
  plugins: [],
}
export default config
