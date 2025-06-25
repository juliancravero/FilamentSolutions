import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        underground: {
          DEFAULT: "#1f1f1f",
          graffiti: "#ff3cac",
          neon: "#39ff14",
          fuego: "#ff8c00",
          humo: "#999999",
          violeta: "#6b21a8",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        wall: "url('/graffiti-wall.jpg')",
      },
    },
  },
  plugins: [],
};
export default config;
