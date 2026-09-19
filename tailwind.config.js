/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#EFF1EC",
        foreground: "#14181C",
        primary: {
          DEFAULT: "#1F3FE0",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#E7E9E2",
          foreground: "#14181C",
        },
        accent: {
          DEFAULT: "#1F3FE0",
          foreground: "#ffffff",
        },
        signal: "#B75A22",
        card: {
          DEFAULT: "#FBFBF9",
          foreground: "#14181C",
        },
      },
      fontFamily: {
        display: ["Fraunces", "Georgia", "serif"],
        sans: ["Public Sans", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
}
