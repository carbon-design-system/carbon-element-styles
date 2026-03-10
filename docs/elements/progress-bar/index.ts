import type { Demo, Meta } from '../../js/_types';

export const meta = {
  id: 'progress-bar',
  name: 'Progress bar',
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
    html,
  },
  {
    id: 'block',
    name: 'Block',
    html,
  },
  {
    id: 'inline',
    name: 'Inline',
    html,
  },
  {
    id: 'thick',
    name: 'Thick',
    html,
  },
  {
    id: 'thin',
    name: 'Thin',
    html,
  },
];
