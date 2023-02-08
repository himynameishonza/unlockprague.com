module.exports = {
  darkMode: 'class',
  content: ['./src/components/**/*.{ts,tsx}', './src/pages/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["'Poppins'", 'sans-serif'],
        merri: ["'Merriweather'", 'serif'],
        open: ["'Open Sans'", 'sans-serif'],
      },
      keyframes: {
        movex: {
          '0%': { transform: 'translateX(0)' },
          '12.5%': { transform: 'translateX(15px)' },
          '25%': { transform: 'translateX(30px)' },
          '37.5%': { transform: 'translateX(15px)' },
          '50%': { transform: 'translateX(0px)' },
          '62.5%': { transform: 'translateX(-15px)' },
          '75%': { transform: 'translateX(-30px)' },
          '87.5%': { transform: 'translateX(-15px)' },
          '100%': { transform: 'translateX(0)' },
        },
        movey: {
          '0%': { transform: 'translateY(0)' },
          '12.5%': { transform: 'translateY(15px)' },
          '25%': { transform: 'translateY(30px)' },
          '37.5%': { transform: 'translateY(15px)' },
          '50%': { transform: 'translateY(0px)' },
          '62.5%': { transform: 'translateY(-15px)' },
          '75%': { transform: 'translateY(-30px)' },
          '87.5%': { transform: 'translateY(-15px)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        'move-x': 'movex 20s 2s linear infinite ',
        'move-y': 'movey 24s linear infinite',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
  ],
}
