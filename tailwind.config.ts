import colors from 'tailwindcss/colors';
import type { Config } from 'tailwindcss';

export default {
  content: ['src/**/*.{ts,tsx}', 'index.html'],
  theme: {
    extend: {
      colors: {
        voby: 'var(--voby-yellow)',
        gray: colors.zinc,
      },
      height: {
        '95vmin': '95vmin',
      },
      strokeWidth: {
        3: '3px',
        4: '4px',
      },
    },
  },
} satisfies Config;
