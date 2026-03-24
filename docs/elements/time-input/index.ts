/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type { Demo, Meta } from '../../js/_types';

export const meta = {
  id: 'time-input',
  name: 'Time input',
  references: [
    {
      label: '<input type="time">',
      url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/time',
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
      default: 'label:has(input[type="time"])',
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
  <input type="time" />
</label>

<br />

<label>
  Read only
  <input type="time" readonly value="09:41" />
</label>

<br />

<label>
  Disabled
  <input type="time" disabled value="09:41" />
</label>

<br />

<label>
  Invalid
  <input type="time" value="09:41" aria-invalid="true" />
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
      axis: `'block`,
    },
  },
  {
    id: 'inline',
    name: 'Inline',
    html: {
      raw: html,
    },
    config: {
      axis: `'inline`,
    },
  },
];
