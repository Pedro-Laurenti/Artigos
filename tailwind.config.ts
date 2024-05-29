/** @type {import('tailwindcss').Config} */

const tailwind = {
  darkMode: ['class'],

  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/containers/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    container: {
      center: true,
      screens: {
        xs:'480px',
        sm:'720px',
        lg: '960px',
        xl: '1140px',
        '2xl': '1200px',
      },
      padding: '15px'
    },
    extend: {

      colors: {
        /* appPurple */
      appBlue:{
        50:'#7cdbe6',
        100:'#0095A5',
        200:'#095F68',
        300:'#171E46',
        400:'#0B131A',
      },
      appRed:{
        100:'#BC000A',
        200:'#98171e',
        300:'#691419',
        400:'#420b0f',
      },
      appYellow:{
        100:'#E8B100',
        200:'#b28c10',
        300:'#846912',
        400:'#4b3c0a',
      },
      appGreen:{
        100:'#008E2B',
        200:'#0a7029',
        300:'#085720',
        400:'#022f10',
      },
      appGray:{
        100:'#FEFEFE',
        200:'#d5d5d5',
        300:'#787878',
        400:'#1f1f1f',
      },
      /* blogText:{
        100:"rgb(222 226 227)"
      } */
      },
      right:{
        12:"12rem"
      },
      animation: {
        loader: 'loader 0.6s infinite alternate'
      },
      keyframes: {
        loader: {
          to: {
            opacity: 0.1,
            transform: 'translate3d(0, -1rem, 0)'
          }
        }
      }
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/typography')],
}
export default tailwind
