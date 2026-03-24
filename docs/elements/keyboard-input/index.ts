/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type { Demo, Meta } from '../../js/_types';

export const meta = {
  id: 'keyboard-input',
  name: 'Keyboard input',
  references: [
    {
      label: '<kbd>',
      url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/kbd',
    },
  ],
  config: [
    {
      key: 'selector',
      type: 'selector',
      default: 'kbd',
    },
  ],
} as const satisfies Meta;

const html = /* html */`
Press <kbd>cmd</kbd> + <kbd>A</kbd> to select all text on this page.
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
