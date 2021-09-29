module.exports = {
  purge: ["./components/**/*.js", "./pages/**/*.js"],
  variants: {},
  theme: {
    extend: {
      colors: {
        "accent-1": "#FAFAFA",
        "accent-2": "#EAEAEA",
        "accent-7": "#333",
        success: "#0070f3",
        cyan: "#79FFE1",
        yellow: { 500: "#f7c509" },
        gray: { 100: "#EEEDED" },
        black: "#3e3f42",
      },
      spacing: {
        28: "7rem",
      },
      letterSpacing: {
        tighter: "-.04em",
      },
      lineHeight: {
        tight: 1.2,
      },
      fontSize: {
        "5xl": "2.5rem",
        "6xl": "2.75rem",
        "7xl": "4.5rem",
        "8xl": "6.25rem",
      },
      fontFamily: {
        fancy: ["Bellota Text"],
        body: ["Bellota Text"],
      },
      fontWeight: {
        bold: "500",
        heavy: "700",
      },
      boxShadow: {
        small: "0 5px 10px rgba(128, 128, 128, 0.12)",
        medium: "0 8px 30px rgba(128, 128, 128, 0.12)",
      },
    },
  },
}
