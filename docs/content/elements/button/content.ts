/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ElementDemoContent } from '@/model/Content/ElementDemo';

import css from './demo.scss?inline';
import html from './demo.html';

export default new ElementDemoContent({
  name: 'Button',
  references: [
    {
      label: '<button>',
      url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button',
    },
    {
      label: 'Button',
      url: 'https://carbondesignsystem.com/components/button/usage/',
    },
  ],
  css,
  demos: new Map([
    ['default', { html }],
    ['primary', { html }],
    ['secondary', { html }],
    ['tertiary', { html }],
    ['ghost', { html }],
    ['danger--primary', { html }],
    ['danger--tertiary', { html }],
    ['danger--ghost', { html }],
  ]),
});
