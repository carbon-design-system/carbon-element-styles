/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type { Demo, Meta } from '../../js/_types';

import beeIcon from '@carbon/icons/svg/32/bee.svg?raw';

export const meta = {
  id: 'button',
  name: 'Button',
  references: [
    {
      label: '<button>',
      url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button',
    },
    {
      label: 'Button',
      url: 'https://carbondesignsystem.com/components/button/usage/',
    },
  ],
  config: [
    {
      key: 'selector',
      type: 'selector',
      default: 'button',
    },
    {
      key: 'kind',
      type: `| 'primary'\n| 'secondary'\n| 'tertiary'\n| 'ghost'\n| 'danger--primary'\n| 'danger--tertiary'\n| 'danger--ghost'`,
      default: 'secondary',
    },
  ],
  notes: [
    'Any SVG will be treated as a square icon.',
    'When using both text and an icon, the text must be wrapped in some element, such as a <span>.',
  ],
} as const satisfies Meta;

const html = /* html */`
<button type="button">Button</button>

<br /><br />

<button type="button" disabled>Button (disabled)</button>

<br /><br />

<button type="button">
  <span>Button</span> ${beeIcon}
</button>

<br /><br />

<button type="button" disabled>
  <span>Button (disabled)</span> ${beeIcon}
</button>

<br /><br />

<button type="button">
  ${beeIcon}
</button>

<br /><br />

<button type="button" disabled>
  ${beeIcon}
</button>
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
    id: 'primary',
    name: 'Primary',
    html: {
      raw: html,
    },
    config: {
      kind: `'primary'`,
    },
  },
  {
    id: 'secondary',
    name: 'Secondary',
    html: {
      raw: html,
    },
    config: {
      kind: `'secondary'`,
    },
  },
  {
    id: 'tertiary',
    name: 'Tertiary',
    html: {
      raw: html,
    },
    config: {
      kind: `'tertiary'`,
    },
  },
  {
    id: 'ghost',
    name: 'Ghost',
    html: {
      raw: html,
    },
    config: {
      kind: `'ghost'`,
    },
  },
  {
    id: 'danger--primary',
    name: 'Danger primary',
    html: {
      raw: html,
    },
    config: {
      kind: `'danger--primary'`,
    },
  },
  {
    id: 'danger--tertiary',
    name: 'Danger tertiary',
    html: {
      raw: html,
    },
    config: {
      kind: `'danger--tertiary'`,
    },
  },
  {
    id: 'danger--ghost',
    name: 'Danger ghost',
    html: {
      raw: html,
    },
    config: {
      kind: `'danger--ghost'`,
    },
  },
];
