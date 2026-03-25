/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { fileURLToPath } from 'node:url';
import { extname } from 'node:path';
import { mkdir, readdir, writeFile } from 'node:fs/promises';
import { compile } from 'sass';

import * as log from './utilities/log.ts';
import { getBanner } from './utilities/get-banner.ts';

const sourceDir = new URL('../scss/prebuilt', import.meta.url);
const targetDir = new URL('../dist/prebuilt', import.meta.url);

await mkdir(targetDir, {
  recursive: true,
});

for (const file of await readdir(sourceDir)) {
  const name = file.replace(extname(file), '');
  log.info(`Building ${name}…`);

  try {
    const { css } = compile(fileURLToPath(new URL(`${sourceDir}/${file}`)), {
      style: 'compressed',
      sourceMap: false,
      loadPaths: [
        'node_modules'
      ],
    });

    log.info(`Built ${name}`);

    try {
      await writeFile(
        new URL(new URL(`${targetDir}/${name}.css`)),
        css.at(0) + getBanner('css') + css.slice(1),
      );

      log.success(`Wrote ${name}.css`);
    } catch (error) {
      log.error(`Error writing ${file}`, '\n', error);
      process.exit(1);
    }
  } catch (error) {
    log.error(`Error building ${file}`, '\n', error);
    process.exit(1);
  }
}
