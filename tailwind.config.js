/* @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    'prettier-plugin-tailwindcss',
    require("daisyui")
  ],
  daisyui: {
    themes: [
      {
        lightTheme: {
          "base-100": "#FDFEFE",
          "base-200": "#E7ECEF",
          "base-300": "#DFE8EB",
          "base-content": "#022235",

          "primary": "#022235",
          "secondary" : "#375463",
          "accent": "#0EA6FE",

          "info": "#2094F3",
          "success": "#009485",
          "warning": "#FF9900",
          "error": "#FF5724",
        },
      },
    ],
  },
}