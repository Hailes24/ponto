/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./source/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        appwhite: '#FFFFFF',
        appwhitelow: '#F3F6FA',
        appblack: '#282A31',
        appblue: '#3D70FF',
        appbluelight: '#7598FD',
        appgreen: '#53B052',
      },
      fontFamily: {
        regular: 'Inter_400Regular',
        semibold: 'Inter_600SemiBold',
        bold: 'Inter_700Bold',
        extrabold: 'Inter_800ExtraBold'
      }
    },
  },
  plugins: [],
}

