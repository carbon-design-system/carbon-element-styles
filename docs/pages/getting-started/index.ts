/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { parse } from 'marked';

import readme from '../../../README.md?raw';
import bannerLight from '../../assets/banner-light.svg';
import bannerDark from '../../assets/banner-dark.svg';

import type { Demo } from '../../js/_types';

const content = readme
  // remove same-document links
  .replaceAll(/\[(.+)\]\(#.+\)/g, '$1')
  // remove github relative links
  .replaceAll(/\]\(\.\/(.+)\)/g, '](https://github.com/carbon-design-system/carbon-element-styles/blob/main/$1)')
  // remove banner srcs
  .replaceAll('./docs/assets/banner-dark.svg', bannerDark)
  .replaceAll('./docs/assets/banner-light.svg', bannerLight);

export const meta: Demo = {
  id: 'getting-started',
  name: 'Getting started',
  html: {
    raw: await parse(content),
  },
}
