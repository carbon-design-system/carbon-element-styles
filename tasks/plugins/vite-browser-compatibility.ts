/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { resolve } from "node:path";
import { compileAsync } from "sass";

import type { Plugin } from "vite";

import { browsers, type BrowserCompatibility } from "../../docs/model/BrowserCompatibility";

const demoContentDir = resolve(import.meta.dirname, "../../docs/content/elements");
const nodeModulesDir = resolve(import.meta.dirname, "../../node_modules");

const virtualPrefix = "virtual:browser-compatibility/";
const resolvedPrefix = "\0browser-compatibility:";

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
      const scssPath = resolve(demoContentDir, elementName, "_demos", demoName, "index.scss");
      this.addWatchFile(scssPath);

      await compileAsync(scssPath, {
        loadPaths: [nodeModulesDir],
      });

      const browserCompatibility = {
        browsers: Object.fromEntries(
          browsers.map((browser) => [
            browser,
            {
              version: undefined,
              date: undefined,
            },
          ]),
        ),
      } as BrowserCompatibility;

      return `export default ${JSON.stringify(browserCompatibility)};`;
    },
  },
};
