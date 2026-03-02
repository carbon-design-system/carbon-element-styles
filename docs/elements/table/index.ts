import type { Demo, Meta } from '../../js/_types';

export const meta = {
  id: 'table',
  name: 'Table',
} as const satisfies Meta;

const html = /* html */`
<table>
  <thead>
    <tr>
      <th>Column 1</th>
      <th>Column 2</th>
      <th>Column 3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Row 1</td>
      <td>Row 1</td>
      <td>Row 1</td>
    </tr>
    <tr>
      <td>Row 2</td>
      <td>Row 2</td>
      <td>Row 2</td>
    </tr>
    <tr>
      <td>Row 3</td>
      <td>Row 3</td>
      <td>Row 3</td>
    </tr>
  </tbody>
</table>
`;

export const demos: Demo[] = [
  {
    id: 'default',
    name: 'Default',
    html,
  },
  {
    id: 'data-table',
    name: 'Data table',
    html,
  },
  {
    id: 'structured-list',
    name: 'Structured list',
    html,
  },
];
