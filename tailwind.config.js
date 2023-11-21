/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'green': '#00C49A',
        'bar-gray': '#E0E0E0',
        'black': '#313131',
        'blue': '#0978D5',
        'light-blue': '#CAE7FC',
        'outline-gray': '#ADADAD',
        'txt-gray': '#777777',
      },
      fontFamily: {
        "poppins": "var(--font-poppins)",
      },
      // backgroundImage: {
      //   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      //   'gradient-conic':
      //     'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      // },
    },
  },
  plugins: [],
}
