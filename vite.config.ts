import { defineConfig, loadEnv, type ConfigEnv } from 'vite';
import tailwind from 'tailwindcss';
import tsconfigPaths from 'vite-tsconfig-paths';
import voby from 'voby-vite';
import { checker } from 'vite-plugin-checker';

export default ({ mode }: ConfigEnv) =>
  defineConfig({
    base: loadEnv(mode, process.cwd(), '')['BASE'] ?? '',
    css: {
      postcss: {
        plugins: [tailwind()],
      },
    },
    plugins: [
      tsconfigPaths(),
      mode === 'development' && voby({ hmr: { enabled: true } }),
      checker({
        typescript: true,
        eslint: {
          lintCommand:
            'eslint . --ext .ts --ext .tsx --ext .json --ext .yml --max-warnings 0',
        },
      }),
    ],
  });
