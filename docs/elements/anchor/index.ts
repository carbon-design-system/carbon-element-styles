import type { Demo, Meta } from '../../js/_types';

export const meta = {
  id: 'anchor',
  name: 'Anchor',
} as const satisfies Meta;

const html = /* html */`
<a href="#">Lorem ipsum</a>
`;

export const demos: Demo[] = [
  {
    id: 'default',
    name: 'Default',
    html,
  },
];
