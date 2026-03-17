import type { Demo, Meta } from '../../js/_types';

export const meta = {
  id: 'time-input',
  name: 'Time input',
  reference: {
    label: '<input type="time">',
    source: 'MDN',
    url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/time',
  },
  config: [
    {
      key: 'selector',
      type: 'selector',
      default: 'label:has(input[type="time"])',
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
  <input type="time" />
</label>

<br />

<label>
  Read only
  <input type="time" readonly value="09:41" />
</label>

<br />

<label>
  Disabled
  <input type="time" disabled value="09:41" />
</label>

<br />

<label>
  Invalid
  <input type="time" value="09:41" aria-invalid="true" />
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
      axis: `'block`,
    },
  },
  {
    id: 'inline',
    name: 'Inline',
    html: {
      raw: html,
    },
    config: {
      axis: `'inline`,
    },
  },
];
