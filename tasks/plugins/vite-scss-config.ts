/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { readFile } from "node:fs/promises";
import { resolve } from "node:path";

import type { Plugin } from "vite";

const demoContentDir = resolve(import.meta.dirname, "../../docs/content/elements");

const virtualPrefix = "virtual:scss-config/";
const resolvedPrefix = "\0scss-config:";

function parseScssConfig(source: string): Record<string, string> | undefined {
  const match = source.match(/\$config:\s*\(([^)]*)\)/);

  if (!match) {
    return undefined;
  }

  const mapBody = match[1];
  const result: Record<string, string> = {};

  for (const entry of mapBody.split(",")) {
    const colonIndex = entry.indexOf(":");

    if (colonIndex === -1) {
      continue;
    }

    const key = entry.slice(0, colonIndex).trim();
    const value = entry.slice(colonIndex + 1).trim();

    if (key === "selector") {
      continue;
    }

    if (key) {
      result[key] = value;
    }
  }

  return result;
}

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
