import type { Demo, Meta } from '../../js/_types';

export const meta = {
  id: 'data-list',
  name: 'Data list',
} as const satisfies Meta;

const html = /* html */`
<datalist id="datalist-demo">
  <option>Option 1</option>
  <option>Option 2</option>
  <option>Option 3</option>
</datalist>

<label>
  Enabled
  <input list="datalist-demo"/>
</label>

<br />

<label>
  Disabled
  <input list="datalist-demo" disabled />
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
