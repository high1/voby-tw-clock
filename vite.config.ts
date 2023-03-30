import { defineConfig, loadEnv, type ConfigEnv } from 'vite';
import tailwind from 'tailwindcss';
import tsconfigPaths from 'vite-tsconfig-paths';

export default ({ mode }: ConfigEnv) =>
  defineConfig({
    base: loadEnv(mode, process.cwd(), '')['BASE'] ?? '',
    css: {
      postcss: {
        plugins: [tailwind()],
      },
    },
    plugins: [tsconfigPaths()],
  });
