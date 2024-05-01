/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // cr. https://futurestud.io/tutorials/tailwind-css-remove-backticks-around-inline-code
      typography({ theme }) {
        return {
          DEFAULT: {
            css: {
              code: false,
              "code::before": false,
              "code::after": false,
              "--tw-prose-bold": '#000',
              "--tw-prose-body": '#000',
              "--tw-prose-bullets": { color: '#000' },
              "blockquote p:first-of-type::before": false,
              "blockquote p:first-of-type::after": false,
              "--tw-prose-counters": { colors: '#000' }
            },
          },
        };
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
