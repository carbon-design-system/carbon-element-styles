import type { Demo, Meta } from '../../js/_types';

export const meta = {
  id: 'search-input',
  name: 'Search input',
} as const satisfies Meta;

const html = /* html */`
<label>
  Enabled
  <input type="search" />
</label>

<br />

<label>
  Read only
  <input type="search" readonly value="Lorem ipsum" />
</label>

<br />

<label>
  Disabled
  <input type="search" disabled value="Lorem ipsum" />
</label>

<br />

<label>
  Invalid
  <input type="search" value="Lorem ipsum" aria-invalid="true" />
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
