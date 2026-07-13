/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

import type { Plugin } from 'vite';

import * as log from './log';

export const carbonIcons: Plugin = {
  name: 'carbon-icons',

  async transform(code, id) {
    if (!id.endsWith('.html')) {
      return null;
    }

    const content = code.replaceAll(/{{ cds-icon:(.+?) }}/g, (original, name) => {
      try {
        const iconPath = fileURLToPath(import.meta.resolve(`@carbon/icons/svg/32/${name}.svg`));
        const icon = readFileSync(iconPath);

        return icon.toString();
      } catch(e) {
        log.error(`Could not find Carbon icon with name '${name}'\n   Requested by '${id}'`, e);
      }

      return original;
    });

    return {
      code: `export default ${JSON.stringify(content)}`,
      map: null,
    };
  },
};
