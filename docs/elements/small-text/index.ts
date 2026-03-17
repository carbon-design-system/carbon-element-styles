import type { Demo, Meta } from '../../js/_types';

export const meta = {
  id: 'small-text',
  name: 'Small text',
  reference: {
    label: '<small>',
    source: 'MDN',
    url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/small',
  },
  config: [
    {
      key: 'selector',
      type: 'selector',
      default: 'small',
    },
  ],
} as const satisfies Meta;

const html = /* html */`
<small>Small</small>
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
