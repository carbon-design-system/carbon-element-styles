import type { Demo, Meta } from '../../js/_types';

export const meta = {
  id: 'anchor',
  name: 'Anchor',
  reference: {
    label: '<a>',
    source: 'MDN',
    url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a',
  },
  config: [
    {
      key: 'selector',
      type: 'selector',
      default: 'a',
    },
  ],
} as const satisfies Meta;

const html = /* html */`
<a href="https://ibm.com">IBM.com</a>
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
