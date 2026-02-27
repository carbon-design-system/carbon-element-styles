import type { Demo, Meta } from '../../js/_types';

export const meta = {
  id: 'code',
  name: 'Code',
} as const satisfies Meta;

const html = /* html */`
Lorem ipsum <code>dolor sit</code> amet.
`;

export const demos: Demo[] = [
  {
    id: 'default',
    name: 'Default',
    html,
  },
];
