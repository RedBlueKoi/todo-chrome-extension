/** @type {import('tailwindcss').Config} */
/* eslint-env node */
module.exports = {
  content: ["./src/**/*.{html,js,vue,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#9f0031",
        "primary-light": "#ba0039",
        accent: "#0a0a16",
        "accent-light": "#141921",
        text: "#e4e5ea",
        "text-contrast": "#141921"
      }
    }
  },
  plugins: []
}
