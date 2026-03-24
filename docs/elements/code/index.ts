/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type { Demo, Meta } from '../../js/_types';

export const meta = {
  id: 'code',
  name: 'Code',
  references: [
    {
      label: '<code>',
      url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/code',
    },
    {
      label: 'Inline code snippet',
      url: 'https://carbondesignsystem.com/components/code-snippet/usage/#inline',
    },
  ],
  config: [
    {
      key: 'selector',
      type: 'selector',
      default: 'code',
    },
  ],
} as const satisfies Meta;

const html = /* html */`
Generate a set of prebuilt stylesheet by running <code>npm run build:prebuilts</code> in your terminal.
`;

export const demos: Demo[] = [
  {
    id: 'default',
    name: 'Default',
    html: {
      raw: html,
    },
  },
];
