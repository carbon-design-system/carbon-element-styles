import type { Demo, Meta } from '../../js/_types';

export const meta = {
  id: 'bold-text',
  name: 'Bold text',
} as const satisfies Meta;

const html = /* html */`
<strong>Strong importance</strong>

<br /><br />

<b>Bold</b>
`;

export const demos: Demo[] = [
  {
    id: 'default',
    name: 'Default',
    html,
  },
];
