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
          DEFAULT: '#F6F1E7',
          dark: '#0A0D13',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          dark: '#12161F',
        },
        ink: {
          DEFAULT: '#1B1B18',
          muted: '#5C5747',
          dark: '#F2EEE3',
          'muted-dark': '#AFA999',
        },
        hairline: {
          DEFAULT: '#D8CFB8',
          dark: '#2A2F3D',
        },
        accent: {
          DEFAULT: '#7A2230',
          light: '#9C2E3F',
          dark: '#E2A4AC',
        },
        ember: {
          DEFAULT: '#8A6A2A',
          dark: '#D9B36C',
        },
        masthead: {
          DEFAULT: '#0A0D13',
          ink: '#F2EEE3',
          line: '#3A3F4D',
        },
      },
      boxShadow: {
        card: '0 12px 32px rgba(20, 16, 8, 0.06)',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
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
