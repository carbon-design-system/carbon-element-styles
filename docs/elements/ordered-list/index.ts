/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type { Demo, Meta } from '../../js/_types';

export const meta = {
  id: 'ordered-list',
  name: 'Ordered list',
  references: [
    {
      label: '<ol>',
      url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/ol',
    },
    {
      label: 'Ordered list',
      url: 'https://carbondesignsystem.com/components/list/usage/#ordered-list',
    },
  ],
  config: [
    {
      key: 'selector',
      type: 'selector',
      default: 'ol',
    },
  ],
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
    html: {
      raw: html,
    },
  },
];
