import type { Demo, Meta } from '../../js/_types';

export const meta = {
  id: 'code',
  name: 'Code',
} as const satisfies Meta;

const html = /* html */`
Generate a set of prebuilt stylesheet by running <code>npm run build:prebuilts</code> in your terminal.
`;

export const demos: Demo[] = [
  {
    id: 'default',
    name: 'Default',
    html,
  },
];
