const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["{src}/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Verdana", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
