import { defineConfig } from 'vite';
import type { UserConfig } from 'vite';

export const config: UserConfig = {
  base: './',
  build: {
    sourcemap: false,
  },
};

export default defineConfig(config);
