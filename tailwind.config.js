module.exports = {
  content: ["./src/**/*.{html,ts,css,scss,sass,less,styl}"],
  prefix: "",
  important: ":root",
  mode: "jit",
  darkMode: "class", // or 'media' or 'class'
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      xxl: "1440px",
    },
    extend: {
      colors: {
        primary: "#5bc4d6",
        accent: "#4164a9",
        warn: "#ff9966",
        dark: {
          100: "",
          500: "#323b6e",
          600: "#5c638b",
          700: "#182641",
        },
        success: "#36c678",
        light: "#e4eaf1",
        b_color: "#495c7d",
      },
      spacing: {
        page: "1.25rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
