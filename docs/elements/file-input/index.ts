import type { Demo, Meta } from '../../js/_types';

export const meta = {
  id: 'file-input',
  name: 'File input',
  reference: {
    label: '<input type="file">',
    source: 'MDN',
    url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/file',
  },
  config: [
    {
      key: 'selector',
      type: 'selector',
      default: 'label:has(input[type="file"])',
    },
  ],
} as const satisfies Meta;

const html = /* html */`
<label>
  Upload files
  <input type="file" />
</label>

<br />

<label>
  Upload files (disabled)
  <input type="file" disabled />
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
];
