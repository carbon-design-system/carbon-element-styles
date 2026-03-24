/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type { Demo, Meta } from '../../js/_types';

export const meta = {
  id: 'radio-button',
  name: 'Radio button',
  references: [
    {
      label: '<input type="radio">',
      url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/radio',
    },
    {
      label: 'Radio button',
      url: 'https://carbondesignsystem.com/components/radio-button/usage/',
    },
  ],
  config: [
    {
      key: 'selector',
      type: 'selector',
      default: 'label:has(input[type="radio"])',
    },
  ],
} as const satisfies Meta;

const html = /* html */`
<label>
  Selected
  <input type="radio" name="radio-demo" checked />
</label>

<label>
  Unselected
  <input type="radio" name="radio-demo" />
</label>

<label>
  Disabled
  <input type="radio" name="radio-demo" disabled />
</label>
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
