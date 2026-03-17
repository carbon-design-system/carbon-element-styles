import type { Demo, Meta } from '../../js/_types';

export const meta = {
  id: 'heading-level-1',
  name: 'Heading level 1',
  reference: {
    label: '<h1>–<h6>',
    source: 'MDN',
    url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/Heading_Elements',
  },
  config: [
    {
      key: 'selector',
      type: 'selector',
      default: 'h1',
    },
  ],
} as const satisfies Meta;

const html = /* html */`
<h1>Heading level 1</h1>
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
