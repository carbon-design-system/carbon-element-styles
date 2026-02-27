import type { Demo, Meta } from '../../js/_types';

export const meta = {
  id: 'italic-text',
  name: 'Italic text',
} as const satisfies Meta;

const html = /* html */`
<em>Emphasized</em>

<br /><br />

<i>Italic</i>
`;

export const demos: Demo[] = [
  {
    id: 'default',
    name: 'Default',
    html,
  },
];
