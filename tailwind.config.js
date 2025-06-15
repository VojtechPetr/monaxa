// tailwind.config.js
export default {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        "open-sans": ["Open Sans Regular", "Open Sans", "sans-serif"],
        roboto: ["Roboto Regular", "Roboto", "sans-serif"],
        "skoda-pro": ['"Škoda Pro"', "sans-serif"],
      },
      fontSize: {
        xxs: "10px",
        xs: "13px",
        sm: "14px",
        md: "16px",
        base: "18px",
        "0xl": "17px",
        "1xl": "15px",
        xl: "20px",
        "2xl": "24px",
        "3xl": "28px",
        "4xl": "30px",
        "5xl": "36px",
        "6xl": "44px",
        "7xl": "60px",
        "8xl": "80px",
        "icon-xxs": "10px",
        "icon-xs": "12px",
        "icon-md": "14px",
        "icon-1xl": "16px",
        "icon-2xl": "20px",
        "icon-3xl": "32px",
        "icon-4xl": "70px",
      },
      width: {
        100: "400px",
        120: "542px",
      },
      height: {
        120: "542px",
        140: "716px",
        160: "824px",
      },
      boxShadow: {
        "custom-light": "0 2px 12px rgba(173, 173, 173, 0.25)",
      },
      borderWidth: {
        1: "0.87px",
      },
      gridTemplateRows: {
        1: "104px auto",
      },
      lineHeight: {
        110: "110%",
        140: "140%",
      },
    },
  },
  plugins: [],
};
