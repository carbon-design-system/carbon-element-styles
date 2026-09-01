/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { readFile } from "node:fs/promises";
import { resolve } from "node:path";

import type { Plugin } from "vite";

import { parseScssDoc } from "../utilities/parse-scss-doc.ts";

const elementsScssDir = resolve(import.meta.dirname, "../../scss/elements");

const virtualPrefix = "virtual:scss-docs/";
const resolvedPrefix = "\0scss-docs:";

export const scssDocs: Plugin = {
  name: "scss-docs",

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
      const elementName = id.slice(resolvedPrefix.length);
      const scssPath = resolve(elementsScssDir, elementName, "index.scss");
      const source = await readFile(scssPath, "utf8");
      const parameters = parseScssDoc(source) ?? [];

      return `
        import { ScssDoc } from '@/model/ScssDoc';

        const docs = new ScssDoc();

        ${parameters
          .map(
            (parameter) => `docs.parameters.set('${parameter.name}', {
          type: \`${parameter.type}\`,
          default: \`${parameter.default}\`,
        });`,
          )
          .join("\n\n")}

        export default docs;
      `;
    },
  },
};
