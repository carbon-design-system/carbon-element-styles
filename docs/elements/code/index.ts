import type { Demo, Meta } from '../../js/_types';

export const meta = {
  id: 'code',
  name: 'Code',
  reference: {
    label: '<code>',
    source: 'MDN',
    url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/code',
  },
  config: [
    {
      key: 'selector',
      type: 'selector',
      default: 'code',
    },
  ],
} as const satisfies Meta;

const html = /* html */`
Generate a set of prebuilt stylesheet by running <code>npm run build:prebuilts</code> in your terminal.
`;

export const demos: Demo[] = [
  {
    id: 'default',
    name: 'Default',
    html: {
      raw: html,
    },
  },
];
