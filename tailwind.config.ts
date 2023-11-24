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
      borderRadius: {
        customSideNavBar: "0.375rem 0 0  0.375rem"
      },
      transitionDelay: {
        transitionSideNavBar: "box-shadow: -5px -5px 9px 4px rgba(125, 120, 120, 0.3) .2s, rgba(130, 116, 116, 0.5) .2s"
      }
    },
  },
  plugins: [],
}
export default config
