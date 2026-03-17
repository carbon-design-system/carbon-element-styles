import type { Demo, Meta } from '../../js/_types';

export const meta = {
  id: 'side-navigation',
  name: 'Side navigation',
  reference: {
    label: '<nav>',
    source: 'MDN',
    url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/nav',
  },
  config: [
    {
      key: 'selector',
      type: 'selector',
      default: 'nav',
    },
  ],
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
    html: {
      raw: html,
    },
  },
];
