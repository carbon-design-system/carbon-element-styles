import type { Demo, Meta } from '../../js/_types';

export const meta = {
  id: 'progress-bar',
  name: 'Progress bar',
  reference: {
    label: '<progress>',
    source: 'MDN',
    url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/progress',
  },
  config: [
    {
      key: 'selector',
      type: 'selector',
      default: 'label:has(progress)',
    },
    {
      key: 'axis',
      type: `| 'block'\n| 'inline'`,
      default: `'block'`,
    },
    {
      key: 'thickness',
      type: `| 'thick'\n| 'thin'`,
      default: `'thick'`,
    },
  ],
} as const satisfies Meta;

const html = /* html */`
<label>
  Indeterminate
  <progress></progress>
</label>

<br /><br />

<label>
  Active
  <progress value="0.75">75%</progress>
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
  {
    id: 'thick',
    name: 'Thick',
    html: {
      raw: html,
    },
    config: {
      thickness: `'thick'`,
    },
  },
  {
    id: 'thin',
    name: 'Thin',
    html: {
      raw: html,
    },
    config: {
      thickness: `'thin'`,
    },
  },
];
