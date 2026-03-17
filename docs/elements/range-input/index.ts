import type { Demo, Meta } from '../../js/_types';

export const meta = {
  id: 'range-input',
  name: 'Range input',
  reference: {
    label: '<input type="range">',
    source: 'MDN',
    url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/range',
  },
  config: [
    {
      key: 'selector',
      type: 'selector',
      default: 'label:has(input[type="range"])',
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
  <input type="range" />
</label>

<br />

<label>
  Disabled
  <input type="range" disabled />
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
