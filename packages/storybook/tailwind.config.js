/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './**/*.{js,jsx,ts,tsx,mdx}',
    '../core/theme/src/**/*.{js,jsx,ts,tsx}',
    '../core/theme/stories/**/*.{js,jsx,ts,tsx,mdx}',
    '../components/*/src/**/*.{js,jsx,ts,tsx}',
    '../components/*/stories/**/*.{js,jsx,ts,tsx,mdx}'
  ],
  theme: {
    extend: {}
  },
  plugins: []
}
