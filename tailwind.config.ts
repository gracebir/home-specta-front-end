/** @format */

import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                "main-bg": "#0E0E0D",
                "text-color": "#F9F9F9",
                "light-gray": "#82827D",
                "active-color": "#B0EDDB",
            },
        },
    },
    plugins: [],
};
export default config;
