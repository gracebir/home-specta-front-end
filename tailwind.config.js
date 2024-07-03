/**
 * @format
 * @type {import('tailwindcss').Config}
 */

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#0E0E0D",
                active: "#B0EDDB",
                secondary: "#F9F9F9",
                inactive: "#82827D",
                sidebar: "#1A1A19",
            },
        },
    },
    plugins: [],
};
