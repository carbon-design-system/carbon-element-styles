import type { Demo, Meta } from '../../js/_types';

export const meta = {
  id: 'heading-level-5',
  name: 'Heading level 5',
  reference: {
    label: '<h1>–<h6>',
    source: 'MDN',
    url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/Heading_Elements',
  },
  config: [
    {
      key: 'selector',
      type: 'selector',
      default: 'h5',
    },
  ],
} as const satisfies Meta;

const html = /* html */`
<h5>Heading level 5</h5>
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
