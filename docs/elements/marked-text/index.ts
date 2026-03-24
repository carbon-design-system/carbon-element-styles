/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type { Demo, Meta } from '../../js/_types';

export const meta = {
  id: 'marked-text',
  name: 'Marked text',
  references: [
    {
      label: '<mark>',
      url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/mark',
    },
    {
      label: 'Text highlighter',
      url: 'https://labs.carbondesignsystem.com/?path=/docs/react_components-texthighlighter--overview',
    },
  ],
  config: [
    {
      key: 'selector',
      type: 'selector',
      default: 'mark',
    },
  ],
} as const satisfies Meta;

const html = /* html */`
<mark>Marked</mark>
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
