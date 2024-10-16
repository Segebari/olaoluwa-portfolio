/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navborder: "#00000014",
        navhover: "#edf2ff",
        textgrey: "#BDBDBD",
        buttonbgdark: "#121212",
        buttonbglightblue: "#A6ADFF",
        buttonbgblue: "#0015FD",
        worksectionbg: "#FFFCF0",
        worklightblue: "#D5E7EE",
        workblue: "#08B5FF",
        workgrey: "#63636375",
        workborder: "#5C5C5C",
        workdateblue: "#D5E7EE",
        workdatedarkpink: "#EDE6E8",
      },
    },
  },
  plugins: [],
};