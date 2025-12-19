import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        shell: {
          bg: "#020617",
          sidebar: "#020617",
          surface: "#020617",
        }
      }
    }
  },
  plugins: []
};

export default config;


