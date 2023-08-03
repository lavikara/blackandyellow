/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{tsx,jsx,js,vue,ts}"],
  prefix: "tw-",
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        primary: { DEFAULT: "#2BD5D4" },
        secondary: { DEFAULT: "#001140" },
        gray: {
          DEFAULT: "#8791A7",
          light: "#f7fdfd",
        },
        green: {
          DEFAULT: "#60e0de",
          dark: "#1a8a87",
          bg1: "#156e6c",
          bg2: "#a2eeeb",
        },
      },
    },
    screens: {
      xxxs: "320px",
      xxs: "375px",
      xs: "425px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1440px",
      xxxl: "1536px",
      xxxxl: "1900px",
    },
  },
  plugins: [],
};
