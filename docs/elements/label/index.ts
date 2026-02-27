import type { Demo, Meta } from '../../js/_types';

export const meta = {
  id: 'label',
  name: 'Label',
} as const satisfies Meta;

const html = /* html */`
<label>
  Label
  <input />
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
