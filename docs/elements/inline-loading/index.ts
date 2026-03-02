import type { Demo, Meta } from '../../js/_types';

export const meta = {
  id: 'inline-loading',
  name: 'Inline loading',
} as const satisfies Meta;

const html = /* html */`
<div aria-live="polite" aria-busy="true"></div>
`;

export const demos: Demo[] = [
  {
    id: 'default',
    name: 'Default',
    html,
  },
];
