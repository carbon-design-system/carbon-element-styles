/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type { CdsEsDocsMarkdownContent } from '@/components/MarkdownContent';

import readme from '@/../README.md?raw';
import bannerLight from '@/public/banner-light.svg?url';
import bannerDark from '@/public/banner-dark.svg?url';

const markdownContent = document.createElement('cds-es-docs-markdown-content') as CdsEsDocsMarkdownContent;
markdownContent.textContent = readme
  // remove same-document links
  .replaceAll(/\[(.+)\]\(#.+\)/g, '$1')
  // remove github relative links
  .replaceAll(/\]\(\.\/(.+)\)/g, '](https://github.com/carbon-design-system/carbon-element-styles/blob/main/$1)')
  // remove banner srcs
  .replaceAll('./docs/public/banner-dark.svg', bannerDark)
  .replaceAll('./docs/public/banner-light.svg', bannerLight);

export default markdownContent;
