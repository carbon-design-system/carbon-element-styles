/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type { Demo, Meta } from '../../js/_types';

export const meta = {
  id: 'horizontal-rule',
  name: 'Horizontal rule',
  references: [
    {
      label: '<hr>',
      url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/hr',
    },
  ],
  config: [
    {
      key: 'selector',
      type: 'selector',
      default: 'hr',
    },
    {
      key: 'kind',
      type: `| 'subtle'\n| 'strong'`,
      default: `'subtle'`,
    },
  ],
} as const satisfies Meta;

const html = /* html */`
<hr />
`;

export const demos: Demo[] = [
  {
    id: 'default',
    name: 'Default',
    html: {
      raw: html,
    },
  },
  {
    id: 'subtle',
    name: 'Subtle',
    html: {
      raw: html,
    },
    config: {
      kind: `'subtle'`,
    },
  },
  {
    id: 'strong',
    name: 'Strong',
    html: {
      raw: html,
    },
    config: {
      kind: `'strong'`,
    },
  },
];
