import { gray } from '@radix-ui/colors'

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
              "--tw-prose-bold": gray.gray12,
              "--tw-prose-body": gray.gray12,
              "--tw-prose-bullets": { color: gray.gray12 },
              "blockquote p:first-of-type::before": false,
              "blockquote p:first-of-type::after": false,
              img: { marginLeft: "auto", marginRight: "auto" },
            },
          },
        };
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
