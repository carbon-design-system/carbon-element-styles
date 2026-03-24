/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type { Demo, Meta } from '../../js/_types';

export const meta = {
  id: 'inline-loading',
  name: 'Inline loading',
  references: [
    {
      label: 'aria-busy',
      url: 'https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-busy',
    },
    {
      label: 'Inline loading',
      url: 'https://carbondesignsystem.com/components/inline-loading/usage/',
    },
  ],
  config: [
    {
      key: 'selector',
      type: 'selector',
      default: '[aria-live="polite"][aria-busy="true"]:empty',
    },
  ],
} as const satisfies Meta;

const html = /* html */`
<div aria-live="polite" aria-busy="true"></div>
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
