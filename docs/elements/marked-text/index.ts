import type { Demo, Meta } from '../../js/_types';

export const meta = {
  id: 'marked-text',
  name: 'Marked text',
} as const satisfies Meta;

const html = /* html */`
<mark>marked</mark>
`;

export const demos: Demo[] = [
  {
    id: 'default',
    name: 'Default',
    html,
  },
];
