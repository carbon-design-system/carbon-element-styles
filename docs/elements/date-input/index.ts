import type { Demo, Meta } from '../../js/_types';

export const meta = {
  id: 'date-input',
  name: 'Date input',
  reference: {
    label: '<input type="date">',
    source: 'MDN',
    url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/date',
  },
  config: [
    {
      key: 'selector',
      type: 'selector',
      default: 'label:has(input[type="date"])',
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
  <input type="date" />
</label>

<br />

<label>
  Read only
  <input type="date" readonly value="2019-09-01" />
</label>

<br />

<label>
  Disabled
  <input type="date" disabled value="2019-09-01" />
</label>

<br />

<label>
  Invalid
  <input type="date" value="2019-09-01" aria-invalid="true" />
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
