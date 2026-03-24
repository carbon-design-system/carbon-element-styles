/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type { Demo, Meta } from '../../js/_types';

export const meta = {
  id: 'address',
  name: 'Address',
  references: [
    {
      label: '<address>',
      url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/address',
    },
  ],
  config: [
    {
      key: 'selector',
      type: 'selector',
      default: 'address',
    },
  ],
} as const satisfies Meta;

const html = /* html */`
<address>
  IBM<br />
  <br />
  IBM Campus 1<br />
  71139 Ehningen<br />
  Germany
</address>
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
