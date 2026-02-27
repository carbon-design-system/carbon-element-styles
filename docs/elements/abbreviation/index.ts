import type { Demo, Meta } from '../../js/_types';

export const meta = {
  id: 'abbreviation',
  name: 'Abbreviation',
} as const satisfies Meta;

const html = /* html */`
<abbr title="Abbreviation">abbr</abbr>
`;

export const demos: Demo[] = [
  {
    id: 'default',
    name: 'Default',
    html,
  },
];
