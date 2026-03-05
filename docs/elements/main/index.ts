import type { Demo, Meta } from '../../js/_types';

export const meta = {
  id: 'main',
  name: 'Main',
} as const satisfies Meta;

const html = /* html */`
<div class="main">
  Main
</div>
`;

export const demos: Demo[] = [
  {
    id: 'default',
    name: 'Default',
    html,
  },
];
