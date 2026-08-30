/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0d1117",
        foreground: "#e6edf3",
        surface: "#161b22",
        "surface-hover": "#1c2230",
        border: "#30363d",
        brand: {
          50:  "#eef2ff",
          100: "#e0e7ff",
          200: "#c7d2fe",
          300: "#a5b4fc",
          400: "#818cf8",
          500: "#6366f1",
          600: "#4f46e5",
          700: "#4338ca",
          800: "#3730a3",
          900: "#312e81",
        },
      },
      boxShadow: {
        subtle:     "0 1px 2px 0 rgba(0, 0, 0, 0.04)",
        card:       "0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px -1px rgba(0, 0, 0, 0.03)",
        "card-hover":"0 4px 12px -2px rgba(79, 70, 229, 0.08), 0 2px 4px -2px rgba(0,0,0,0.04)",
        modal:      "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.06)",
        glow:       "0 0 0 3px rgba(99, 102, 241, 0.15)",
      },
      borderRadius: {
        "2xl": "0.75rem",
        xl:    "0.625rem",
        lg:    "0.5rem",
        md:    "0.375rem",
        sm:    "0.25rem",
      },
      fontFamily: {
        sans: [
          '"Inter"',
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          "sans-serif",
        ],
        mono: [
          '"JetBrains Mono"',
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "monospace",
        ],
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)",
      },
    },
  },
  plugins: [],
};
