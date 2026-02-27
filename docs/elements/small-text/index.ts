import type { Demo, Meta } from '../../js/_types';

export const meta = {
  id: 'small-text',
  name: 'Small text',
} as const satisfies Meta;

const html = /* html */`
<small>Small</small>
`;

export const demos: Demo[] = [
  {
    id: 'default',
    name: 'Default',
    html,
  },
];
