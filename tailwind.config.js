/** @type {import('tailwindcss').Config} */
export const content = [
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./app/components/**/*.{js,ts,jsx,tsx,mdx}",
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
  extend: {
    screens: {
      xs: "400px", // Thêm breakpoint cho màn hình dưới 300px
    },
  },
};
export const plugins = [];
