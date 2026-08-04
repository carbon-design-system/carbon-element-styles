/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { resolve } from "node:path";
import { defineConfig } from "vite";
import type { UserConfig } from "vite";

import { carbonIcons } from "../tasks/plugins/vite-carbon-icons.ts";
import { docsInventory } from "../tasks/plugins/vite-docs-inventory.ts";
import { prependBanner } from "../tasks/plugins/vite-prepend-banner.ts";
import { scssDocs } from "../tasks/plugins/vite-scss-docs.ts";

export const config: UserConfig = {
  base: "./",
  build: {
    sourcemap: false,
    license: {
      fileName: "licenses.txt",
    },
    rolldownOptions: {
      output: {
        postBanner:
          "/* See licenses of bundled dependencies at https://element-styles.carbondesignsystem.com/licenses.txt */",
      },
    },
  },
  resolve: {
    alias: {
      "@": resolve(import.meta.dirname),
    },
  },
  plugins: [carbonIcons, docsInventory, scssDocs, prependBanner],
};

export default defineConfig(config);
