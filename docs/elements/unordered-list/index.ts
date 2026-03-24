/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type { Demo, Meta } from '../../js/_types';

export const meta = {
  id: 'unordered-list',
  name: 'Unordered list',
  references: [
    {
      label: '<ul>',
      url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/ul',
    },
    {
      label: 'Unordered list',
      url: 'https://carbondesignsystem.com/components/list/usage/#unordered-list',
    },
  ],
  config: [
    {
      key: 'selector',
      type: 'selector',
      default: 'ul',
    },
  ],
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
    html: {
      raw: html,
    },
  },
];
