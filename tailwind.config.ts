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
          600: "#475467",
        },
      },
    },
  },
  plugins: [],
} satisfies Config
