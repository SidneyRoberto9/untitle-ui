import type { Config } from "tailwindcss"

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        container: "77.5rem",
      },
      colors: {
        gray: {
          100: "#F2F4F7",
          200: "#E4E7EC",
          300: "#D0D5DD",
          500: "#717680",
          600: "#475467",
          700: "#344054",
          900: "#101828",
        },
        brand: {
          50: "#F9F5FF",
          100: "#F4EBFF",
          600: "#7F56D9",
          700: "#6941C6",
        },
      },
    },
  },
  plugins: [],
} satisfies Config
