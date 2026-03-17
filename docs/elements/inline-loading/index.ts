import type { Demo, Meta } from '../../js/_types';

export const meta = {
  id: 'inline-loading',
  name: 'Inline loading',
  reference: {
    label: 'aria-busy',
    source: 'MDN',
    url: 'https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-busy',
  },
  config: [
    {
      key: 'selector',
      type: 'selector',
      default: '[aria-live="polite"][aria-busy="true"]:empty',
    },
  ],
} as const satisfies Meta;

const html = /* html */`
<div aria-live="polite" aria-busy="true"></div>
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
