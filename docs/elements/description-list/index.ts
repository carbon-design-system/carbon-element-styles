/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type { Demo, Meta } from '../../js/_types';

export const meta = {
  id: 'description-list',
  name: 'Description list',
  references: [
    {
      label: '<dl>',
      url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dl',
    },
  ],
  config: [
    {
      key: 'selector',
      type: 'selector',
      default: 'dl',
    },
  ],
} as const satisfies Meta;

const html = /* html */`
<dl>
  <dt>Term 1</dt>
  <dd>Definition 1</dd>

  <dt>Term 2</dt>
  <dd>Definition 2 dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus.</dd>

  <dt>Term 3</dt>
  <dd>Definition 3</dd>
</dl>
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
