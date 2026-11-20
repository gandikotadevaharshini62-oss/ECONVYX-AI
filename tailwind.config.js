/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          'deep-navy': '#050722',
          'primary-navy': '#101C2C',
          'midnight': '#17283D',
          'teal': '#12B8A6',
          'aqua': '#69E0D0',
          'bright-aqua': '#00D7D0',
          'gold': '#F5A623',
          'off-white': '#F7F9FC',
          'white': '#FFFFFF',
          'slate': '#64748B',
          'success': '#16A36A',
          'warning': '#E9A23B',
          'danger': '#DC5353',
          'border': '#E5EAF0',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 1px 3px 0 rgba(16, 28, 44, 0.05), 0 1px 2px -1px rgba(16, 28, 44, 0.05)',
        'card-hover': '0 4px 6px -1px rgba(16, 28, 44, 0.08), 0 2px 4px -2px rgba(16, 28, 44, 0.06)',
        'elevated': '0 10px 15px -3px rgba(16, 28, 44, 0.08), 0 4px 6px -4px rgba(16, 28, 44, 0.04)',
      },
    },
  },
  plugins: [],
}
