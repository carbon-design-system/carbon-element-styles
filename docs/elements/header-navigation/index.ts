/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type { Demo, Meta } from '../../js/_types';

export const meta = {
  id: 'header-navigation',
  name: 'Header navigation',
  references: [
    {
      label: '<header>',
      url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/header',
    },
    {
      label: 'UI shell header',
      url: 'https://carbondesignsystem.com/components/UI-shell-header/usage/',
    },
  ],
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
