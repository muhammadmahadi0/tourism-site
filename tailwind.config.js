/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0F2E22',
          light: '#183D2F',
          muted: '#2C4C3E',
          dark: '#081C14',
        },
        paper: {
          DEFAULT: '#EEF1EA',
          light: '#F6F8F3',
          dark: '#E2E6DC',
        },
        forest: {
          DEFAULT: '#1B5E4F',
          light: '#287463',
          dark: '#12453A',
        },
        rust: {
          DEFAULT: '#B5451E',
          light: '#CD562E',
          dark: '#933515',
        },
        spice: {
          DEFAULT: '#D9A441',
          light: '#E6B454',
          dark: '#B88628',
        },
        river: {
          DEFAULT: '#0E7C90',
          light: '#1A97AE',
          dark: '#0A5D6D',
        }
      },
      fontFamily: {
        serif: ['Fraunces', '"Noto Serif Bengali"', 'serif'],
        sans: ['Inter', '"Noto Sans Bengali"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', '"Noto Sans Bengali"', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
