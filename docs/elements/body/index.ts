import type { Demo, Meta } from '../../js/_types';

export const meta = {
  id: 'body',
  name: 'Body',
} as const satisfies Meta;

const html = /* html */`
<div class="body">
  Body
</div>
`;

export const demos: Demo[] = [
  {
    id: 'default',
    name: 'Default',
    html,
  },
];
