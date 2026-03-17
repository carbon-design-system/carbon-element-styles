import type { Demo, Meta } from '../../js/_types';

export const meta = {
  id: 'label',
  name: 'Label',
  reference: {
    label: '<label>',
    source: 'MDN',
    url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/label',
  },
  config: [
    {
      key: 'selector',
      type: 'selector',
      default: 'label',
    },
    {
      key: 'axis',
      type: `| 'block'\n| 'inline'`,
      default: `'block'`,
    },
  ],
} as const satisfies Meta;

const html = /* html */`
<label>
  Enabled
  <input />
</label>

<br />

<label>
  Disabled
  <input disabled />
</label>
`;

export const demos: Demo[] = [
  {
    id: 'default',
    name: 'Default',
    html: {
      raw: html,
    },
  },
  {
    id: 'block',
    name: 'Block',
    html: {
      raw: html,
    },
    config: {
      axis: `'block'`,
    },
  },
  {
    id: 'inline',
    name: 'Inline',
    html: {
      raw: html,
    },
    config: {
      axis: `'inline'`,
    },
  },
];
