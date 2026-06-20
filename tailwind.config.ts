import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: '#F5F6F8',
          dark: '#0B0E14',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          dark: '#11151D',
        },
        ink: {
          DEFAULT: '#12151C',
          muted: '#5B6472',
          dark: '#E7EAF0',
          'muted-dark': '#8A93A6',
        },
        hairline: {
          DEFAULT: '#E3E5EA',
          dark: '#222836',
        },
        accent: {
          DEFAULT: '#0E7C86',
          light: '#11949F',
          dark: '#2DD4C9',
        },
        ember: {
          DEFAULT: '#C2660E',
          dark: '#F2A65A',
        },
      },
      fontFamily: {
        display: ['var(--font-newsreader)', 'Georgia', 'serif'],
        sans: ['var(--font-plex-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-plex-mono)', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        content: '76rem',
        prose: '42rem',
      },
      keyframes: {
        drift: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(-1.5%, 1%)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        countUp: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        drift: 'drift 18s ease-in-out infinite',
        fadeUp: 'fadeUp 0.6s ease-out forwards',
      },
      typography: () => ({
        DEFAULT: {
          css: {
            maxWidth: 'none',
          },
        },
      }),
    },
  },
  plugins: [],
};

export default config;
