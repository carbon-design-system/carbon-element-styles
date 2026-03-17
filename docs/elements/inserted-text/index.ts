import type { Demo, Meta } from '../../js/_types';

export const meta = {
  id: 'inserted-text',
  name: 'Inserted text',
  reference: {
    label: '<ins>',
    source: 'MDN',
    url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/ins',
  },
  config: [
    {
      key: 'selector',
      type: 'selector',
      default: 'ins',
    },
  ],
} as const satisfies Meta;

const html = /* html */`
<ins>Inserted</ins>
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
