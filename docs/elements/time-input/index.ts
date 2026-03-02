import type { Demo, Meta } from '../../js/_types';

export const meta = {
  id: 'time-input',
  name: 'Time input',
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
