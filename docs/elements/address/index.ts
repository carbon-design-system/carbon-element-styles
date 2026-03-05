import type { Demo, Meta } from '../../js/_types';

export const meta = {
  id: 'address',
  name: 'Address',
} as const satisfies Meta;

const html = /* html */`
<address>
  IBM<br />
  <br />
  IBM Campus 1<br />
  71139 Ehningen<br />
  Germany
</address>
`;

export const demos: Demo[] = [
  {
    id: 'default',
    name: 'Default',
    html,
  },
];
