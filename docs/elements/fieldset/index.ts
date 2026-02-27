import type { Demo, Meta } from '../../js/_types';

export const meta = {
  id: 'fieldset',
  name: 'Fieldset',
} as const satisfies Meta;

const html = /* html */`
<fieldset>
  <legend>
    Legend
  </legend>
  Content
</fieldset>
`;

export const demos: Demo[] = [
  {
    id: 'default',
    name: 'Default',
    html,
  },
];
