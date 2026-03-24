/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type { Demo, Meta } from '../../js/_types';

export const meta = {
  id: 'password-input',
  name: 'Password input',
  references: [
    {
      label: '<input type="password">',
      url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/password',
    },
    {
      label: 'Text input',
      url: 'https://carbondesignsystem.com/components/text-input/usage/',
    },
  ],
  config: [
    {
      key: 'selector',
      type: 'selector',
      default: 'label:has(input[type="password"])',
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
  <input type="password" />
</label>

<br />

<label>
  Read only
  <input type="password" readonly value="Lorem ipsum" />
</label>

<br />

<label>
  Disabled
  <input type="password" disabled value="Lorem ipsum" />
</label>

<br />

<label>
  Invalid
  <input type="password" value="Lorem ipsum" aria-invalid="true" />
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
