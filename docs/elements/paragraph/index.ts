/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type { Demo, Meta } from '../../js/_types';

export const meta = {
  id: 'paragraph',
  name: 'Paragraph',
  references: [
    {
      label: '<p>',
      url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/p',
    },
    {
      label: 'Type basics',
      url: 'https://ibm.com/design/language/typography/type-basics',
    },
  ],
  config: [
    {
      key: 'selector',
      type: 'selector',
      default: 'p',
    },
  ],
} as const satisfies Meta;

const html = /* html */`
<p>
  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est lorem ipsum dolor sit amet.
</p>
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
