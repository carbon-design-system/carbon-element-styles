import type { Meta, Demo } from '../../js/_types';

export const meta = {
  id: 'abbreviation',
  name: 'Abbreviation',
  reference: {
    label: '<abbr>',
    source: 'MDN',
    url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/abbr',
  },
  config: [
    {
      key: 'selector',
      type: 'selector',
      default: 'abbr[title]',
    },
  ],
} as const satisfies Meta;

const html = /* html */`
<abbr title="Abbreviation">abbr</abbr>
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
