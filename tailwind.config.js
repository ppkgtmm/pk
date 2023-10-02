/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // cr. https://futurestud.io/tutorials/tailwind-css-remove-backticks-around-inline-code
      typography(theme) {
        return {
          DEFAULT: {
            css: {
              color: "#24292f",
              "code::before": { content: "none" },
              "code::after": { content: "none" },
              "--tw-prose-headings": "#24292f",
              "li::marker": { color: "#24292f" },
              "blockquote p:first-of-type::before": {
                content: "",
              },
              "blockquote p:first-of-type::after": {
                content: "",
              },
            },
          },
        };
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
