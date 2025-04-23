/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'xs': '375px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      colors: {
        'primary': '#000000',
        'contrast': '#FFFFFF',
        'title': '#FFF1DE',
        'rare': '#9B8E7D',
        'button': '#9F99EB',
        'graph': '#99E5EB',
      },
      fontFamily: {
        'title': ['Anton', 'sans-serif'],
        'subtitle': ['Archivo Black', 'sans-serif'],
        'body': ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
      },
    },
  },
  safelist: [
    'bg-primary',
    'bg-contrast',
    'bg-title',
    'bg-rare',
    'bg-button',
    'bg-graph',
    'text-primary',
    'text-contrast',
    'text-title',
    'text-rare',
    'text-button',
    'text-graph',
    'font-title',
    'font-subtitle',
    'font-body',
  ],
  plugins: [],
}; 