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
          DEFAULT: '#F7F9FC',
          dark: '#070A12',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          dark: '#0D1422',
        },
        ink: {
          DEFAULT: '#0D1B2E',
          muted: '#4A607A',
          dark: '#D9E6F5',
          'muted-dark': '#7A99BA',
        },
        hairline: {
          DEFAULT: '#D4E0EF',
          dark: '#1B2B42',
        },
        accent: {
          DEFAULT: '#1C4A96',
          light: '#2563D0',
          dark: '#7EB8FF',
        },
        ember: {
          DEFAULT: '#9B7520',
          dark: '#F0C54A',
        },
        masthead: {
          DEFAULT: '#060910',
          ink: '#DCE8F8',
          line: '#172035',
        },
      },
      boxShadow: {
        card: '0 8px 28px rgba(12, 26, 54, 0.07)',
        glow: '0 0 40px rgba(28, 74, 150, 0.18)',
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
        pulse_glow: {
          '0%, 100%': { opacity: '0.06' },
          '50%': { opacity: '0.14' },
        },
      },
      animation: {
        drift: 'drift 18s ease-in-out infinite',
        fadeUp: 'fadeUp 0.6s ease-out forwards',
        pulse_glow: 'pulse_glow 4s ease-in-out infinite',
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
