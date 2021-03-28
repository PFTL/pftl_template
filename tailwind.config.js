module.exports = {
  purge: [
    './public/**/*.html',
    './css/**/*.css'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      'serif': ["'Playfair Display'"],
      'sans': ['Poppins'],
    }
  },
  variants: {
    extend: {},
  },
}
