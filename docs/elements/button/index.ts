import type { Demo, Meta } from '../../js/_types';

export const meta = {
  id: 'button',
  name: 'Button',
} as const satisfies Meta;

const html = /* html */`
<button>Button</button>

<br /><br />

<button disabled>Button (disabled)</button>
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
