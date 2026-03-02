import type { Demo, Meta } from '../../js/_types';

export const meta = {
  id: 'date-time-input',
  name: 'Date and time input',
} as const satisfies Meta;

const html = /* html */`
<label>
  Enabled
  <input type="datetime-local" />
</label>

<br />

<label>
  Read only
  <input type="datetime-local" readonly value="2019-09-01T09:41:00" />
</label>

<br />

<label>
  Disabled
  <input type="datetime-local" disabled value="2019-09-01T09:41:00" />
</label>

<br />

<label>
  Invalid
  <input type="datetime-local" value="2019-09-01T09:41:00" aria-invalid="true" />
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
];
