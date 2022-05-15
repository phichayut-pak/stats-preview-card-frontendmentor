module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'lexend': ['Lexend Deco', 'sans-serif']
      },
      colors: {
        'main': 'hsl(233, 47%, 7%)',
        'card': 'hsl(244, 38%, 16%)',
        'accent': 'hsl(277, 64%, 61%)',
        'mainParagraph': 'hsla(0, 0%, 100%, 0.75)',
        'statHeadings': 'hsla(0, 0%, 100%, 0.6)'
      }
    },
  },
  plugins: [],
}