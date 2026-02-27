import type { Demo, Meta } from '../../js/_types';

export const meta = {
  id: 'inserted-text',
  name: 'Inserted text',
} as const satisfies Meta;

const html = /* html */`
<ins>inserted</ins>
`;

export const demos: Demo[] = [
  {
    id: 'default',
    name: 'Default',
    html,
  },
];
