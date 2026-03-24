/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type { Demo, Meta } from '../../js/_types';

export const meta = {
  id: 'combo-box',
  name: 'Combo box',
  references: [
    {
      label: '<datalist> (textual)',
      url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/datalist#textual_types',
    },
    {
      label: 'Combo box',
      url: 'https://carbondesignsystem.com/components/dropdown/usage/#combo-box',
    },
  ],
  config: [
    {
      key: 'selector',
      type: 'selector',
      default: 'label:has(input[type="text"][list])',
    },
    {
      key: 'axis',
      type: `| 'block'\n| 'inline'`,
      default: `'block'`,
    },
  ],
} as const satisfies Meta;

const html = /* html */`
<datalist id="combo-box-demo">
  <option>Option 1</option>
  <option>Option 2</option>
  <option>Option 3</option>
</datalist>

<label>
  Enabled
  <input type="text" list="combo-box-demo" placeholder="yay" />
</label>

<br />

<label>
  Disabled
  <input type="text" list="combo-box-demo" disabled />
</label>

<br />

<label>
  Invalid
  <input type="text" list="combo-box-demo" aria-invalid="true" />
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
  {
    id: 'block',
    name: 'Block',
    html: {
      raw: html,
    },
    config: {
      axis: `'block'`,
    },
  },
  {
    id: 'inline',
    name: 'Inline',
    html: {
      raw: html,
    },
    config: {
      axis: `'inline'`,
    },
  },
];
