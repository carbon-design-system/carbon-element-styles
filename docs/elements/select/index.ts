/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type { Demo, Meta } from '../../js/_types';

export const meta = {
  id: 'select',
  name: 'Select',
  references: [
    {
      label: '<select>',
      url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/select',
    },
    {
      label: 'Select',
      url: 'https://carbondesignsystem.com/components/select/usage/',
    },
  ],
  config: [
    {
      key: 'selector',
      type: 'selector',
      default: 'label:has(select)',
    },
    {
      key: 'axis',
      type: `| 'block'\n| 'inline'`,
      default: `'block'`,
    },
  ],
} as const satisfies Meta;

const html = /* html */`
<label>
  Enabled
  <select>
    <option>Option 1</option>
    <option>Option 2</option>
    <option>Option 3</option>
  </select>
</label>

<br />

<label>
  Disabled
  <select disabled>
    <option>Option 1</option>
    <option>Option 2</option>
    <option>Option 3</option>
  </select>
</label>

<br />

<label>
  Invalid
  <select aria-invalid="true">
    <option>Option 1</option>
    <option>Option 2</option>
    <option>Option 3</option>
  </select>
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
