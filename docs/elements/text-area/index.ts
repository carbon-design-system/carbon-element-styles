import type { Demo, Meta } from '../../js/_types';

export const meta = {
  id: 'text-area',
  name: 'Text area',
} as const satisfies Meta;

const html = /* html */`
<label>
  Enabled
  <textarea></textarea>
</label>

<br />

<label>
  Read only
  <textarea readonly>Lorem ipsum</textarea>
</label>

<br />

<label>
  Disabled
  <textarea disabled>Lorem ipsum</textarea>
</label>

<br />

<label>
  Invalid
  <textarea aria-invalid="true">Lorem ipsum</textarea>
</label>
`;

export const demos: Demo[] = [
  {
    id: 'default',
    name: 'Default',
    html,
  },
];
