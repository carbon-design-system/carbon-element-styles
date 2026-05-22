/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { marked } from 'marked';
import { markedHighlight } from 'marked-highlight';
import hljs from 'highlight.js';

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

marked.use(
  markedHighlight({
    highlight(code, lang) {
      const language = hljs.getLanguage(lang) ? lang : 'plaintext';
      return hljs.highlight(code, { language }).value;
    }
  }),
);

export const meta: Demo = {
  id: 'getting-started',
  name: 'Getting started',
  html: {
    raw: await marked.parse(content),
  },
}
