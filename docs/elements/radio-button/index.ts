import type { Demo, Meta } from '../../js/_types';

export const meta = {
  id: 'radio-button',
  name: 'Radio button',
} as const satisfies Meta;

const html = /* html */`
<label>
  Selected
  <input type="radio" name="radio-demo" checked />
</label>

<label>
  Unselected
  <input type="radio" name="radio-demo" />
</label>

<label>
  Disabled
  <input type="radio" name="radio-demo" disabled />
</label>
`;

export const demos: Demo[] = [
  {
    id: 'default',
    name: 'Default',
    html,
  },
];
