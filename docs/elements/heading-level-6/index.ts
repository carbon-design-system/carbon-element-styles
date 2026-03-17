import type { Demo, Meta } from '../../js/_types';

export const meta = {
  id: 'heading-level-6',
  name: 'Heading level 6',
  reference: {
    label: '<h1>–<h6>',
    source: 'MDN',
    url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/Heading_Elements',
  },
  config: [
    {
      key: 'selector',
      type: 'selector',
      default: 'h6',
    },
  ],
} as const satisfies Meta;

const html = /* html */`
<h6>Heading level 6</h6>
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
