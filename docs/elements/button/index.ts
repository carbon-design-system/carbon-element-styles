import type { Demo, Meta } from '../../js/_types';

import beeIcon from '@carbon/icons/svg/32/bee.svg?raw';

export const meta = {
  id: 'button',
  name: 'Button',
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
    html,
  },
  {
    id: 'primary',
    name: 'Primary',
    html,
  },
  {
    id: 'secondary',
    name: 'Secondary',
    html,
  },
  {
    id: 'tertiary',
    name: 'Tertiary',
    html,
  },
  {
    id: 'ghost',
    name: 'Ghost',
    html,
  },
  {
    id: 'danger--primary',
    name: 'Danger primary',
    html,
  },
  {
    id: 'danger--tertiary',
    name: 'Danger tertiary',
    html,
  },
  {
    id: 'danger--ghost',
    name: 'Danger ghost',
    html,
  },
];
