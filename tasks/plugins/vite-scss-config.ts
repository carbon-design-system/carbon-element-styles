/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { readFile } from "node:fs/promises";
import { resolve } from "node:path";

import type { Plugin } from "vite";

import { parseScssConfig } from "../utilities/parse-scss-config.ts";

const demoContentDir = resolve(import.meta.dirname, "../../docs/content/elements");

const virtualPrefix = "virtual:scss-config/";
const resolvedPrefix = "\0scss-config:";

export const scssConfig: Plugin = {
  name: "scss-config",

  resolveId(source) {
    if (source.startsWith(virtualPrefix)) {
      return `${resolvedPrefix}${source.slice(virtualPrefix.length)}`;
    }
  },

  load: {
    filter: {
      id: {
        include: [new RegExp(`^${resolvedPrefix}`)],
      },
    },
    async handler(id) {
      const [elementName, demoName] = id.slice(resolvedPrefix.length).split("/");
      const scssPath = resolve(demoContentDir, elementName, "_demos", demoName, "index.scss");
      this.addWatchFile(scssPath);

      const source = await readFile(scssPath, "utf8");
      const config = parseScssConfig(source);

      if (config === undefined || Object.keys(config).length === 0) {
        return `export default undefined;`;
      }

      return `export default ${JSON.stringify(config)};`;
    },
  },
};
