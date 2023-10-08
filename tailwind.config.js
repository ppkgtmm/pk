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
              "code::before": { content: "none" },
              "code::after": { content: "none" },
              "--tw-prose-bold": "#1f2937",
              "--tw-prose-bullets": { color: "#4b5563" },
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
