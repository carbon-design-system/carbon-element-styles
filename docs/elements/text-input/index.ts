import type { Demo, Meta } from '../../js/_types';

export const meta = {
  id: 'text-input',
  name: 'Text input',
  reference: {
    label: '<input type="text">',
    source: 'MDN',
    url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/text',
  },
  config: [
    {
      key: 'selector',
      type: 'selector',
      default: 'label:has(input[type="text"])',
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
  <input type="text" />
</label>

<br />

<label>
  Read only
  <input type="text" readonly value="Lorem ipsum" />
</label>

<br />

<label>
  Disabled
  <input type="text" disabled value="Lorem ipsum" />
</label>

<br />

<label>
  Invalid
  <input type="text" value="Lorem ipsum" aria-invalid="true" />
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
