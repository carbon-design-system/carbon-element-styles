/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type { Demo, Meta } from '../../js/_types';

export const meta = {
  id: 'checkbox',
  name: 'Checkbox',
  references: [
    {
      label: '<input type="checkbox">',
      url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/checkbox',
    },
    {
      label: 'Checkbox',
      url: 'https://carbondesignsystem.com/components/checkbox/usage/',
    },
  ],
  config: [
    {
      key: 'selector',
      type: 'selector',
      default: 'label:has(input[type="checkbox"])',
    },
  ],
} as const satisfies Meta;

const html = /* html */`
<label>
  Unchecked
  <input type="checkbox" />
</label>

<label>
  Unchecked (disabled)
  <input type="checkbox" disabled />
</label>

<label>
  Checked
  <input type="checkbox" checked />
</label>

<label>
  Checked (disabled)
  <input type="checkbox" checked disabled />
</label>

<label>
  Indeterminate
  <input type="checkbox" />
</label>

<label>
  Indeterminate (disabled)
  <input type="checkbox" disabled />
</label>
`;

export const demos: Demo[] = [
  {
    id: 'default',
    name: 'Default',
    html: {
      raw: html,
    },
    setup: (frame: HTMLElement) => {
      Array.from(frame.querySelectorAll<HTMLInputElement>('input[type="checkbox"]'))
        .slice(-2)
        .forEach((checkbox) => {
          checkbox.indeterminate = true;
        });
    },
  },
];
