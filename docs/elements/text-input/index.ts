import type { Demo, Meta } from '../../js/_types';

export const meta = {
  id: 'text-input',
  name: 'Text input',
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
