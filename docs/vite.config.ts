/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { defineConfig } from 'vite';
import type { UserConfig } from 'vite';

import { prependBanner } from '../tasks/utilities/vite-prepend-banner';

export const config: UserConfig = {
  base: './',
  build: {
    sourcemap: false,
  },
  plugins: [
    prependBanner,
  ],
};

export default defineConfig(config);
