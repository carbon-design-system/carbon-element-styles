import type { Demo, Meta } from '../../js/_types';

export const meta = {
  id: 'inline-quotation',
  name: 'Inline quotation',
} as const satisfies Meta;

const html = /* html */`
Lorem ipsum dolor: <q>Sit amet consetetur sadipscing elitr</q>, sed diam.
`;

export const demos: Demo[] = [
  {
    id: 'default',
    name: 'Default',
    html,
  },
];
