import type { Demo, Meta } from '../../js/_types';

export const meta = {
  id: 'heading-level-3',
  name: 'Heading level 3',
  reference: {
    label: '<h1>–<h6>',
    source: 'MDN',
    url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/Heading_Elements',
  },
  config: [
    {
      key: 'selector',
      type: 'selector',
      default: 'h3',
    },
  ],
} as const satisfies Meta;

const html = /* html */`
<h3>Heading level 3</h3>
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
