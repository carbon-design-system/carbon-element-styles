/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type { Demo, Meta } from '../../js/_types';

export const meta = {
  id: 'date-time-input',
  name: 'Date and time input',
  references: [
    {
      label: '<input type="datetime-local">',
      url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/datetime-local',
    },
    {
      label: 'Date picker',
      url: 'https://carbondesignsystem.com/components/date-picker/usage/',
    },
  ],
  config: [
    {
      key: 'selector',
      type: 'selector',
      default: 'label:has(input[type="datetime-local"])',
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
  <input type="datetime-local" />
</label>

<br />

<label>
  Read only
  <input type="datetime-local" readonly value="2019-09-01T09:41:00" />
</label>

<br />

<label>
  Disabled
  <input type="datetime-local" disabled value="2019-09-01T09:41:00" />
</label>

<br />

<label>
  Invalid
  <input type="datetime-local" value="2019-09-01T09:41:00" aria-invalid="true" />
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
