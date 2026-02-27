import type { Demo, Meta } from '../../js/_types';

export const meta = {
  id: 'side-navigation',
  name: 'Side navigation',
} as const satisfies Meta;

const html = /* html */`
<nav>
  <ul>
    <li>
      <button aria-expanded="true" type="button">
        Menu
      </button>
      <ul>
        <li>
          <a href="#">Link</a>
        </li>
        <li>
          <a href="#">Link</a>
        </li>
      </ul>
    </li>
    <li>
      <button aria-expanded="true" type="button">
        Menu
      </button>
      <ul>
        <li>
          <a href="#" aria-current="page">Link</a>
        </li>
        <li>
          <a href="#">Link</a>
        </li>
      </ul>
    </li>
    <li>
      <a href="#">Link</a>
    </li>
    <li>
      <a href="#">Link</a>
    </li>
  </ul>
</nav>
`;

export const demos: Demo[] = [
  {
    id: 'default',
    name: 'Default',
    html,
  },
];
