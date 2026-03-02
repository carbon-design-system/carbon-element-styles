import type { Demo, Meta } from '../../js/_types';

export const meta = {
  id: 'file-input',
  name: 'File input',
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
    html,
  },
];
