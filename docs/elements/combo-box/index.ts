import type { Demo, Meta } from '../../js/_types';

export const meta = {
  id: 'combo-box',
  name: 'Combo box',
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
