/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}",
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
  "./pages/**/*.{ts,tsx}",
  "./public/**/*.html",
],
  theme: {
    extend: {},
  },
  corePlugins: {
    preflight: false,
  },
  important: '#__next',
}
