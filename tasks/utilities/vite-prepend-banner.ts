/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { extname } from 'node:path';
import type { Plugin } from 'vite';

import { type FileType, getBanner, supportedFileTypes } from './get-banner';

export const prependBanner: Plugin = {
  name: 'prepend-banner',

  generateBundle(options, bundle) {
    for (const fileName in bundle) {
      const file = bundle[fileName];
      const fileType = extname(fileName).slice(1);

      if (supportedFileTypes.includes(fileType as FileType)) {
        if (file.type === 'chunk') {
          file.code = getBanner(fileType as FileType) + file.code;
        }

        if (file.type === 'asset') {
          file.source = getBanner(fileType as FileType) + file.source;
        }
      }
    }
  }
};
