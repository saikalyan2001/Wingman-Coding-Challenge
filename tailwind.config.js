/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg1": "#115E56",
        "text1": "#212636",   // black
        "text2": "#667085",  //  gray
        "text3": "#15B79F", //   green
        "text4": "#F04438" //    red
      } 
    },
  },
  plugins: [],
}

