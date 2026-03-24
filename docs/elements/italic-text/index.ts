/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type { Demo, Meta } from '../../js/_types';

export const meta = {
  id: 'italic-text',
  name: 'Italic text',
  references: [
    {
      label: '<i>',
      url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/i',
    },
  ],
  config: [
    {
      key: 'selector',
      type: 'selector',
      default: 'i, em',
    },
  ],
} as const satisfies Meta;

const html = /* html */`
<i>Italic</i>

<br /><br />

<em>Emphasized</em>
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
