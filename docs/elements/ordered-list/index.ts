import type { Demo, Meta } from '../../js/_types';

export const meta = {
  id: 'ordered-list',
  name: 'Ordered list',
} as const satisfies Meta;

const html = /* html */`
<ol>
  <li>List item</li>
  <li>List item</li>
  <li>
    List item
    <ol>
      <li>List item</li>
      <li>List item</li>
      <li>
        List item
        <ol>
          <li>List item</li>
          <li>List item</li>
          <li>List item</li>
        </ol>
      </li>
    </ol>
  </li>
</ol>
`;

export const demos: Demo[] = [
  {
    id: 'default',
    name: 'Default',
    html,
  },
];
