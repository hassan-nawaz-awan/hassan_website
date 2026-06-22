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
          DEFAULT: '#F8FAFF',
          dark: '#080C18',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          dark: '#111827',
        },
        ink: {
          DEFAULT: '#111827',
          muted: '#4F5665',
          dark: '#F8FAFC',
          'muted-dark': '#CBD5E1',
        },
        hairline: {
          DEFAULT: '#E6E8F0',
          dark: '#2F3A54',
        },
        accent: {
          DEFAULT: '#4338CA',
          light: '#6366F1',
          dark: '#A5B4FC',
        },
        ember: {
          DEFAULT: '#C2660E',
          dark: '#F2A65A',
        },
      },
      boxShadow: {
        card: '0 24px 80px rgba(15, 23, 42, 0.12)',
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
