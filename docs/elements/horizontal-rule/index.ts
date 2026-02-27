import type { Demo, Meta } from '../../js/_types';

export const meta = {
  id: 'horizontal-rule',
  name: 'Horizontal rule',
} as const satisfies Meta;

const html = /* html */`
<hr />
`;

export const demos: Demo[] = [
  {
    id: 'default',
    name: 'Default',
    html,
  },
];
