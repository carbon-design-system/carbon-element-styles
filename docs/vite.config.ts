/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import type { UserConfig } from 'vite';

import { carbonIcons } from '../tasks/utilities/vite-carbon-icons';
import { docsInventory } from '../tasks/utilities/vite-docs-inventory';
import { prependBanner } from '../tasks/utilities/vite-prepend-banner';
import { scssDocs } from '../tasks/utilities/vite-scss-docs';

export const config: UserConfig = {
  base: './',
  build: {
    sourcemap: false,
    license: {
      fileName: 'licenses.txt',
    },
    rolldownOptions: {
      output: {
        postBanner: '/* See licenses of bundled dependencies at https://element-styles.carbondesignsystem.com/licenses.txt */',
      },
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname),
    },
  },
  plugins: [
    carbonIcons,
    docsInventory,
    scssDocs,
    prependBanner,
  ],
};

export default defineConfig(config);
