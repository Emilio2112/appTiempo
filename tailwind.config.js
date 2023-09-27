/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': {'min': '1px', 'max': '639px'},
      ...defaultTheme.screens,
    },
    extend: {
      keyframes: {
        drop: {
          '0%': {transform: 'translate(-10px, -10px)', opacity: 0.8},
          '100%': {transform: 'translate(60px, 50px)' , opacity: 0.2}
        },
        cloud: {
          '0%, 100%': {transform: 'translate(0px)'},
          '50%': {transform: 'translate(30px)'}
        },
        thunder: {
          '0%': {transform: 'translate(0px)', opacity: 1 },
          '10%': {opacity: 0.4},
          '20%': {opacity: 1},
          '30%': {opacity: 0.6},
          '40%': {opacity: 1},
          '50%': {transform: 'translate(0, 30px)', opacity: 0.4},
          '60%': {opacity: 1},
          '70%': {opacity: 0.6},
          '80%': {opacity: 1},
          '90%': {opacity: 0.4},
          '100%': {transform: 'translate(0px)', opacity: 1 }
        },
        mist: {
          '0%, 100%': {transform: 'translate(0px)', opacity: 0.8 },
          '25%': {transform: 'translate(-10px, 4px)'},
          '50%': {transform: 'translate(10px, 8px)', opacity: 0.5},
          '75%': {transform: 'translate(-10px, 12px)'}

        }
      },
      animation: {
        drop: 'drop 3s linear infinite',
        drop2: 'drop 2.7s linear infinite',
        drop3: 'drop 2.4s linear infinite',
        cloud: 'cloud 3s linear infinite',
        thunder: 'thunder 1.2s linear infinite',
        thunder2: 'thunder 1.6s linear infinite',
        thunder3: 'thunder 1s linear infinite',
        mist1: 'mist 5s linear infinite',
        mist2: 'mist 5.5s linear infinite',
        mist3: 'mist 5.7s linear infinite'
      }
    },
  },
  plugins: [],
}

