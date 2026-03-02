import type { Demo, Meta } from '../../js/_types';

export const meta = {
  id: 'unordered-list',
  name: 'Unordered list',
} as const satisfies Meta;

const html = /* html */`
<ul>
  <li>List item</li>
  <li>List item</li>
  <li>
    List item
    <ul>
      <li>List item</li>
      <li>List item</li>
      <li>
        List item
        <ul>
          <li>List item</li>
          <li>List item</li>
          <li>List item</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>
`;

export const demos: Demo[] = [
  {
    id: 'default',
    name: 'Default',
    html,
  },
];
