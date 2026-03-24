/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type { Demo, Meta } from '../../js/_types';

export const meta = {
  id: 'table',
  name: 'Table',
  references: [
    {
      label: '<table>',
      url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/table',
    },
    {
      label: 'Data table',
      url: 'https://carbondesignsystem.com/components/data-table/usage/',
    },
    {
      label: 'Structured list',
      url: 'https://carbondesignsystem.com/components/structured-list/usage/',
    },
  ],
  config: [
    {
      key: 'selector',
      type: 'selector',
      default: 'table',
    },
    {
      key: 'kind',
      type: `| 'data-table'\n| 'structured-list'\n| 'structured-list--flush'`,
      default: `'data-table'`,
    },
  ],
} as const satisfies Meta;

const html = /* html */`
<table>
  <caption>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</caption>
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
  <tfoot>
    <tr>
      <td>Footer 1</td>
      <td>Footer 2</td>
      <td>Footer 3</td>
    </tr>
  </tfoot>
</table>
`;

export const demos: Demo[] = [
  {
    id: 'default',
    name: 'Default',
    html: {
      raw: html,
    },
  },
  {
    id: 'data-table',
    name: 'Data table',
    html: {
      raw: html,
    },
    config: {
      kind: `'data-table'`,
    },
  },
  {
    id: 'structured-list',
    name: 'Structured list',
    html: {
      raw: html,
    },
    config: {
      kind: `'structured-list'`,
    },
  },
  {
    id: 'structured-list--flush',
    name: 'Structured list (flush)',
    html: {
      raw: html,
    },
    config: {
      kind: `'structured-list--flush'`,
    },
  },
];
