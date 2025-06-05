/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}','./node_modules/flowbite/**/*.js'],
  theme: {
    extend: {
      colors: {
        primary: '#24292F',
        secondary: '#2B3036',
        green: '#9CFF00',
        red: '#E53935',
        orange: '#FFA100',
        gray: {
          900: '#353A40',
          800: '#A8A8A8',
          700: '#95A3AB',
        },
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
