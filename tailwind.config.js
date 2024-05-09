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
