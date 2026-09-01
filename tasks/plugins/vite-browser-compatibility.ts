/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";
import { compileStringAsync } from "sass";

import type { Plugin } from "vite";

import { getBrowserCompatibilityForCss } from "../utilities/browser-compatibility.ts";

const demoContentDir = resolve(import.meta.dirname, "../../docs/content/elements");
const elementsScssDir = resolve(import.meta.dirname, "../../scss/elements");
const nodeModulesDir = resolve(import.meta.dirname, "../../node_modules");

const virtualPrefix = "virtual:browser-compatibility/";
const resolvedPrefix = "\0browser-compatibility:";

function extractConfigMap(source: string): string {
  const match = source.match(/\$config:\s*(\([\s\S]*?\));/);
  return match ? match[1] : "()";
}

export const browserCompatibility: Plugin = {
  name: "browser-compatibility",

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
      const demoScssPath = resolve(demoContentDir, elementName, "_demos", demoName, "index.scss");
      const elementScssPath = resolve(elementsScssDir, elementName, "index.scss");

      this.addWatchFile(demoScssPath);
      this.addWatchFile(elementScssPath);

      const source = await readFile(demoScssPath, "utf8");
      const configMap = extractConfigMap(source);

      const syntheticScss = `
        @use "${pathToFileURL(elementScssPath).href}" as element;
        $config: ${configMap};
        @include element.styles($config);
      `;

      const { css } = await compileStringAsync(syntheticScss, {
        loadPaths: [nodeModulesDir],
      });

      const browserCompatibility = getBrowserCompatibilityForCss(css);

      return `export default ${JSON.stringify(browserCompatibility)};`;
    },
  },
};
