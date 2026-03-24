/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type { Demo, Meta } from '../../js/_types';

import launchIcon from '@carbon/icons/svg/32/launch.svg?raw';

export const meta = {
  id: 'anchor',
  name: 'Anchor',
  references: [
    {
      label: '<a>',
      url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a',
    },
    {
      label: 'Link',
      url: 'https://carbondesignsystem.com/components/link/usage/',
    },
  ],
  config: [
    {
      key: 'selector',
      type: 'selector',
      default: 'a',
    },
  ],
} as const satisfies Meta;

const html = /* html */`
<a href="https://ibm.com">IBM.com</a>

<br /><br />

<a href="https://ibm.com">IBM.com ${launchIcon}</a>
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
