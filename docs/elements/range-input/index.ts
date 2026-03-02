import type { Demo, Meta } from '../../js/_types';

export const meta = {
  id: 'range-input',
  name: 'Range input',
} as const satisfies Meta;

const html = /* html */`
<label>
  Enabled
  <input type="range" />
</label>

<br />

<label>
  Disabled
  <input type="range" disabled />
</label>
`;

export const demos: Demo[] = [
  {
    id: 'default',
    name: 'Default',
    html,
  },
  {
    id: 'block',
    name: 'Block',
    html,
  },
  {
    id: 'inline',
    name: 'Inline',
    html,
  },
];
