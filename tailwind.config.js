/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#2563eb", // blue-600 (light)
                    dark: "#60a5fa", // blue-400 (dark)
                },
                secondary: {
                    DEFAULT: "#14b8a6", // teal-500 (light)
                    dark: "#2dd4bf", // teal-400 (dark)
                },
                accent: {
                    DEFAULT: "#f59e0b", // amber-500 (light)
                    dark: "#fbbf24", // amber-400 (dark)
                },
                background: {
                    DEFAULT: "#f8fafc",
                    dark: "#0b1220",
                    paper: {
                        DEFAULT: "#ffffff",
                        dark: "#0f172a",
                    },
                },
                text: {
                    primary: {
                        DEFAULT: "#0f172a",
                        dark: "#e2e8f0",
                    },
                    secondary: {
                        DEFAULT: "#64748b",
                        dark: "#94a3b8",
                    },
                },
                border: {
                    DEFAULT: "rgba(15, 23, 42, 0.12)",
                    dark: "rgba(226, 232, 240, 0.16)",
                },
            },
            fontFamily: {
                sans: ["Inter", "system-ui", "sans-serif"],
                heading: ["Poppins", "sans-serif"],
                mono: ["Fira Code", "monospace"],
            },
            boxShadow: {
                sm: "0 1px 2px 0 rgba(0,0,0,0.05)",
                DEFAULT:
                    "0 1px 3px 0 rgba(0,0,0,0.08), 0 1px 2px 0 rgba(0,0,0,0.04)",
                md: "0 4px 6px -1px rgba(0,0,0,0.08), 0 2px 4px -1px rgba(0,0,0,0.04)",
                lg: "0 10px 15px -3px rgba(0,0,0,0.10), 0 4px 6px -2px rgba(0,0,0,0.05)",
                xl: "0 20px 25px -5px rgba(0,0,0,0.12), 0 10px 10px -5px rgba(0,0,0,0.06)",
                "2xl": "0 25px 50px -12px rgba(0,0,0,0.25)",
            },
            borderRadius: {
                xl: "0.75rem",
                "2xl": "1rem",
                full: "9999px",
            },
            fontSize: {
                base: ["1rem", { lineHeight: "1.5rem" }],
                lg: ["1.125rem", { lineHeight: "1.75rem" }],
                xl: ["1.25rem", { lineHeight: "1.75rem" }],
                "2xl": ["1.5rem", { lineHeight: "2rem" }],
                "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
                "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
            },
        },
    },
    plugins: [
        require("@tailwindcss/forms"),
        require("@tailwindcss/typography"),
        require("@tailwindcss/aspect-ratio"),
        require("@tailwindcss/line-clamp"),
    ],
};
