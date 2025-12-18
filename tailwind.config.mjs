// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "var(--dark)",
        espresso: "var(--espresso)",
        cocoa: "var(--cocoa)",
        caramel: "var(--caramel)",
        cream: "var(--cream)",
        text: "var(--text)",
        muted: "var(--muted)",
        hover: "var(--hover)",
      },
    },
  },
  plugins: [],
};
