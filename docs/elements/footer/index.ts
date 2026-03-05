import type { Demo, Meta } from '../../js/_types';

export const meta = {
  id: 'footer',
  name: 'Page footer',
} as const satisfies Meta;

const html = /* html */`
<footer>
  Page footer
</footer>
`;

export const demos: Demo[] = [
  {
    id: 'default',
    name: 'Default',
    html,
  },
];
