/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';

import type { Plugin } from 'vite';

const elementsScssDir = resolve(import.meta.dirname, '../../scss/elements');

const virtualPrefix = 'virtual:scss-docs/';
const resolvedPrefix = '\0scss-docs:';

type ScssParameter = {
  name: string;
  type: string;
  default: string;
};

function parseScssDoc(source: string): ScssParameter[] | null {
  const match = source.match(/((?:\/\/\/[^\n]*\n)+)@mixin styles/);

  if (!match) {
    return null;
  }

  const lines = match[1]
    .split('\n')
    .map((l) => l.replace(/^\/\/\/\s?/, '').trim())
    .filter(Boolean);

  const parameters: ScssParameter[] = [];

  for (const line of lines) {
    // @param {type} name [default]
    // @param {type} name.key [default]
    const paramMatch = line.match(/^@param\s+\{([^}]+)\}\s+([\w.-]+)\s+\[((?:[^\[\]]|\[[^\]]*\])*)\]/);

    if (paramMatch) {
      const name = paramMatch[2].trim().replace(/config.?/, '');

      if (name) {
        parameters.push({
          name,
          type: paramMatch[1].trim().replaceAll(/ \| /g, '\n| '),
          default: paramMatch[3].trim(),
        });
      }
    }
  }

  return parameters;
}

export const scssDocs: Plugin = {
  name: 'scss-docs',

  resolveId(source) {
    if (source.startsWith(virtualPrefix)) {
      return `${resolvedPrefix}${source.slice(virtualPrefix.length)}`;
    }
  },

  async load(id) {
    if (!id.startsWith(resolvedPrefix)) {
      return null;
    }

    const elementName = id.slice(resolvedPrefix.length);
    const scssPath = resolve(elementsScssDir, elementName, 'index.scss');
    const source = await readFile(scssPath, 'utf8');
    const parameters = parseScssDoc(source) ?? [];

    return `
      import { ScssDoc } from '@/model/ScssDoc';

      const docs = new ScssDoc();

      ${parameters.map((parameter) => `docs.parameters.set('${parameter.name}', {
        type: \`${parameter.type}\`,
        default: \`${parameter.default}\`,
      });`).join('\n\n')}

      export default docs;
    `;
  },
};
