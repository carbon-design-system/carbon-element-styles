import type { Demo, Meta } from '../../js/_types';

export const meta = {
  id: 'checkbox',
  name: 'Checkbox',
} as const satisfies Meta;

const html = /* html */`
<label>
  Unchecked
  <input type="checkbox" />
</label>

<label>
  Unchecked (disabled)
  <input type="checkbox" disabled />
</label>

<label>
  Checked
  <input type="checkbox" checked />
</label>

<label>
  Checked (disabled)
  <input type="checkbox" checked disabled />
</label>

<label>
  Indeterminate
  <input type="checkbox" />
</label>

<label>
  Indeterminate (disabled)
  <input type="checkbox" disabled />
</label>
`;

export const demos: Demo[] = [
  {
    id: 'default',
    name: 'Default',
    html,
    setup: (frame: HTMLElement) => {
      Array.from(frame.querySelectorAll<HTMLInputElement>('input[type="checkbox"]'))
        .slice(-2)
        .forEach((checkbox) => {
          checkbox.indeterminate = true;
        });
    },
  },
];
