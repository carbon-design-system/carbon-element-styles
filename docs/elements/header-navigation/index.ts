import type { Demo, Meta } from '../../js/_types';

export const meta = {
  id: 'header-navigation',
  name: 'Header navigation',
  reference: {
    label: '<header>',
    source: 'MDN',
    url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/header',
  },
  config: [
    {
      key: 'selector',
      type: 'selector',
      default: 'body > header:first-child',
    },
  ],
} as const satisfies Meta;

const html = /* html */`
<header>
  <nav>
    <a href="#">
      IBM <b>Page</b>
    </a>
    <ul>
      <li>
        <a href="#">
          Lorem
        </a>
      </li>
      <li>
        <a href="#" aria-current="page">
          Ipsum
        </a>
      </li>
      <li>
        <a href="#">
          Dolor
        </a>
      </li>
    </ul>
  </nav>
</header>
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
