// eslint-disable-next-line no-undef
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    opacity: ({ after }) => after(["disabled"]),
  },
  // eslint-disable-next-line no-undef
  plugins: [require("@tailwindcss/forms")],
};
