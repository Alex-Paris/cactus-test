/** @type {import('tailwindcss').Config} */

import { withTV } from 'tailwind-variants/transformer'

export default withTV({
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],

  theme: {
    extend: {
      colors: {
        pink: '#DC1866',

        gray: '#EEEEEE',

        orange: '#FF9226',

        purple: '#7833FF',
        'purple-dark': '#5F29CC',
      },
    },
  },

  plugins: [],
})
