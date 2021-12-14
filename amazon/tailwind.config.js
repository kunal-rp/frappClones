module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#232f3e',
      },
      flexGrow: {
        '2': 2,
        '5': 5
      }
    },
  },
  plugins: [],
}
