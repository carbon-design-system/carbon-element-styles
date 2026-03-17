import type { Demo, Meta } from '../../js/_types';

export const meta = {
  id: 'marked-text',
  name: 'Marked text',
  reference: {
    label: '<mark>',
    source: 'MDN',
    url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/mark',
  },
  config: [
    {
      key: 'selector',
      type: 'selector',
      default: 'mark',
    },
  ],
} as const satisfies Meta;

const html = /* html */`
<mark>Marked</mark>
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
