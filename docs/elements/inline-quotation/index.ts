/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type { Demo, Meta } from '../../js/_types';

export const meta = {
  id: 'inline-quotation',
  name: 'Inline quotation',
  references: [
    {
      label: '<q>',
      url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/q',
    },
  ],
  config: [
    {
      key: 'selector',
      type: 'selector',
      default: 'q',
    },
  ],
  notes: [
    'Appropriate quotation marks are added automatically.'
  ],
} as const satisfies Meta;

const html = /* html */`
Lorem ipsum dolor: <q>Sit amet consetetur sadipscing elitr</q>, sed diam.
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
