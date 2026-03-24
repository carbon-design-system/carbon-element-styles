/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type { Demo, Meta } from '../../js/_types';

export const meta = {
  id: 'fieldset',
  name: 'Fieldset',
  references: [
    {
      label: '<fieldset>',
      url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/fieldset',
    },
    {
      label: 'Form',
      url: 'https://carbondesignsystem.com/components/form/usage/',
    },
  ],
  config: [
    {
      key: 'selector',
      type: 'selector',
      default: 'fieldset',
    },
  ],
} as const satisfies Meta;

const html = /* html */`
<fieldset>
  <legend>
    Legend
  </legend>
  Content
</fieldset>
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
