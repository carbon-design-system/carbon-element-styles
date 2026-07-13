/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import type { Plugin } from 'vite';

import * as log from './log';

const suffix = '?carbon-icons';
const contentDir = resolve(import.meta.dirname, '../../docs/content/');

export const carbonIcons: Plugin = {
  name: 'carbon-icons',
  enforce: 'pre',

  resolveId(source, importer) {
    if (!source.endsWith('.html') || !importer) {
      return null;
    }

    const path = resolve(importer, '..', source);

    if (!path.startsWith(contentDir)) {
      return null;
    }

    return `${path}${suffix}`;
  },

  load(id) {
    if (!id.endsWith(suffix)) {
      return null;
    }

    const raw = readFileSync(id.slice(0, -suffix.length), 'utf8');

    const content = raw.replaceAll(/{{ cds-icon:(.+?) }}/g, (original, name) => {
      try {
        const iconPath = fileURLToPath(import.meta.resolve(`@carbon/icons/svg/32/${name}.svg`));
        return readFileSync(iconPath, 'utf8');
      } catch(e) {
        log.error(`Could not find Carbon icon with name '${name}'.\n   Requested by '${id}'.`, e);
      }

      return original;
    });

    return `export default ${JSON.stringify(content)}`;
  },
};
