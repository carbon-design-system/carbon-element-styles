import type { Demo, Meta } from '../../js/_types';

export const meta = {
  id: 'select',
  name: 'Select',
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
