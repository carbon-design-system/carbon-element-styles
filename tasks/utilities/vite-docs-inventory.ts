/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { readdir } from 'node:fs/promises';
import { resolve } from 'node:path';

import type { Plugin } from 'vite';

const contentDir = resolve(import.meta.dirname, '../../docs/content');

const virtualId = 'virtual:docs-inventory';
const resolvedId = '\0virtual:docs-inventory';

async function findLeafEntries(dir: string = contentDir, prefix: string = ''): Promise<string[]> {
  const entries: string[] = [];

  for (const entry of await readdir(dir, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;

    const relativePath = prefix ? `${prefix}/${entry.name}` : entry.name;
    const childDir = resolve(dir, entry.name);
    const children = await readdir(childDir, { withFileTypes: true });

    if (children.some((c) => !c.isDirectory() && c.name === 'index.ts')) {
      entries.push(relativePath);
    }

    entries.push(...(await findLeafEntries(childDir, relativePath)));
  }

  return entries;
}

export const docsInventory: Plugin = {
  name: 'docs-inventory',

  resolveId(source) {
    if (source === virtualId) {
      return resolvedId;
    }
  },

  async load(id) {
    if (id !== resolvedId) {
      return null;
    }

    const lines = (await findLeafEntries()).map((entry) => {
      const filePath = resolve(contentDir, entry, 'index.ts');
      return `export { default as ${JSON.stringify(entry)} } from ${JSON.stringify(filePath)};`;
    });

    return lines.join('\n');
  },
};
