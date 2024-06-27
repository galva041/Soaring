/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        wave: {
          '0%, 100%': { transform: 'rotate(-7deg)' },
          '50%': { transform: 'rotate(7deg)' },
        },
        'grow-shrink': {
          '0%, 100%': { transform: 'scale(0.9)' },
          '50%': { transform: 'scale(1)' },
        },
        'load': {
          '0%': { transform: 'scaleX(0.2)' },
          '100%': { transform: 'scaleX(1)' }, 
        },
        'fly-in': {
          '0%': { transform: 'translate(100px, 100px) scale(0.6)' },
          '100%': { transform: 'translate(0px, 0px)' },
        },
        'focus': {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(0.9)' },
          '100%': { transform: 'scale(1)' },
        }
      },
      colors: {
        'green': '#00C49A',
        'leaf-green': '#4EAC5E',
        'bar-gray': '#E0E0E0',
        'black': '#313131',
        'blue': '#0978D5',
        'light-blue': '#CAE7FC',
        'dark-blue': '#06589A',
        'outline-gray': '#ADADAD',
        'txt-gray': '#777777',
        'gray-blue': '#EBF3FA',
        'yellow': '#FBAF00',
        'pink': '#FFA3AF',
        'purple': '#BEA7E5',
      },
      fontFamily: {
        "poppins": "var(--font-poppins)",
      },
      animation: {
        wave: 'wave 1s ease-in infinite',
        'grow-shrink': 'grow-shrink 5s infinite',
        'load': 'load 1.5s',
        'fly-in': 'fly-in 1.1s',
      }
      // backgroundImage: {
      //   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      //   'gradient-conic':
      //     'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      // },
    },

  },
  plugins: [],
}
