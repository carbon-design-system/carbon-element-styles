import type { Demo, Meta } from '../../js/_types';

export const meta = {
  id: 'password-input',
  name: 'Password input',
} as const satisfies Meta;

const html = /* html */`
<label>
  Enabled
  <input type="password" />
</label>

<br />

<label>
  Read only
  <input type="password" readonly value="Lorem ipsum" />
</label>

<br />

<label>
  Disabled
  <input type="password" disabled value="Lorem ipsum" />
</label>

<br />

<label>
  Invalid
  <input type="password" value="Lorem ipsum" aria-invalid="true" />
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
