import type { Demo, Meta } from '../../js/_types';

export const meta = {
  id: 'deleted-text',
  name: 'Deleted text',
  reference: {
    label: '<del>',
    source: 'MDN',
    url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/del',
  },
  config: [
    {
      key: 'selector',
      type: 'selector',
      default: 'del',
    },
  ],
} as const satisfies Meta;

const html = /* html */`
<del>Deleted</del>
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
