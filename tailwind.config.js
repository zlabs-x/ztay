/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF5722',
          dark: '#E64A19',
          light: '#FF7D47'
        },
        metallic: {
          DEFAULT: '#FF8A65',
          dark: '#F4511E',
          light: '#FFAB91'
        },
        surface: {
          white: '#FFFFFF',
          light: '#F9FAFB',
          dark: '#111827'
        }
      },
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '3rem'
      },
      backgroundImage: {
        'gradient-metallic': 'linear-gradient(135deg, #FF8A65 0%, #FF5722 100%)',
        'gradient-radial': 'radial-gradient(circle, var(--tw-gradient-stops))',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 12s linear infinite',
      },
      boxShadow: {
        'glow': '0 0 60px -15px rgba(255, 87, 34, 0.3)',
      }
    },
  },
  plugins: [],
};