/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type { Demo, Meta } from '../../js/_types';

export const meta = {
  id: 'heading-level-5',
  name: 'Heading level 5',
  references: [
    {
      label: '<h1>–<h6>',
      url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/Heading_Elements',
    },
    {
      label: 'Type sets',
      url: 'https://carbondesignsystem.com/elements/typography/type-sets/',
    },
  ],
  config: [
    {
      key: 'selector',
      type: 'selector',
      default: 'h5',
    },
  ],
} as const satisfies Meta;

const html = /* html */`
<h5>Heading level 5</h5>
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
