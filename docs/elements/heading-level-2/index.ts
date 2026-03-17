import type { Demo, Meta } from '../../js/_types';

export const meta = {
  id: 'heading-level-2',
  name: 'Heading level 2',
  reference: {
    label: '<h1>–<h6>',
    source: 'MDN',
    url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/Heading_Elements',
  },
  config: [
    {
      key: 'selector',
      type: 'selector',
      default: 'h2',
    },
  ],
} as const satisfies Meta;

const html = /* html */`
<h2>Heading level 2</h2>
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
