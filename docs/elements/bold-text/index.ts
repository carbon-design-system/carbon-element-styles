import type { Demo, Meta } from '../../js/_types';

export const meta = {
  id: 'bold-text',
  name: 'Bold text',
  references: [
    {
      label: '<b>',
      url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/b',
    },
  ],
  config: [
    {
      key: 'selector',
      type: 'selector',
      default: 'b, strong',
    },
  ],
} as const satisfies Meta;

const html = /* html */`
<b>Bold</b>

<br /><br />

<strong>Strong importance</strong>
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
