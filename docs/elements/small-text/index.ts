/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type { Demo, Meta } from '../../js/_types';

export const meta = {
  id: 'small-text',
  name: 'Small text',
  references: [
    {
      label: '<small>',
      url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/small',
    },
  ],
  config: [
    {
      key: 'selector',
      type: 'selector',
      default: 'small',
    },
  ],
} as const satisfies Meta;

const html = /* html */`
<small>Small</small>
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
