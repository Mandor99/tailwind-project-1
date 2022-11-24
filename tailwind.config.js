/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {},
    fontFamily: {
      poppins : ["Poppins, sans-serif"]
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        xl: '1024px',
        lg: '1024px',
        '2xl': '1024px',
      }
    },
    colors: {
      "my-purple": "#5267DF",
      "my-red": "#FA5959",
      "my-blue": "#242A45",
      "my-grey": "#9194A2",
      "my-white": "#f7f7f7",
    },
  },
  plugins: [],
}