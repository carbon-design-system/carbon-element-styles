/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type { Demo, Meta } from '../../js/_types';

export const meta = {
  id: 'side-navigation',
  name: 'Side navigation',
  references: [
    {
      label: '<nav>',
      url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/nav',
    },
    {
      label: 'UI shell left panel',
      url: 'https://carbondesignsystem.com/components/UI-shell-left-panel/usage/',
    },
  ],
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
