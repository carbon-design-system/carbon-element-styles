import type { Demo, Meta } from '../../js/_types';

export const meta = {
  id: 'deleted-text',
  name: 'Deleted text',
} as const satisfies Meta;

const html = /* html */`
<del>deleted</del>
`;

export const demos: Demo[] = [
  {
    id: 'default',
    name: 'Default',
    html,
  },
];
